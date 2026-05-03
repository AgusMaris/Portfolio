import { trackEvent } from "@/lib/analytics"

interface Props {
  href: string
  label: string
  index: number
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export function NavLink({ href, label, index, className, onClick, children }: Props) {
  const handleClick = () => {
    trackEvent("nav_click", { section: label.toLowerCase(), index: index + 1 })
    onClick?.()
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
