import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Organism/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impersonal",
  description: "Create your personal portfolio website and showcase your work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-[#0E0E10]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
