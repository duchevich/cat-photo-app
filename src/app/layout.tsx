import type { Metadata } from "next";
import "./globals.scss";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "CatPhotoApp",
  description: "Everyone loves cute cats online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
