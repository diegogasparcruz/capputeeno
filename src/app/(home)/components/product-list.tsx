'use client'

import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import { Product } from '@/types/product'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Pagination } from './pagination'
import { ProductItem } from './product-item'

type ProductsListProps = {
  products: Product[]
  totalProducts: number
}

export const ProductsList = ({
  products,
  totalProducts,
}: ProductsListProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const params = new URLSearchParams(searchParams)

  const pageQueryParams = params.get('page') ? Number(params.get('page')) : 1

  const [currentPage, setCurrentPage] = useState(pageQueryParams)

  const { createQueryString } = useCreateQueryString()

  useEffect(() => {
    router.push(
      createQueryString([{ name: 'page', value: currentPage.toString() }]),
      { scroll: false },
    )
  }, [createQueryString, currentPage, router])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalCount={totalProducts}
          pageSize={12}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalCount={totalProducts}
          pageSize={12}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}
