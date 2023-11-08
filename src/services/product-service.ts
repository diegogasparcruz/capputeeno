import { Product } from '@/types/product'
import { api } from './api'
import {
  ListAllParameters,
  ReponseListAll,
  ReponseTotalProduct,
  ResponseGetProduct,
} from './types'

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
              category
              description
              image_url
              price_in_cents
              sales
              created_at
            }
          }
          `,
      }),
    })

    return response?.data?.allProducts
  },
  totalProducts: async ({ filter }: { filter?: string }) => {
    const filterProduct = filter !== '' ? `category: "${filter}"` : ''

    const response = await api<ReponseTotalProduct>('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          _allProductsMeta(filter: {${filterProduct}}) {
            count
          }
        }
          `,
      }),
    })

    return response?.data?._allProductsMeta?.count
  },
  getProduct: async (id: string) => {
    const response = await api<ResponseGetProduct>('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            Product(id: "${id}") {
              id
              name
              category
              description
              image_url
              price_in_cents
            }
          }
          `,
      }),
    })

    return response.data.Product
  },
}
