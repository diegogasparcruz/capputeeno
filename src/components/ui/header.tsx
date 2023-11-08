import { sairaStencilOne } from '@/app/fonts'
import Link from 'next/link'
import { BagCart, Search } from '../icons'
import { Input } from './input'

export const Header = () => {
  const numberCart = 0

  return (
    <nav className="flex h-[80px] items-center justify-between bg-white px-40">
      <h1 className={`${sairaStencilOne.className} text-[44px] text-[#5D5D6D]`}>
        <Link href="/">capputeeno</Link>
      </h1>

      <div className="flex items-center gap-6">
        <Input
          className="w-[352px]"
          placeholder="Procurando por algo específico?"
          endAdornment={<Search />}
        />
        <button type="button" className="relative">
          <span className="text-[#737380]">
            <BagCart />
          </span>

          {numberCart === 0 && (
            <div className="absolute left-[15px] top-[15px] flex h-[17px] w-[17px] items-center justify-center rounded-2xl bg-[#DE3838] text-[10px] font-medium text-white">
              {numberCart}
            </div>
          )}
        </button>
      </div>
    </nav>
  )
}
