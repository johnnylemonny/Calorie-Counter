import { LaptopMinimal, MoonStar, SunMedium } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { ThemePreference } from '@/types'

const themeMeta: Record<ThemePreference, { label: string; icon: typeof SunMedium }> = {
  system: { label: 'Follow system theme', icon: LaptopMinimal },
  light: { label: 'Switch to light mode', icon: SunMedium },
  dark: { label: 'Switch to dark mode', icon: MoonStar },
}

export function ThemeToggle({
  preference,
  onChange,
}: {
  preference: ThemePreference
  onChange: (preference: ThemePreference) => void
}) {
  const nextTheme: Record<ThemePreference, ThemePreference> = {
    system: 'light',
    light: 'dark',
    dark: 'system',
  }

  const Icon = themeMeta[preference].icon

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label={themeMeta[preference].label}
            onClick={() => onChange(nextTheme[preference])}
          >
            <Icon className="size-[1.15rem]" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{themeMeta[preference].label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
