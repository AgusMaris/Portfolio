import { trackEvent } from "@/lib/analytics"

interface Props {
  href: string
  label: string
  platform: string
  className?: string
  children: React.ReactNode
}

export function SocialLink({ href, label, platform, className, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      onClick={() => trackEvent("social_click", { platform })}
    >
      {children}
    </a>
  )
}
