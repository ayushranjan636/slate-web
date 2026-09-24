/**
 * Lightweight in-memory rate limiter + input validation helpers for API routes.
 *
 * Note: in-memory limits are per server instance. For multi-instance deployments,
 * swap this for a shared store (e.g. Upstash Redis).
 */

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return req.headers.get("x-real-ip") ?? "unknown"
}

/** Returns true if the request is allowed, false if the limit is exceeded. */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    if (buckets.size > 10_000) {
      for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k)
    }
    return true
  }

  if (bucket.count >= limit) return false
  bucket.count += 1
  return true
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.length <= 254 && EMAIL_RE.test(email.trim())
}

/** Accepts formats like "+91 98765 43210", "09876543210", "(987) 654-3210": 10–15 digits. */
export function isValidPhone(phone: unknown): phone is string {
  if (typeof phone !== "string") return false
  if (!/^[\d\s()+-]+$/.test(phone.trim())) return false
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 10 && digits.length <= 15
}

export function cleanText(value: unknown, maxLength = 100): string {
  if (typeof value !== "string") return ""
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength)
}
