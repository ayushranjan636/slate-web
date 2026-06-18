"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2 } from "lucide-react"

export function WaitlistModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMsg("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      city: formData.get("city") as string,
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Something went wrong")
      }

      setIsSuccess(true)
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to join waitlist. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset state when modal closes
      setTimeout(() => {
        setIsSuccess(false)
        setErrorMsg("")
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Join the Waitlist</DialogTitle>
          <DialogDescription className="text-center">
            Be the first to know when eRaksha launches in your city.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="h-16 w-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">You&apos;re on the list!</h3>
            <p className="text-center text-muted-foreground text-sm max-w-[280px]">
              We&apos;ll reach out to you as soon as we&apos;re ready for you.
            </p>
            <div className="pt-4 w-full">
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <a href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt" target="_blank" rel="noopener noreferrer">
                  Join our WhatsApp Community
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Enter your full name" required className="border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (Gmail preferred)</Label>
              <Input id="email" name="email" type="email" placeholder="you@gmail.com" required className="border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" placeholder="e.g. Chennai, Mumbai" required className="border-border/50" />
            </div>

            {errorMsg && (
              <p className="text-sm text-destructive text-center">{errorMsg}</p>
            )}
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-gradient-to-r from-bluePrimary to-electric hover:opacity-90 text-white shadow-md border-0" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
