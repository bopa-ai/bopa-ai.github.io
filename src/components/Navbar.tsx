import { HugeiconsIcon } from '@hugeicons/react'
import { Moon01Icon, Sun01Icon } from '@hugeicons/core-free-icons'

import { Button } from '@/components/ui/button'

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <span className="text-lg font-bold tracking-tight">BOPA</span>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <HugeiconsIcon
            icon={isDark ? Sun01Icon : Moon01Icon}
            size={18}
            color="currentColor"
            strokeWidth={1.7}
          />
        </Button>
      </div>
    </nav>
  )
}
