'use client'
import { useContext } from 'react'
import { ProductType } from '../../../../types'
import styles from '@/styles/Main/Home/products.module.css'
import { GlobalContext } from '@/context/global'

export const CardProduct = ({
  item,
  descriptionActive = false,
  companyActive = false
}: {
  item: ProductType
  descriptionActive?: boolean
  companyActive?: boolean
}) => {
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
        <div className={styles.name_company_desc}>
          <h3>{item.name}</h3>
          {companyActive && <h5>{item.company}</h5>}
          {descriptionActive && <p>{item.short_description}</p>}
        </div>
        <p>${item.price}</p>
      </div>
    </div>
  )
}
