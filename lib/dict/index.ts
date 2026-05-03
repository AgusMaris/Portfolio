import type { Dict } from "./types"
import { es } from "./es"
import { en } from "./en"

export const LOCALES = ["es", "en"] as const

export type Locale = (typeof LOCALES)[number]

const dicts: Record<Locale, Dict> = { es, en }

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? dicts.es
}

export type { Dict }
