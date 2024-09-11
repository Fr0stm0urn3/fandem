"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface GlobalContextProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <GlobalContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}

// Custom hook to use the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
}
