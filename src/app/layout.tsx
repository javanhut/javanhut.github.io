import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import 'semantic-ui-css/semantic.min.css'
import BootstrapClient from "@/components/BootstrapClient";
import AnimatedCursor from "react-animated-cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javan Hutchinson - Software Engineer",
  description: "Software Engineer II at Nike. Specializing in systems programming, cloud infrastructure, and backend development.",
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
        innerSize={8}
        outerSize={35}
        innerScale={0.7}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#ef4444',
          mixBlendMode: 'exclusion'
        }}
        outerStyle={{
          border: '3px solid #ef4444',
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        ]}
        trailingSpeed={8}
/>
      <BootstrapClient />
      </body>

    </html>
  );
}
