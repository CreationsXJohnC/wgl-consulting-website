import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ori Company | WGL Consulting LLC",
  description: "Full service medical cannabis consulting firm. Agriculture, indoor horticulture, government compliance, and operations. We Grow Life.",
  keywords: ["medical cannabis consulting", "WGL Consulting", "Ori Company", "agriculture consulting", "indoor horticulture", "government compliance", "DC cannabis"],
  openGraph: {
    title: "Ori Company | WGL Consulting LLC",
    description: "Full service medical cannabis consulting firm. We Grow Life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
