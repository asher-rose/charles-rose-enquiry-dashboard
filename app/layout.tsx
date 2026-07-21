import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Charles Rose Enquiry Dashboard",
  description: "Private enquiry analytics dashboard for Charles Rose."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
