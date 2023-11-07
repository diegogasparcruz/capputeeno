import { sairaStencilOne } from '@/app/fonts'
import Image from 'next/image'
import { Input } from './input'

export const Header = () => {
  const numberCart = 0

  return (
    <nav className="flex h-[80px] items-center justify-between bg-white px-40">
      <h1 className={`${sairaStencilOne.className} text-[44px] text-[#5D5D6D]`}>
        capputeeno
      </h1>

      <div className="flex items-center gap-6">
        <Input
          className="w-[352px]"
          placeholder="Procurando por algo específico?"
          endAdornment={
            <Image
              src="/images/svg/search.svg"
              width={24}
              height={24}
              alt="Ícone do carrinho de compras"
            />
          }
        />
        <button type="button" className="relative">
          <Image
            src="/images/svg/bag-cart.svg"
            width={24}
            height={24}
            alt="Ícone do carrinho de compras"
          />
          {numberCart > 0 && (
            <div className="absolute left-[12px] top-[12px] flex h-[17px] w-[17px] items-center justify-center rounded-2xl bg-[#DE3838] text-[10px] font-medium text-white">
              {numberCart}
            </div>
          )}
        </button>
      </div>
    </nav>
  )
}
