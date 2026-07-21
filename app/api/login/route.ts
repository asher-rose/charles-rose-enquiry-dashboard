import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { passwordToken } from "../../../lib/auth";

const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7;

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");
  const expectedPassword = process.env.DASHBOARD_PASSWORD;

  if (!expectedPassword) {
    redirect("/login?error=1");
  }

  if (password !== expectedPassword) {
    redirect("/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("dashboard_access", await passwordToken(expectedPassword), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ONE_WEEK_SECONDS,
    path: "/"
  });

  redirect("/");
}
