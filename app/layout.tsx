import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   weight: "400",
   subsets: ["latin"]
});

export const metadata: Metadata = {
   title: {
      template: '%s / Money Guard ',
      default: "Welcome / Money Guard"
   },
   description: "Track expenses and incomes",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${poppins.className} antialiased
           bg-gradient-to-br from-[#040044] via-[#5710a3] to-[#2e1746]`}>
            {children}
         </body>
      </html>
   );
}
