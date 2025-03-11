import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"

const wrhFont = localFont({
  src: [
    {
      path: './font/OneBangkok-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/OneBangkok-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/OneBangkok-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/OneBangkok-MediumItalic.otf',
      weight: '600',
      style: 'italic',
    }
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "The Wireless House",
  description: "The Wireless House Book App",
  other: { 'apple-mobile-web-app-capable': 'yes' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wrhFont.className} antialiased text-base`}
      >
        {children}
      </body>
    </html>
  );
}
