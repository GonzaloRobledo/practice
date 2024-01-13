import { getFeaturedProducts } from '@/api/products/featureds'
import { ProductType } from '../../../../types'
import { CardProduct } from './CardProduct'
import styles from '@/styles/Main/Home/products.module.css'

export const FeatProducts = async () => {
  const featProducts = await getFeaturedProducts()
  const featureds = featProducts?.products || []

  console.log({featProducts})

  return (
    <article className={styles.container_products_list}>
      {featureds.map((el: ProductType) => (
        <CardProduct key={el.name} item={el} />
      ))}
    </article>
  )
}
