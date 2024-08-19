import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const font = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs-blog-boilerplate",
  description: "Build a blog with nextjs, mdx, contentlayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
