import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitial() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  }
  // Standart = dark (birinchi taassurot vaow). Foydalanuvchi toggle bilan o'zgartiradi.
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0e1a' : '#f9fafb')
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
