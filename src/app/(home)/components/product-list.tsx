import { Product } from '@/types/product'
import { ProductItem } from './product-item'

type ProductsListProps = {
  products: Product[]
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
