import { trackEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/dict"

interface Props {
  cvUrl: string
  cvFilename: string
  label: string
  locale: Locale
}

export function CVDownload({ cvUrl, cvFilename, label, locale }: Props) {
  return (
    <Button asChild variant="outline" size="sm">
      <a
        href={cvUrl}
        download={cvFilename}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("cv_download", { locale })}
      >
        {label}
      </a>
    </Button>
  )
}
