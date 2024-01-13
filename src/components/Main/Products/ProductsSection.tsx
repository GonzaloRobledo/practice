import { PaginateProdType, ProductType } from '../../../../types'
import { DisplayProds } from './DisplayProds'
import { Pagination } from './Pagination'
import { ProductsList } from './ProductsList'

export const ProductsSection = ({ products, paginate }: { products: ProductType[], paginate: PaginateProdType }) => {
  return (
    <section className='container-72'>
      <DisplayProds totalDocs={paginate.totalDocs}/>
      <Pagination paginate={paginate} style={{paddingTop:20}}/>
      <ProductsList products={products} />
      <Pagination paginate={paginate} style={{paddingBottom:80}}/>
    </section>
  )
}
