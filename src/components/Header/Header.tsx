'use client'
import { usePathname } from 'next/navigation'
import { Logo } from '../commons/Logo'
import { Access } from './Access'
import { Cart } from './Cart'
import { Nav } from './Nav'
import styles from '@/styles/Header/header.module.css'
import { useContext } from 'react'
import { GlobalContext } from '@/context/global'

export const Header = () => {
  const pathname = usePathname()
  const {themeLight} = useContext(GlobalContext)

  if (pathname == '/login' || pathname == '/register') return null

  return (
    <header className={`${styles.container}`}>
      <Access />
      <section className={`${styles.logo_nav_cart} ${!themeLight ? styles.logo_nav_cart_dark : ''}`}>
        <div className='container-72'>
          <Logo />
          <Nav />
          <Cart />
        </div>
      </section>
    </header>
  )
}
