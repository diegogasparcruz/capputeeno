import { Product } from '@/types/product'
import { api } from './api'

type SortBy = {
  sortField: string
  sortOrder: string
}

type ListAllParameters = {
  page?: number
  limit?: number
  filter?: string
  sort?: SortBy
}

type ReponseListAll = {
  data: {
    allProducts: Product[]
  }
}

export const ProductService = {
  listAll: async ({
    page = 1,
    limit = 12,
    filter,
    sort,
  }: ListAllParameters): Promise<Product[]> => {
    const filterProduct =
      filter !== '' ? `, filter: { category: "${filter}" }` : ''

    const sortBy =
      sort?.sortField === '' && !sort?.sortOrder
        ? ''
        : `, sortField: "${sort?.sortField}", sortOrder: "${sort?.sortOrder}"`

    console.log(filterProduct)

    const response = await api<ReponseListAll>('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            allProducts(page: ${page}, perPage: ${limit} ${filterProduct} ${sortBy}) {
              id
              name
              description
              price_in_cents
              image_url
            }
          }
          `,
      }),
    })

    return response?.data?.allProducts
  },
}
