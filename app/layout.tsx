import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazir = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-vazir', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gtafarsi.example.com'),
  title: 'GTA VI فارسی | آخرین اخبار، اطلاعات و راهنماهای GTA 6',
  description: 'آخرین اخبار و اطلاعات GTA VI، تاریخ انتشار، تریلرها، نقشه Vice City، شخصیت‌ها، ماشین‌ها، راهنماها و هر آنچه درباره Grand Theft Auto VI می‌دانیم.',
  alternates: { canonical: '/' },
  openGraph: { title: 'GTA VI فارسی', description: 'مرجع فارسی اخبار، اطلاعات و راهنماهای GTA VI', type: 'website', locale: 'fa_IR', siteName: 'GTA فارسی', images: [{ url: '/images/hero-vc.png', width: 1600, height: 900, alt: 'نمای سینمایی از شهر نئونی' }] },
  twitter: { card: 'summary_large_image', title: 'GTA VI فارسی', description: 'مرجع فارسی اخبار، اطلاعات و راهنماهای GTA VI', images: ['/images/hero-vc.png'] },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#08070d', colorScheme: 'dark', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className="bg-background"><body className={`${vazir.variable} antialiased`}>{children}</body></html>
}
