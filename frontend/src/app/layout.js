import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter ({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "RFI Tech: Mini Inventory",
  description: "Aplikasi manajemen stok barang sederhana untuk RFI Tech",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

      </body>
    </html>
  );
}
