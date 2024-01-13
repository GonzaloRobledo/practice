'use client'
import Link from 'next/link'
import styles from '@/styles/Header/nav.module.css'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { GlobalContext } from '@/context/global'

const nav = [
  {
    name: 'Home',
    path: '/',
    active: true
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Cart',
    path: '/cart'
  }
]

export const Nav = () => {
  const pathname = usePathname()
  const {themeLight} = useContext(GlobalContext)
 
  let route = pathname.split('/')[1]

  return (
    <nav className={`${styles.container} ${!themeLight ? styles.container_dark : ''}`}>
      <ul>
        {nav.map(item => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`/${route}` == item.path ? styles.active_page : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
