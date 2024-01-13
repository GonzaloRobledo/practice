import styles from '@/styles/Main/Home/featuredSection.module.css'
import { FeatProducts } from './FeatProducts'
import { getFeaturedProducts } from '@/api/products/featureds'
import { TitleFeatured } from './TitleFeatured'

export const FeaturedSection = async () => {
  return (
    <section className={`${styles.container} container-72`}>
      <TitleFeatured />
      <FeatProducts />
    </section>
  )
}
