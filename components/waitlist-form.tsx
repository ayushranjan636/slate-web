"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface WaitlistFormProps {
  variant?: "light" | "dark"
  buttonText?: string
}

export function WaitlistForm({ variant = "light", buttonText = "Join Now" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setErrorMsg("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Something went wrong")
      }

      setIsSuccess(true)
      setEmail("")
    } catch (error) {
      console.error("Error submitting email:", error)
      setErrorMsg(
        error instanceof Error ? error.message : "Failed to subscribe. Please try again."
      )
    }

    setIsSubmitting(false)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  const isDark = variant === "dark"

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={`min-w-0 w-full h-10 px-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-electric ${
            isDark
              ? "bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              : "bg-background border border-input text-foreground"
          }`}
        />
        <Button
          type="submit"
          variant="glow"
          size="default"
          disabled={isSubmitting || isSuccess}
          className="whitespace-nowrap sm:w-auto w-full sm:flex-shrink-0"
        >
          {isSubmitting ? "Joining..." : isSuccess ? "Joined!" : buttonText}
        </Button>
      </div>
      {errorMsg && (
        <p className="mt-2 text-sm text-destructive">{errorMsg}</p>
      )}
    </form>
  )
}
