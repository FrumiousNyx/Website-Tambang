import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PT Semen Nusantara - Produsen Semen Terpercaya Indonesia',
  description: 'PT Semen Nusantara adalah perusahaan tambang dan produsen semen terkemuka di Indonesia.',
  verification: {
    google: 'Sjc5_UVXjju6MlLayc_xz7hJZ_9KXooz19-m_FjIOi8',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />

        {/* Skrip Proteksi Keamanan Konten */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('keydown', function(e) {
                if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
                  e.preventDefault();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}