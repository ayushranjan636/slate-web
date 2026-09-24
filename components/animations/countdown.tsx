"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  /** ISO date string with timezone, e.g. "2026-11-14T00:00:00+05:30" */
  targetDate: string
  /** Shown once the target date has passed */
  liveMessage?: string
}

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: number): TimeLeft | null {
  const difference = target - Date.now()
  if (difference <= 0) return null
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

export function Countdown({ targetDate, liveMessage = "eRaksha is now live!" }: CountdownProps) {
  // `undefined` = not yet computed on the client (avoids hydration mismatch)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined)

  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const tick = () => {
      const next = getTimeLeft(target)
      setTimeLeft(next)
      return next
    }

    if (!tick()) return

    const interval = setInterval(() => {
      if (!tick()) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft === null) {
    return (
      <p className="mt-8 mb-6 text-2xl font-bold text-electric" role="status">
        {liveMessage}
      </p>
    )
  }

  const t = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const timeBlocks = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ]

  return (
    <div
      className="flex gap-4 justify-center items-center mt-12 mb-6"
      role="timer"
      aria-label={`${t.days} days, ${t.hours} hours and ${t.minutes} minutes until launch`}
    >
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-card border border-border/50 text-foreground w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl shadow-sm backdrop-blur-sm relative overflow-hidden group">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tighter relative z-10 text-electric">
              {timeLeft === undefined ? "--" : block.value.toString().padStart(2, "0")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric/5 pointer-events-none" />
          </div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground mt-3 font-semibold">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  )
}
