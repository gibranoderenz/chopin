import { Navbar } from "@/components/elements";
import type { Metadata } from "next";
import { Solway } from "next/font/google";
import "./globals.css";

const solway = Solway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gibrano Fabien Derenz",
  description:
    "Gibrano Fabien Derenz is a frontend, backend, and mobile engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={solway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
