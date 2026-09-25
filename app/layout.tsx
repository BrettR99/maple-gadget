import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/SiteChrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Maple Gadget: Honest tech & gaming reviews for Canadians",
    template: "%s · Maple Gadget",
  },
  description:
    "Independent tech and gaming gear reviews with Canadian prices and Canadian availability. No sponsored rankings, no US prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body className={`${inter.variable} ${grotesk.variable} min-h-screen bg-ink-950`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
