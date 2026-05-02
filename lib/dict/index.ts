import type { Dict } from "./types"
import { es } from "./es"
import { en } from "./en"

export type Locale = "es" | "en"

const dicts: Record<Locale, Dict> = { es, en }

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? dicts.es
}

export type { Dict }
