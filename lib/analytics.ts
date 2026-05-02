export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData)
  }
}
