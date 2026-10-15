import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const body = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Kashish | AI & ML Engineer",
  description: "AI Research Engineer & Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
