import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Organism/layout/header";
import Footer from "@/components/Organism/layout/footer";
import PageProviders from "./providers/pageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impersonal",
  description: "Create your personal portfolio website and showcase your work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/ImpersonalLogoHijau.svg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} relative text-white bg-[#0E0E10]`}>
        <PageProviders>
          <Header />
          {children}
          <Footer />
        </PageProviders>
      </body>
    </html>
  );
}
