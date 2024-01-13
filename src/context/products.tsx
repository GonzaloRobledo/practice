'use client'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext<any>(undefined)

export const ProductsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [display, setDisplay] = useState<number>(1)
  const [activePage, setActivePage] = useState(1)
  const [showed, setShowed] = useState<{ min: number; max: number }>({
    min: 0,
    max: 3
  })
  const [loadingProds, setLoadingProds] = useState<boolean>(false)

  const data = {
    display,
    setDisplay,
    activePage,
    setActivePage,
    showed,
    setShowed,
    loadingProds,
    setLoadingProds
  }

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  )
}
