import { NextRequest, NextResponse } from 'next/server'

const LOCALES = ['es', 'en'] as const
type Locale = typeof LOCALES[number]
const DEFAULT_LOCALE: Locale = 'es'

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  
  // Parsear el header Accept-Language y buscar el primer match
  const languages = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase().slice(0, 2))
  
  for (const lang of languages) {
    if (LOCALES.includes(lang as Locale)) {
      return lang as Locale
    }
  }
  
  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignorar rutas de assets, API, _next, y archivos con extensión
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Si ya tiene un locale válido al inicio, dejarlo pasar
  const hasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (hasLocale) {
    return NextResponse.next()
  }

  // Redirigir / (y cualquier ruta sin locale) al locale preferido
  const locale = getPreferredLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Matchear todo excepto internals de Next.js y archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
