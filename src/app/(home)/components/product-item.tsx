import { Separator } from '@/components/ui/separator'
import { Product } from '@/types/product'
import { formatCurrencyPtBr } from '@/utils/format-currency'
import Image from 'next/image'

type ProductItemProps = {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="max-w-64 w-full rounded-bl-[0.25rem] rounded-br-[0.25rem] rounded-tl-lg rounded-tr-lg bg-white backdrop-blur">
      <div className="w-full">
        <Image
          src={product.image_url}
          alt={product.name}
          className="h-auto w-auto rounded-tl-lg rounded-tr-lg"
          sizes="100vw"
          width={0}
          height={0}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="flex flex-col gap-2 px-3 py-2">
        <h1 className="text-base font-light text-[#41414D]">{product.name}</h1>

        <Separator />

        <span className="text-sm font-semibold text-[#09090A]">
          {formatCurrencyPtBr(product.price_in_cents / 100)}
        </span>
      </div>
    </div>
  )
}
