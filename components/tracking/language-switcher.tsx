import { trackEvent } from "@/lib/analytics"
import type { Locale } from "@/lib/dict"

interface Props {
  currentLocale: Locale
  otherLocalePath: string
  isMobile?: boolean
}

export function LanguageSwitcher({ currentLocale, otherLocalePath, isMobile }: Props) {
  const baseClasses = isMobile ? "text-base font-mono" : "text-sm font-mono"
  
  return (
    <div className={`${baseClasses} flex items-center gap-1 ${isMobile ? "pt-2 border-t border-border" : ""}`}>
      {currentLocale === "es" ? (
        <span className="text-primary font-semibold">ES</span>
      ) : (
        <a
          href={otherLocalePath}
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={() => trackEvent("language_switch", { from: "en", to: "es" })}
        >
          ES
        </a>
      )}
      <span className="text-muted-foreground/40 mx-0.5">|</span>
      {currentLocale === "en" ? (
        <span className="text-primary font-semibold">EN</span>
      ) : (
        <a
          href={otherLocalePath}
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={() => trackEvent("language_switch", { from: "es", to: "en" })}
        >
          EN
        </a>
      )}
    </div>
  )
}
