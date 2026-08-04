import { useEffect, useState, type ReactNode } from 'react'
import { SettingsContext } from './useSettings'

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [largeText, setLargeText] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('text-lg-mode', largeText)
  }, [largeText])

  return <SettingsContext.Provider value={{ largeText, setLargeText }}>{children}</SettingsContext.Provider>
}
