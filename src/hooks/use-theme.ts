import { useEffect, useState } from 'react'

import type { ThemePreference } from '@/types'

type ResolvedTheme = 'light' | 'dark'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme(themePreference: ThemePreference) {
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    query.addEventListener('change', handleChange)

    return () => {
      query.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const resolvedTheme = themePreference === 'system' ? systemTheme : themePreference

    root.classList.toggle('dark', resolvedTheme === 'dark')
    root.dataset.theme = resolvedTheme
  }, [systemTheme, themePreference])

  const resolvedTheme = themePreference === 'system' ? systemTheme : themePreference

  return { resolvedTheme, systemTheme }
}
