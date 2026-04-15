import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const prizes = [
  {
    title: 'Best Clinical Impact',
    description:
      'For the team with the strongest case for improving patient care, safety, or treatment experience.',
  },
  {
    title: 'Best Workflow Innovation',
    description:
      'For the most practical operational solution for oncology pharmacy teams and service delivery.',
  },
  {
    title: 'Judges’ Choice',
    description:
      'For the team that stands out through originality, clarity, and overall execution.',
  },
]

export default function PrizesSection() {
  return (
    <section id="prizes" className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Prizes
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">Recognition for useful ideas</h2>
      <p className="mt-4 text-muted-foreground">
        Awards are aimed at outcomes that matter: clinical relevance, workable
        implementation, and the ability to communicate a strong solution clearly.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {prizes.map((prize) => (
          <Card key={prize.title} className="border-border/60 bg-background/80">
            <CardHeader>
              <CardTitle>{prize.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {prize.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
