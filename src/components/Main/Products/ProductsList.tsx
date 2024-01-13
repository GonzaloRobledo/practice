'use client'
import { useContext, useEffect, useState } from 'react'
import { PaginateProdType, ProductType } from '../../../../types'
import { CardProduct } from '../Home/CardProduct'
import styles from '@/styles/Main/Home/products.module.css'
import { ProductsContext } from '@/context/products'
import { Pagination } from './Pagination'
import { getProductsPaginated } from '@/api/products/getProductsPaginated'

export const ProductsList = ({ products }: { products: ProductType[] }) => {
    const [productsList, setProductsList] = useState(products);
    const {display} = useContext(ProductsContext);
    const {activePage, loadingProds, setLoadingProds} = useContext(ProductsContext)
    const [firstLoad, setFirstLoad] = useState<boolean>(true);

    useEffect(() => {
        getPageData()
    },[activePage])

    const getPageData = async () => {
        if(!firstLoad) setLoadingProds(true);
        else setFirstLoad(false);

        const response = await getProductsPaginated(activePage)
        const products = response?.products
        if(response?.ok) setProductsList(products)
        setLoadingProds(false)
      }

  return (
    <>
        {!loadingProds ? <article className={`${styles.container_products_list} ${styles.container_products_list_page} ${display == 2 ? styles.container_products_list_block : ''}`}>
          {productsList.map((el: ProductType) => (
            <CardProduct key={el._id} item={el} companyActive={display==2} descriptionActive={display==2}/>
          )) }
        </article> : <p style={{textAlign:'center', margin:'30px 0', fontSize:20, color:'grey'}}>Loading...</p>}
    </>
  )
}
