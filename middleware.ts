import { NextResponse, type NextRequest } from "next/server";
import { passwordToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const expectedPassword = process.env.DASHBOARD_PASSWORD;
  const accessCookie = request.cookies.get("dashboard_access")?.value;

  if (expectedPassword && accessCookie === await passwordToken(expectedPassword)) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
