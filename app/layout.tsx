import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercelanalytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PT Semen Nusantara - Produsen Semen Terpercaya Indonesia',
  description: 'PT Semen Nusantara adalah perusahaan tambang dan produsen semen terkemuka di Indonesia dengan kapasitas produksi tinggi dan kualitas premium.',
  generator: 'v0.app',
  
  verification: {
    google: 'Sjc5_UVXjju6MlLayc_xz7hJZ_9KXooz19-m_FjIOi8',
  },

  openGraph: {
    title: 'PT Semen Nusantara - Membangun Negeri dengan Kualitas',
    description: 'Produsen semen premium dengan standar internasional dan komitmen keberlanjutan.',
    url: 'https://website-tambang.vercel.app',
    siteName: 'PT Semen Nusantara',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Semen Nusantara Indonesia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PT Semen Nusantara',
    description: 'Produsen semen terpercaya di Indonesia.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />

        {/* Skrip Proteksi Keamanan Konten */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mencegah Klik Kanan
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });

              // Mencegah Shortcut Inspeksi (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
              document.addEventListener('keydown', function(e) {
                if (
                  e.key === 'F12' ||
                  (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
                  (e.ctrlKey && e.key === 'U')
                ) {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}