'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeColorUpdater() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const color = resolvedTheme === 'dark' ? '#000000' : '#ffffff'
    
    // Update or create the theme-color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta')
      metaThemeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(metaThemeColor)
    }
    metaThemeColor.setAttribute('content', color)
  }, [resolvedTheme])

  return null
}
