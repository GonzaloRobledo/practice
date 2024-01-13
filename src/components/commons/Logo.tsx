'use client'
import { GlobalContext } from '@/context/global'
import styles from '@/styles/commons/logo.module.css'
import { useContext } from 'react'

export const Logo = () => {
    const {themeLight} = useContext(GlobalContext);

  return <div className={`${styles.container} ${!themeLight ? styles.container_dark : ''}`}>G</div>
}
