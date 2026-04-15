import { programmes } from '@/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ProgrammesSection() {
  return (
    <section id="programmes" className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
        Education & eLearning
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        CPD-accredited courses and training programmes for oncology pharmacy professionals
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {programmes.map((programme) => (
          <Card key={programme.title}>
            <CardHeader>
              <CardTitle>{programme.title}</CardTitle>
              <CardDescription>{programme.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">{programme.access}</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
