import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="mb-8 flex w-full justify-center">
        <img
          src="/images/bopalogo.svg"
          alt="BOPA logo"
          className="h-auto w-full max-w-[260px]"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">
        AI Hackathon 2026
      </h1>
      <p className="mt-4 max-w-xl text-center text-muted-foreground">
        Build and showcase the future of oncology pharmacy with us. Join the BOPA AI Hackathon 2026
        to transform cancer care through the power of artificial intelligence.
      </p>
      <div className="mt-8 flex gap-3">
        <Button
          size="lg"
          className="h-12 px-6 text-base"
          onClick={() => window.open('https://www.bopa.org.uk/', '_blank', 'noopener,noreferrer')}
        >
          Visit BOPA
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-6 text-base"
          onClick={() => window.open('https://www.zoom.com/', '_blank', 'noopener,noreferrer')}
        >
          Register Now
        </Button>
      </div>
    </section>
  )
}
