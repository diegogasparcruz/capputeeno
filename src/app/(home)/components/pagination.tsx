import { ArrowLeft, ArrowRight } from '@/components/icons'
import { DOTS, usePagination } from '@/hooks/usePagination'
import { Pagination as PaginationType } from '@/types/pagination'
import { useEffect } from 'react'

type PaginationProps = {
  onPageChange: (page: number) => void
} & PaginationType

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange?.[paginationRange?.length - 1]

  useEffect(() => {
    if (Number(currentPage) > Number(lastPage)) {
      onPageChange(1)
    }
  }, [currentPage, lastPage, onPageChange])

  return (
    <div className="flex gap-1">
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <div
              key={index}
              className="flex h-8 w-8 cursor-default justify-center rounded-lg text-base font-normal text-[#737380]"
            >
              {DOTS}
            </div>
          )
        }

        return (
          <button
            data-selected={pageNumber === currentPage}
            onClick={() => onPageChange(Number(pageNumber))}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9E9F0] text-base font-normal text-[#737380] data-[selected=true]:border data-[selected=true]:border-[#FFA585] data-[selected=true]:bg-[#F5F5FA] data-[selected=true]:font-semibold data-[selected=true]:text-[#FFA585]"
            key={index}
          >
            {pageNumber}
          </button>
        )
      })}

      <button
        className="disabled:cursor-not-allowed disabled:opacity-40"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9E9F0] text-base font-normal text-[#737380]">
          <ArrowLeft />
        </span>
      </button>

      <button
        className="disabled:cursor-not-allowed disabled:opacity-40"
        onClick={onNext}
        disabled={currentPage === lastPage || totalCount <= 1}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9E9F0] text-base font-normal text-[#737380]">
          <ArrowRight />
        </span>
      </button>
    </div>
  )
}
