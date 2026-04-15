import { Badge } from '@/components/ui/badge'

const scheduleBlocks = [
  {
    title: 'When',
    body: 'Friday 2 October 2026, with a full-day programme from registration through final team presentations.',
  },
  {
    title: 'Where',
    body: 'ICC London Olympia, with collaboration tables, panel space, sponsor demos, and presentation staging in one shared venue.',
  },
  {
    title: 'Who',
    body: 'Oncology pharmacy professionals, multidisciplinary clinicians, AI builders, students, digital teams, and partners working on better cancer care.',
  },
]

export default function ScheduleSection() {
  return (
    <section id="schedule" className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Schedule
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">When, where, who</h2>
      <p className="mt-4 text-muted-foreground">
        A compact format built for fast collaboration, practical demos, and sharp
        feedback from people who understand the oncology pharmacy landscape.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {scheduleBlocks.map((item) => (
          <div
            key={item.title}
            className="border border-border/60 bg-muted/20 p-6"
          >
            <Badge variant="outline">{item.title}</Badge>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
