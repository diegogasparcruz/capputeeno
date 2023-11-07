import { Product } from '@/types/product'

export type SortBy = {
  sortField: string
  sortOrder: string
}

export type ListAllParameters = {
  page?: number
  limit?: number
  filter?: string
  sort?: SortBy
}

export type ReponseListAll = {
  data: {
    allProducts: Product[]
  }
}

export type ReponseTotalProduct = {
  data: {
    _allProductsMeta: {
      count: number
    }
  }
}
