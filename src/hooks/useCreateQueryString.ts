import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

type QueryString = {
  name: string
  value: string
}

export const useCreateQueryString = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const createQueryString = useCallback(
    (queriesString: QueryString[]) => {
      const params = new URLSearchParams(searchParams)

      queriesString.forEach(({ name, value }) => {
        params.set(name, value)
      })

      return pathname + '?' + params.toString()
    },
    [pathname, searchParams],
  )

  return { createQueryString }
}
