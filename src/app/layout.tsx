import "@/styles/globals.css";
import AnimatedComponent from "@/styles/AnimatedComponent";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const firaCode = localFont({
  src: "../styles/fonts/FiraCode-Regular.ttf",
  display: "swap",
  variable: "--font-fira-code",
});
export const metadata: Metadata = {
  title: "Justin Pham's Portfolio",
  description:
    "View Justin Pham's portfolio showcasing software engineering projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={firaCode.className}>
      <body className="flex min-h-screen flex-col overflow-hidden bg-gray-950">
        <main className="m-4 flex flex-1 flex-col justify-center rounded-lg border border-slate-800 bg-slate-900">
          <AnimatedComponent variants="fadeDown">
            <NavBar />
          </AnimatedComponent>
          <div className="relative flex flex-1 text-white">
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>
          <AnimatedComponent>
            <Footer />
          </AnimatedComponent>
        </main>
      </body>
    </html>
  );
}
