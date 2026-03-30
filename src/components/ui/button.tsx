/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--tone-strong)] px-5 py-3 text-[var(--tone-strong-foreground)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] focus-visible:ring-[var(--tone-strong)]',
        secondary:
          'bg-[var(--surface-elevated)] px-5 py-3 text-[var(--foreground)] ring-1 ring-[var(--border-strong)] hover:-translate-y-0.5 hover:bg-[var(--surface-elevated-strong)] focus-visible:ring-[var(--foreground)]',
        ghost:
          'bg-transparent px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] focus-visible:ring-[var(--foreground)]',
        destructive:
          'bg-[var(--danger)] px-5 py-3 text-white shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:opacity-95 focus-visible:ring-[var(--danger)]',
      },
      size: {
        default: 'min-h-11',
        sm: 'min-h-9 px-4 text-sm',
        icon: 'size-11 rounded-full px-0 py-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
