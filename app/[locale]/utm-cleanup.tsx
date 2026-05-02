"use client"

import { useEffect } from 'react'

export function UTMCleanup() {
  useEffect(() => {
    const url = new URL(window.location.href)
    const hasUTM = Array.from(url.searchParams.keys()).some(key => key.startsWith('utm_'))

    if (hasUTM) {
      const cleanParams = new URLSearchParams()
      url.searchParams.forEach((value, key) => {
        if (!key.startsWith('utm_')) {
          cleanParams.append(key, value)
        }
      })

      const search = cleanParams.toString()
      const cleanUrl = url.pathname + (search ? `?${search}` : '') + url.hash
      history.replaceState({}, '', cleanUrl)
    }
  }, [])

  return null
}
