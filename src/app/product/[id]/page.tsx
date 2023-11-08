import { BagCart } from '@/components/icons/bag-cart'
import { ButtonBack } from '@/components/ui/button-back'
import { CATEGORIES } from '@/constants/categories'
import { ProductService } from '@/services/product-service'
import { formatCurrencyPtBr } from '@/utils/format-currency'
import Image from 'next/image'

type ProductPageProps = {
  params: { id: string }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await ProductService.getProduct(params.id)

  console.log(product)

  return (
    <div className="flex flex-col gap-6">
      <ButtonBack />

      <div className="flex gap-8">
        <Image
          src={product?.image_url}
          alt={product?.name}
          className="h-[36.25rem] w-[40rem] rounded-sm"
          sizes="100vw"
          width={0}
          height={0}
          style={{ objectFit: 'contain' }}
        />

        <div className="flex flex-col text-[#41414D]">
          <span className="pb-3 text-base font-normal">
            {CATEGORIES[product.category as keyof typeof CATEGORIES]}
          </span>

          <h1 className="pb-1 text-[2rem] font-light">{product.name}</h1>
          <h2 className="pb-6 text-xl font-semibold text-[#09090A]">
            {formatCurrencyPtBr(product.price_in_cents / 100)}
          </h2>

          <span className="pb-14 text-xs font-normal">
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </span>

          <div className="flex flex-1 flex-col gap-2">
            <h1 className="text-base font-medium uppercase text-[#737380]">
              Descrição
            </h1>
            <p className="text-sm font-normal">{product.description}</p>
          </div>

          <button className="flex h-11 w-full items-center justify-center gap-3 rounded bg-[#115D8C] text-center text-base font-medium uppercase text-[#F5F5FA]">
            <BagCart />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
