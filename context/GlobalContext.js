"use client"

import { useContext, createContext, useState } from "react"

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(0)

  return (
    <GlobalContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
