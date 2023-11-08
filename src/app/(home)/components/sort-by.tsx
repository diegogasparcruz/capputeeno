'use client'
import { ArrowDown } from '@/components/icons'
import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import { useOutsideClick } from '@/hooks/useOutsideClicks'
import Link from 'next/link'
import { useState } from 'react'

export const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { createQueryString } = useCreateQueryString()

  const ref = useOutsideClick(() => {
    setIsOpen(false)
  })

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div ref={ref} className="relative cursor-pointer" onClick={toggle}>
      <button className="flex gap-2 text-[#737380]">
        Organizar por
        <ArrowDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-[100] min-w-[11rem] rounded bg-white shadow-sort-by">
          <ul className="flex flex-col gap-1 py-3">
            <li className="block px-4 text-sm text-[#737380] hover:bg-gray-200">
              <Link
                className="block"
                href={createQueryString([
                  { name: 'sortField', value: 'created_at' },
                  { name: 'sortOrder', value: 'desc' },
                ])}
              >
                Novidades
              </Link>
            </li>
            <li className="block px-4 text-sm text-[#737380] hover:bg-gray-200">
              <Link
                className="block"
                href={createQueryString([
                  { name: 'sortField', value: 'price_in_cents' },
                  { name: 'sortOrder', value: 'desc' },
                ])}
              >
                Preço: Maior - menor
              </Link>
            </li>
            <li className="block px-4 text-sm text-[#737380] hover:bg-gray-200">
              <Link
                className="block"
                href={createQueryString([
                  { name: 'sortField', value: 'price_in_cents' },
                  { name: 'sortOrder', value: 'asc' },
                ])}
              >
                Preço: Menor - maior
              </Link>
            </li>
            <li className="block px-4 text-sm text-[#737380] hover:bg-gray-200">
              <Link
                className="block"
                href={createQueryString([
                  { name: 'sortField', value: 'sales' },
                  { name: 'sortOrder', value: 'desc' },
                ])}
              >
                Mais vendidos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
