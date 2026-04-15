import { Button } from '@/components/ui/button'

export default function SponsorSection() {
  return (
    <section id="sponsor" className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Sponsor
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        Support the people building the next ideas
      </h2>
      <p className="mt-4 text-muted-foreground">
        Sponsorship helps fund participation, showcase practical tooling, and connect
        partners with a highly focused audience working on real oncology pharmacy
        problems.
      </p>
      <p className="mt-4 text-muted-foreground">
        If you want to support the event, contribute a challenge, or be visible to
        participants during the programme, get in touch with the BOPA team.
      </p>
      <div className="mt-8">
        <Button
          size="lg"
          className="h-12 px-6 text-base"
          onClick={() => window.open('https://www.bopa.org.uk/', '_blank', 'noopener,noreferrer')}
        >
          Sponsor Enquiry
        </Button>
      </div>
    </section>
  )
}
