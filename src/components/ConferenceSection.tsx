import { conferenceSchedule } from '@/data'
import { Badge } from '@/components/ui/badge'

export default function ConferenceSection() {
  return (
    <section id="conference" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
        29th Annual Conference
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        2-4 October 2026 &middot; ICC London Olympia
      </p>
      <div className="space-y-3">
        {conferenceSchedule.map((item) => (
          <div key={`${item.time}-${item.event}`} className="flex items-center justify-between py-2">
            <Badge variant="outline" className="shrink-0">
              {item.time}
            </Badge>
            <span className="ml-4 text-sm">{item.event}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Badge variant="secondary">Abstract Submission Open</Badge>
      </div>
    </section>
  )
}
