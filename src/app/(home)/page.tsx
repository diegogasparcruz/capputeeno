import { ProductService } from '@/services/product-service'
import { Filter } from './components/filter'
import { ProductsList } from './components/product-list'

type HomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const filter =
    typeof searchParams.filter === 'string' ? searchParams?.filter : ''
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const products = await ProductService.listAll({
    page,
    filter: filter === 'all' || !filter ? '' : filter,
  })

  return (
    <div className="flex h-full flex-col gap-5">
      <Filter filter={filter} />
      <ProductsList products={products} />
    </div>
  )
}
