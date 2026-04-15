import { Badge } from '@/components/ui/badge'

const panels = [
  'AI in oncology pharmacy practice',
  'Clinical safety, governance, and trust',
  'From idea to prototype to pilot',
]

export default function PanelsSection() {
  return (
    <section id="panels" className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Panels
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        Short sessions with practical perspective
      </h2>
      <p className="mt-4 text-muted-foreground">
        Panel discussions are designed to sharpen the work happening in the room:
        less theory, more lessons from implementation, governance, and adoption.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {panels.map((panel) => (
          <Badge key={panel} variant="secondary" className="px-3 py-1 text-sm">
            {panel}
          </Badge>
        ))}
      </div>
    </section>
  )
}
