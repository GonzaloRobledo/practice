'use client'
import { useContext, useEffect, useState } from 'react'
import { PaginateProdType } from '../../../../types'
import styles from '@/styles/Main/Products/pagination.module.css'
import { getProductsPaginated } from '@/api/products/getProductsPaginated'
import { ProductsContext } from '@/context/products'

export const Pagination = ({ paginate, style ={} }: { paginate: PaginateProdType, style:{} }) => {
    const pages = generatePages(paginate.totalPages)
    const {activePage, setActivePage, showed, setShowed, loadingProds} = useContext(ProductsContext)

    useEffect(() => {
        setActivePage(paginate.page || 1)
    },[])

  const nextPage = () => {
    if (activePage < pages.length) setActivePage(activePage + 1)
  }

  const prevPage = () => {
    if (activePage > 1) setActivePage(activePage - 1)
  }

  useEffect(() => {
    if (activePage + 2 <= paginate.totalPages)
      setShowed({ min: activePage - 1, max: activePage + 2 })
  }, [activePage])

  if(loadingProds) return null

  return (
    <div className={styles.container} style={style}>
      <p onClick={prevPage}>Prev</p>
      {pages.slice(showed.min, showed.max).map((el: number) => (
        <p
          key={el}
          className={activePage == el ? styles.active_page : ''}
          onClick={() => setActivePage(el)}
        >
          {el}
        </p>
      ))}
      <p onClick={nextPage}>Next</p>
    </div>
  )
}

const generatePages = (quantity: number) => {
  const pages = []
  for (let i = 0; i < quantity; i++) pages.push(i + 1)

  return pages
}
