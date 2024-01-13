'use client'
import { IoGrid } from 'react-icons/io5'
import { HiOutlineBars3 } from 'react-icons/hi2'
import styles from '@/styles/Main/Products/displayProds.module.css'
import { useContext, useState } from 'react'
import { GlobalContext } from '@/context/global'
import { ProductsContext } from '@/context/products'

export const DisplayProds = ({totalDocs}:{totalDocs:number}) => {
  const {display, setDisplay} = useContext(ProductsContext)
  const {themeLight} = useContext(GlobalContext)

  const handleDisplay = (display: number) => {
    setDisplay(display)
  }

  return (
    <article className={`${styles.container} ${!themeLight ? styles.container_dark : ''}`}>
      <p>{totalDocs} products</p>
      <div>
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className={`${styles.display_grid} ${
            display == 1 ? styles.option_active : ''
          }`}
          onClick={() => handleDisplay(1)}
        >
          <IoGrid />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className={`${display == 2 ? styles.option_active : ''}`}
          onClick={() => handleDisplay(2)}
        >
          <HiOutlineBars3 className={`${styles.display_block} `} />
        </div>
      </div>
    </article>
  )
}
