'use client'
import styles from '@/styles/Main/Home/heroSection.module.css'
import { CarouselProducts } from './CarouselProducts'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '@/context/global'

export const HeroSection = () => {
    const {themeLight} = useContext(GlobalContext);

  return (
    <section className={`${styles.container} ${!themeLight ? styles.container_dark : ''} container-72`}>
      <article className={styles.container_content}>
        <h2>We are changing the way people shop</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link className={!themeLight ? 'button_2' : 'button_1'} href='/products'>
          Our Products
        </Link>
      </article>
      <CarouselProducts />
    </section>
  )
}
