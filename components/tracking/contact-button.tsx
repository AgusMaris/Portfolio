"use client"

import { trackEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface Props {
  href: string
  label: string
  eventType: "calendly" | "email"
  children: ReactNode
  target?: string
  rel?: string
}

export function ContactButton({ href, label, eventType, children, target, rel }: Props) {
  return (
    <Button asChild size="lg" className="group">
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={() => trackEvent("contact_click", { type: eventType })}
      >
        {children}
      </a>
    </Button>
  )
}
