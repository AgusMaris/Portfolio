interface Umami {
  track: (eventName: string, eventData?: Record<string, unknown>) => void
}

declare module "@fontsource-variable/inter";
declare module "@fontsource/fira-code";

interface Window {
  umami?: Umami
}
