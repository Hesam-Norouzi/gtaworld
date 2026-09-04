'use client'

import { useEffect, useState } from 'react'

const target = new Date('2026-11-19T00:00:00+03:30').getTime()
const fa = (value: number) => value.toLocaleString('fa-IR', { useGrouping: false })

export function Countdown() {
  const [left, setLeft] = useState<number | null>(null)

  useEffect(() => {
    const update = () => setLeft(Math.max(0, target - Date.now()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const units = left === null
    ? null
    : [
        { n: Math.floor(left / 86400000), l: 'روز' },
        { n: Math.floor(left / 3600000) % 24, l: 'ساعت' },
        { n: Math.floor(left / 60000) % 60, l: 'دقیقه' },
        { n: Math.floor(left / 1000) % 60, l: 'ثانیه' },
      ]

  return (
    <div className="border-glow rounded-3xl border border-white/10 bg-[#100d18]/80 p-5 backdrop-blur-md sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-muted">تا انتشار GTA VI</span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_#f04a9a]" />
      </div>
      {left === null ? (
        <div aria-hidden="true" className="grid grid-cols-4 gap-2 sm:gap-4">
          {[0, 1, 2, 3].map((unit) => (
            <div key={unit} className="h-24 rounded-2xl border border-white/10 bg-white/[.03] px-2 py-4" />
          ))}
        </div>
      ) : left === 0 ? (
        <p className="py-7 text-center text-2xl font-bold text-primary">GTA VI منتشر شد</p>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {units?.map((unit) => (
            <div key={unit.l} className="rounded-2xl border border-white/10 bg-white/[.03] px-2 py-4 text-center">
              <div className="text-2xl font-black text-foreground sm:text-4xl">{fa(unit.n)}</div>
              <div className="mt-1 text-[11px] text-muted sm:text-xs">{unit.l}</div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-5 text-center text-xs text-muted">۱۹ نوامبر ۲۰۲۶</p>
    </div>
  )
}
