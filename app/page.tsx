import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { EasterEgg, Features, NewsPreview, Newsletter, SeoIntroduction, StatusBanner } from '@/components/sections'
import { Footer } from '@/components/footer'

export default function Page() {
  return <main className="min-h-screen overflow-hidden bg-background"><Header/><Hero/><StatusBanner/><Features/><NewsPreview/><SeoIntroduction/><Newsletter/><EasterEgg/><Footer/></main>
}
