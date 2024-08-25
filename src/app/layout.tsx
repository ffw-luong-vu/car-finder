import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});
export const metadata: Metadata = {
  title: "Car Finder",
  description:
    "An application designed to help users search for and find their ideal car.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <main className="py-5 md:py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
