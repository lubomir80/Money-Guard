import { ToastContainer } from 'react-toastify';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   weight: "400",
   subsets: ["latin"]
});

export const metadata: Metadata = {
   title: "Welcome / Money Guard",
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
            className={`${poppins.className} antialiased min-h-screen grid
           bg-gradient-to-br from-[#040044] via-[#5710a3] to-[#2e1746] bg-no-repeat`}>
            <main className="overflow-y-auto min-h-[100dvh] grid place-items-center">
               {children}
            </main>
            <ToastContainer position="bottom-right" />
         </body>
      </html>
   );
}
