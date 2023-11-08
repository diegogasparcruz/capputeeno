'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const ButtonBack = () => {
  const router = useRouter()

  return (
    <button
      className="flex items-center gap-2 text-sm font-medium text-[#617480]"
      onClick={() => router.back()}
    >
      <Image
        src="/images/svg/back.svg"
        width={24}
        height={24}
        alt="Ícone de seta para esquerda"
      />
      Voltar
    </button>
  )
}
