import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  children: React.ReactNode
  href: string
  isActive?: boolean
}

export function NavLink({
  children,
  href,
  isActive = false,
  ...props
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={
        !isActive
          ? 'text-zinc-300 hover:text-orange-200'
          : 'text-zinc-50 hover:text-orange-200'
      }
      {...props}
    >
      {children}
    </a>
  )
}
