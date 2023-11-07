'use client'

import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import Link from 'next/link'

type FiltersProps = {
  filter?: string
}

export const Filter = ({ filter }: FiltersProps) => {
  const { createQueryString } = useCreateQueryString()

  return (
    <nav className="flex gap-10 text-base font-normal uppercase text-[#737380]">
      <Link
        href={createQueryString([{ name: 'filter', value: 'all' }])}
        data-active={filter === 'all' || filter === ''}
        className="data-[active=true]:border-b-4 data-[active=true]:border-b-[#FFA585] data-[active=true]:font-semibold  data-[active=true]:text-[#41414D]"
      >
        Todos os produtos
      </Link>
      <Link
        href={createQueryString([{ name: 'filter', value: 't-shirts' }])}
        data-active={filter === 't-shirts'}
        className="data-[active=true]:border-b-4 data-[active=true]:border-b-[#FFA585] data-[active=true]:font-semibold  data-[active=true]:text-[#41414D]"
      >
        Camisetas
      </Link>
      <Link
        href={createQueryString([{ name: 'filter', value: 'mugs' }])}
        data-active={filter === 'mugs'}
        className="data-[active=true]:border-b-4 data-[active=true]:border-b-[#FFA585] data-[active=true]:font-semibold  data-[active=true]:text-[#41414D]"
      >
        Canecas
      </Link>
    </nav>
  )
}
