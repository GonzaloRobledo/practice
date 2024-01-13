import { getProductsPaginated } from '@/api/products/getProductsPaginated'
import { FilterSection } from '@/components/Main/Products/FilterSection'
import { ProductsSection } from '@/components/Main/Products/ProductsSection'
import { ProductsProvider } from '@/context/products'

const ProductsPage = async ({
  searchParams
}: {
  searchParams: { page: string; limit: string }
}) => {
  const response = await getProductsPaginated(
    searchParams.page,
    searchParams.limit || '6'
  )

  const products = response?.products
  const paginate = response?.paginate
  return (
    <main>
      <ProductsProvider>
        <FilterSection products={products} />
        <ProductsSection products={products} paginate={paginate} />
      </ProductsProvider>
    </main>
  )
}

export default ProductsPage
