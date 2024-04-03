import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import 'semantic-ui-css/semantic.min.css'
import BootstrapClient from "@/components/BootstrapClient";
import AnimatedCursor from "react-animated-cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javan's Professional Portfolio",
  description: "Projects and information about Javan's professional career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {children}
       <AnimatedCursor
        innerSize={5}
        outerSize={20}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
        backgroundColor: '#080808'
          }}
        outerStyle={{
          border: '3px solid #009BFF'
          }}
          trailingSpeed={10}
/>
      <BootstrapClient />
      </body>

    </html>
  );
}
