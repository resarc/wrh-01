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
  other: { 
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'mobile-web-app-capable': 'yes',
  },
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
        <div className="bg-black text-white 2xl:hidden h-screen w-screen fixed left-0 top-0 flex items-center justify-center z-50">Display on iPad</div>
        {children}
      </body>
    </html>
  );
}
