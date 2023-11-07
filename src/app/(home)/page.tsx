import { ProductService } from '@/services/product-service'
import { Filter } from './components/filter'
import { ProductsList } from './components/product-list'
import { SortBy } from './components/sort-by'

type HomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const filter =
    typeof searchParams.filter === 'string' ? searchParams?.filter : ''
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams?.page) : 1
  const sortField =
    typeof searchParams.sortField === 'string' ? searchParams?.sortField : ''
  const sortOrder =
    typeof searchParams.sortOrder === 'string' ? searchParams?.sortOrder : ''

  const products = await ProductService.listAll({
    page,
    filter: filter === 'all' || !filter ? '' : filter,
    sort: { sortField, sortOrder },
  })

  const totalProducts = await ProductService.totalProducts({
    filter: filter === 'all' || !filter ? '' : filter,
  })

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between pt-8">
        <Filter filter={filter} />
        <SortBy />
      </div>

      <ProductsList products={products} totalProducts={totalProducts} />
    </div>
  )
}
