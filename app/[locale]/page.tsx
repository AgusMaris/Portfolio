import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { getDict, type Locale } from "@/lib/dict"

const LOCALES: Locale[] = ["es", "en"]

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (!LOCALES.includes(locale)) {
    notFound()
  }

  const dict = getDict(locale)

  return (
    <main className="min-h-screen">
      <Navbar dict={dict.nav} locale={locale} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <TechStack dict={dict.techStack} />
      <Experience dict={dict.experience} />
      <Testimonials dict={dict.testimonials} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </main>
  )
}
