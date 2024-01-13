'use client'
import { useContext } from 'react'
import { ProductType } from '../../../../types'
import styles from '@/styles/Main/Home/products.module.css'
import { GlobalContext } from '@/context/global'

export const CardProduct = ({ item }: { item: ProductType }) => {
  const { themeLight } = useContext(GlobalContext)
  const image = item.images?.length > 0 ? item.images[0] : ''
  return (
    <div
      className={`${styles.product_card} ${
        !themeLight ? styles.product_card_dark : ''
      }`}
    >
      <div>
        <img src={image} alt={item.name} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
      </div>
    </div>
  )
}
