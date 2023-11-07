import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from 'react'

import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  className?: string
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type = 'text',
    placeholder,
    label,
    required,
    startAdornment,
    endAdornment,
    className,
    ...props
  },
  ref,
) => {
  const inputId = useId()
  const mergeClassName = twMerge(
    'w-full h-[42px] block bg-[#F3F5F6] text-sm text-gray-900 font-normal py-[9px] px-4 data-[startadornment=true]:pl-10 data-[endadornment=true]:pr-10 rounded-lg placeholder:text-[#737380] disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 outline-none',
    className,
  )

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-error-500">*</span>}
      </label>

      <div className="relative">
        {startAdornment && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
            {startAdornment}
          </div>
        )}

        <input
          data-startadornment={!!startAdornment}
          data-endadornment={!!endAdornment}
          className={mergeClassName}
          {...props}
          id={inputId}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />

        {endAdornment && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400">
            {endAdornment}
          </div>
        )}
      </div>
    </div>
  )
}

export const Input = forwardRef(InputComponent)
