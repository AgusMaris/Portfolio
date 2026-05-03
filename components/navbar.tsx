import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/tracking/nav-link";
import { CVDownload } from "@/components/tracking/cv-download";
import { LanguageSwitcher } from "@/components/tracking/language-switcher";
import type { NavDict } from "@/lib/dict/types";
import type { Locale } from "@/lib/dict";

interface Props {
  dict: NavDict;
  locale: Locale;
  otherLocalePath: string;
}

const navItemClasses = [
  "anim-nav-item-1",
  "anim-nav-item-2",
  "anim-nav-item-3",
  "anim-nav-item-4",
  "anim-nav-item-5",
];

export function Navbar({ dict, locale, otherLocalePath }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cvUrl = locale === "es" ? "/cv.pdf" : "/resume.pdf";
  const cvFilename =
    locale === "es"
      ? "agustin-mariscotti-cv.pdf"
      : "agustin-mariscotti-resume.pdf";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 anim-nav-slide",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/android-chrome-192x192.png"
              alt="AM Logo"
              className="w-8 h-8 rounded-sm"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {dict.items.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                index={index}
                className={cn(
                  "text-sm text-muted-foreground hover:text-primary transition-colors",
                  navItemClasses[index],
                )}
              >
                <span className="text-primary font-mono text-xs mr-1">
                  0{index + 1}.
                </span>
                {item.label}
              </NavLink>
            ))}

            {/* Language switcher */}
            <div className="anim-nav-item-5">
              <LanguageSwitcher
                currentLocale={locale}
                otherLocalePath={otherLocalePath}
              />
            </div>

            <div className="anim-nav-item-6">
              <CVDownload
                cvUrl={cvUrl}
                cvFilename={cvFilename}
                label={dict.cvLabel}
                locale={locale}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? dict.ariaLabelCloseMenu : dict.ariaLabelOpenMenu
            }
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav
          className={cn(
            "absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card border-l border-border p-8 pt-24 flex flex-col gap-6 transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {dict.items.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                index={index}
                className="text-lg text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary font-mono text-sm mr-2">
                  0{index + 1}.
                </span>
                {item.label}
              </NavLink>
            ))}

          {/* Mobile language switcher */}
          <LanguageSwitcher
            currentLocale={locale}
            otherLocalePath={otherLocalePath}
            isMobile
          />

          <CVDownload
            cvUrl={cvUrl}
            cvFilename={cvFilename}
            label={dict.cvLabel}
            locale={locale}
          />
        </nav>
      </div>
    </>
  );
}
