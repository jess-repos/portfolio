import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const UIContext = createContext()

const links = ['/#home', '/#about', '/#resume', '/#projects', '/#contact']
const sectionMargin = '-400px'

export function useUI() {
  return useContext(UIContext)
}

export function UIProvider({ children }) {
  const router = useRouter()

  const [darkMode, setDarkMode] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [navActive, setNavActive] = useState(null)

  useEffect(() => {
    const isDark = localStorage.getItem('isDark')
    if (!isDark) {
      localStorage.setItem('isDark', false)
      setDarkMode(false)
    } else {
      const value = JSON.parse(localStorage.getItem('isDark'))
      setDarkMode(value)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDark', darkMode)
  }, [darkMode])

  useEffect(() => {
    for (let i = 0; i < links.length; i++) {
      if (links[i] === router.asPath) {
        setNavActive(i)
      }
    }
  }, [router.asPath])

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev)
  }

  const navOpenHandler = () => {
    setNavOpen((prev) => !prev)
  }

  const navActiveHandler = async (index) => {
    setNavOpen(false)
    if (navActive < index) {
      for (let i = navActive + 1; i <= index; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setNavActive(i)
      }
    } else if (navActive > index) {
      for (let i = navActive - 1; i >= index; i--) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setNavActive(i)
      }
    }
    setNavActive(index)
  }

  return (
    <UIContext.Provider
      value={{
        darkMode,
        darkModeHandler,
        navOpen,
        navOpenHandler,
        navActive,
        navActiveHandler,
        sectionMargin,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
