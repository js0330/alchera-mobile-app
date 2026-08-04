import { createContext, useContext } from 'react'

export interface SettingsContextValue {
  largeText: boolean
  setLargeText: (value: boolean) => void
}

export const SettingsContext = createContext<SettingsContextValue | null>(null)

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
