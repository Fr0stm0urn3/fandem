"use client"

import { createContext, useState, ReactNode } from "react"

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
