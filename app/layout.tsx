import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazir = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-vazir', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gtaworld.ir'),
  title: 'GTA World | دنیای GTA به زبان فارسی',
  description: 'GTA World؛ مرجع فارسی اخبار، اطلاعات، راهنماها و دیتابیس دنیای Grand Theft Auto؛ از GTA VI و GTA Online تا GTA V و نسخه‌های کلاسیک.',
  alternates: { canonical: 'https://gtaworld.ir/' },
  openGraph: { title: 'GTA World | دنیای GTA به زبان فارسی', description: 'مرجع فارسی اخبار، اطلاعات و راهنماهای دنیای Grand Theft Auto', type: 'website', locale: 'fa_IR', siteName: 'GTA World', images: [{ url: '/images/hero-vc.png', width: 1600, height: 900, alt: 'نمای سینمایی از شهر نئونی Vice City' }] },
  twitter: { card: 'summary_large_image', title: 'GTA World | دنیای GTA به زبان فارسی', description: 'مرجع فارسی اخبار، اطلاعات و راهنماهای دنیای Grand Theft Auto', images: ['/images/hero-vc.png'] },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#08070d', colorScheme: 'dark', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className="bg-background"><body className={`${vazir.variable} antialiased`}>{children}</body></html>
}
