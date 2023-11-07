import { Product } from '@/types/product'
import { api } from './api'

type ListAllParameters = {
  page?: number
  limit?: number
  filter?: string
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
  }: ListAllParameters): Promise<Product[]> => {
    const filterProduct =
      filter !== '' ? `, filter: { category: "${filter}" }` : ''

    console.log(filterProduct)

    const response = await api<ReponseListAll>('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            allProducts(page: ${page}, perPage: ${limit} ${filterProduct}) {
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
