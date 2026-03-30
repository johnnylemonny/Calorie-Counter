import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-12 w-full min-w-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--foreground)] shadow-[var(--shadow-inset)] outline-none transition duration-300 placeholder:text-[var(--muted-foreground)] focus-visible:border-[var(--border-strong)] focus-visible:ring-2 focus-visible:ring-[var(--tone-soft)] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
