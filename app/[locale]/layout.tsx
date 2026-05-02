import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import '../globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code'
});

export const metadata: Metadata = {
  title: 'Agustin Mariscotti | Fullstack Developer',
  description: 'Desarrollador Fullstack con orientacion frontend con mas de 5 anos de experiencia. Especializado en React, Next.js, TypeScript y Node.js.',
  generator: 'v0.app',
  keywords: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Frontend', 'Fullstack', 'Developer'],
  authors: [{ name: 'Agustin Mariscotti' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

type Locale = 'es' | 'en'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} className={`${inter.variable} ${firaCode.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <Script
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              strategy="afterInteractive"
            />
          </>
        )}
      </body>
    </html>
  )
}
