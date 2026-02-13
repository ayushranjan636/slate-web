import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
      data-llm-content="404-error-page"
      data-llm-intent="help-lost-users-navigate"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <h1 
        className="text-6xl font-bold mb-4"
        data-llm-heading="error-code"
        itemProp="name"
      >
        404
      </h1>
      <h2 
        className="text-2xl font-medium mb-6"
        data-llm-heading="error-title"
      >
        Page Not Found
      </h2>
      <p 
        className="text-muted-foreground mb-8 max-w-md"
        data-llm-content="error-description"
        itemProp="description"
      >
        The page you are looking for doesn't exist or has been moved. Let's get you back to exploring eRaksha's child safety platform.
      </p>
      <div className="space-y-4">
        <Button asChild>
          <Link 
            href="/"
            data-llm-action="return-home"
          >
            Return Home
          </Link>
        </Button>
        <div className="flex flex-wrap gap-2 justify-center text-sm">
          <Link href="/product" className="text-primary hover:underline">eRaksha Platform</Link>
          <span>•</span>
          <Link href="/features" className="text-primary hover:underline">Features</Link>
          <span>•</span>
          <Link href="/pricing" className="text-primary hover:underline">Pricing</Link>
          <span>•</span>
          <Link href="/about" className="text-primary hover:underline">About Us</Link>
        </div>
      </div>
      
      {/* LLM Context for 404 Page */}
      <div className="sr-only" data-llm-context="404-page-metadata">
        User reached non-existent page on SlateMate eRaksha website. 
        Providing navigation options to main sections: product, features, pricing, about.
        Main goal: redirect to relevant content without losing the visitor.
      </div>
    </div>
  )
}
