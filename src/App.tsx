import { Separator } from '@/components/ui/separator'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import IntroductionSection from '@/components/IntroductionSection'
import Navbar from '@/components/Navbar'
import PanelsSection from '@/components/PanelsSection'
import PrizesSection from '@/components/PrizesSection'
import ScheduleSection from '@/components/ScheduleSection'
import SponsorSection from '@/components/SponsorSection'
import { useTheme } from '@/hooks/use-theme'

function SectionSeparator() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Separator />
    </div>
  )
}

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <SectionSeparator />
      <HeroSection />

      <SectionSeparator />
      <IntroductionSection />

      <SectionSeparator />
      <ScheduleSection />

      <SectionSeparator />
      <PrizesSection />

      <SectionSeparator />
      <PanelsSection />

      <SectionSeparator />
      <SponsorSection />

      <SectionSeparator />
      <FaqSection />
      <SectionSeparator />
      <Footer />
    </div>
  )
}
