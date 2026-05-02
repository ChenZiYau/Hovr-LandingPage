import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hovr — Your World. Always Within Reach.",
  description:
    "The all-in-one student super-app. Floating file overlay, study groups, smart deadline calendar, and cross-device sync — replacing 6 tools with one beautiful platform.",
  keywords: ["student app", "productivity", "file overlay", "study groups", "deadline calendar"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
