'use client'

import Image from 'next/image'
import { ArrowLeft, Play } from 'lucide-react'
import { Countdown } from './countdown'

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28">
      <Image src="/images/hero-vc.png" alt="خیابان نئونی در شهری الهام‌گرفته از Vice City" fill priority className="-z-20 object-cover object-center opacity-50" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,13,.4),#08070d_88%)]" />
      <div className="absolute inset-0 -z-10 grid-lines opacity-30" />
      <div className="container-shell grid min-h-[780px] items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div className="max-w-3xl">
          <div className="animate-rise mb-7 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary"><span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#f04a9a]" />GTA VI</div>
          <h1 className="hero-title animate-rise-delay-1 font-black tracking-[-.06em] text-foreground text-glow">بالاخره نزدیک است...</h1>
          <p className="animate-rise-delay-2 mt-7 max-w-xl text-lg leading-9 text-muted sm:text-xl">مرجع فارسی اخبار، اطلاعات و راهنماهای GTA VI</p>
          <p className="animate-rise-delay-2 mt-4 max-w-lg leading-8 text-muted/75">جدیدترین اخبار، تریلرها، اطلاعات بازی، نقشه، شخصیت‌ها، ماشین‌ها و راهنماهای GTA VI را یکجا دنبال کنید.</p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3"><a href="#newsletter" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-[0_0_30px_rgba(240,74,154,.28)] transition hover:-translate-y-1 hover:bg-[#f35eaa]">اولین نفر باخبر شو <ArrowLeft size={17} /></a><a href="#features" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.04] px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:border-secondary/60 hover:text-secondary"><Play size={16} fill="currentColor" />مشاهده GTA VI</a></div>
        </div>
        <div className="animate-rise-delay-3 lg:pt-32"><Countdown /></div>
      </div>
    </section>
  )
}
