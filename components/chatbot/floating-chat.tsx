"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { MessageSquare, X, Send, Loader2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)

  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline break-all text-electric"
        >
          {part}
        </a>
      )
    }

    return <span key={index}>{part}</span>
  })
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [chatInput, setChatInput] = useState("")
  
  const chat = useChat({ api: "/api/chat" })
  const { messages, error, sendMessage, status } = chat
  const isLoading = status === "submitted" || status === "streaming"
  
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim() || isLoading) return
    const textToSend = chatInput
    setChatInput("")
    await sendMessage({ text: textToSend })
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-bluePrimary to-electric hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="h-6 w-6 text-white" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] bg-background border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-bluePrimary to-electric p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">eRaksha Support</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 hover:text-white rounded-full h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 bg-muted/30" ref={scrollRef}>
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm py-4">
                  <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Hi there! I&apos;m here to answer any questions about eRaksha or help you join the waitlist. How can I help?</p>
                </div>
              )}
              
              {messages.map((m) => {
                const textParts = m.parts.filter((part) => part.type === "text" && part.text.trim())
                const toolParts = m.parts.filter(
                  (part) =>
                    part.type === "tool-joinWaitlist" && part.state === "output-available"
                )

                return (
                  <div key={m.id} className="space-y-2">
                    {textParts.length > 0 && (
                      <div className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[85%] min-w-0 rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap break-words ${
                            m.role === "user"
                              ? "bg-bluePrimary text-white rounded-tr-sm"
                              : "bg-card border border-border/50 text-foreground rounded-tl-sm shadow-sm"
                          }`}
                        >
                          {textParts.map((part, index) =>
                            part.type === "text" ? (
                              <span key={index}>{renderTextWithLinks(part.text)}</span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}

                    {toolParts.map((part) =>
                      part.type === "tool-joinWaitlist" && part.state === "output-available" ? (
                        <div key={part.toolCallId} className="flex justify-start">
                          <div className="max-w-[85%] min-w-0 w-full rounded-2xl rounded-tl-sm border border-emerald/20 bg-emerald/10 px-4 py-3 text-xs leading-relaxed text-emerald-700 shadow-sm break-words">
                            <p className="mb-1 font-semibold">✓ Added to waitlist</p>
                            <p>{renderTextWithLinks(String(part.output))}</p>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                )
              })}

              {/* Error message */}
              {error && (
                <div className="text-center text-sm p-3 bg-destructive/10 text-destructive rounded-xl border border-destructive/20">
                  {error.message?.includes("API Key") 
                    ? "Chatbot is being configured. Please try again later."
                    : "Something went wrong. Please try again."}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border/50 rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-background border-t border-border/50">
            <form onSubmit={onSubmit} className="flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about eRaksha..."
                className="flex-1 rounded-full border-border/50 focus-visible:ring-bluePrimary"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !chatInput.trim()}
                className="rounded-full bg-bluePrimary hover:bg-electric transition-colors"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
