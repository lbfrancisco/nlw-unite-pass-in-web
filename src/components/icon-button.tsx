import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  transparent?: boolean
}

export function IconButton({
  children,
  transparent,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'border border-white/10 rounded-md p-1.5 hover:bg-white/20',
        'disabled:opacity-30 disabled:cursor-not-allowed',
        transparent ? 'bg-black/20' : 'bg-white/10',
        props.className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
