"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex gap-4 justify-center items-center mt-12 mb-6">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-card border border-border/50 text-foreground w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl shadow-sm backdrop-blur-sm relative overflow-hidden group">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tighter relative z-10 text-electric">
              {block.value.toString().padStart(2, '0')}
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
