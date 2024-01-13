'use client'
import { GlobalContext } from '@/context/global'
import styles from '@/styles/Header/header.module.css'
import Link from 'next/link'
import { useContext } from 'react'

export const Access = () => {
  const { sessionActive, setSessionActive, themeLight } =
    useContext(GlobalContext)

  const logOut = () => {
    setSessionActive(false)
    localStorage.removeItem('token')
  }

  return (
    <div
      className={`${styles.access} ${!themeLight ? styles.access_dark : ''}`}
    >
      <div className='container-72'>
        {!sessionActive ? (
          <>
            <Link href='/login'>Sign in / Guest</Link>
            <Link href='/register'>Create Account</Link>
          </>
        ) : (
          <p onClick={logOut}>Log Out</p>
        )}
      </div>
    </div>
  )
}
