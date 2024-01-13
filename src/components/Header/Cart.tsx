'use client'
import { FaMoon } from 'react-icons/fa6'
import { LuSunMoon } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import styles from '@/styles/Header/cart.module.css'
import { useContext } from 'react'
import { GlobalContext } from '@/context/global'

export const Cart = () => {
  const { themeLight, handleChangeTheme, sessionActive } = useContext(GlobalContext)

  return (
    <div className={styles.container}>
      {themeLight ? (
        <FaMoon
          className={styles.container_theme}
          onClick={handleChangeTheme}
        />
      ) : (
        <LuSunMoon
          className={styles.container_theme}
          onClick={handleChangeTheme}
          style={{color:'white'}}
        />
      )}
      <div className={`${styles.container_cart} ${!themeLight ? styles.container_cart_dark : ''}`}>
        <IoCartOutline className={styles.container_cart_icon} />
        <p>0</p>
      </div>

      {sessionActive && <div className={styles.session_image} ></div>}
    </div>
  )
}
