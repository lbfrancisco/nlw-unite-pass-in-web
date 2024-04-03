import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableProps extends ComponentProps<'table'> {}

export function Root({ ...props }: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <table {...props} className={twMerge('w-full', props.className)} />
    </div>
  )
}

interface TableHeadProps extends ComponentProps<'thead'> {}

export function Head({ ...props }: TableHeadProps) {
  return <thead {...props} />
}

interface TableRowProps extends ComponentProps<'tr'> {}

export function Row({ ...props }: TableRowProps) {
  return (
    <tr
      {...props}
      className={twMerge('border-b border-white/10', props.className)}
    />
  )
}

interface TableHeaderProps extends ComponentProps<'th'> {}

export function Header({ ...props }: TableHeaderProps) {
  return (
    <th
      {...props}
      className={twMerge(
        'py-3 px-4 font-semibold text-sm text-left',
        props.className,
      )}
    />
  )
}

interface TableBodyProps extends ComponentProps<'tbody'> {}

export function Body({ ...props }: TableBodyProps) {
  return (
    <tbody {...props} className={twMerge('text-zinc-300', props.className)} />
  )
}

interface TableCellProps extends ComponentProps<'td'> {}

export function Cell({ ...props }: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge('py-3 px-4 text-sm text-left', props.className)}
    />
  )
}

interface TableFootProps extends ComponentProps<'tfoot'> {}

export function Foot({ ...props }: TableFootProps) {
  return <tfoot {...props} />
}
