import { useState } from 'react'

import HeroScene from '@/components/HeroScene'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

interface HeroSectionProps {
  isDark: boolean
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  const [joined, setJoined] = useState(false)

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="w-full max-w-md h-64 mb-8">
        <HeroScene dark={isDark} />
      </div>
      <Badge className="mb-4">Registered Charity No. 1065026</Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center">
        British Oncology Pharmacy Association
      </h1>
      <p className="mt-4 max-w-xl text-center text-muted-foreground">
        Promoting excellence in the pharmaceutical care of patients with cancer through
        education, communication, research and innovation.
      </p>
      <div className="mt-8 flex gap-3">
        <Dialog>
          <DialogTrigger render={<Button size="lg" />}>Join BOPA</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Become a BOPA Member</DialogTitle>
              <DialogDescription>
                Join a community of oncology pharmacy professionals dedicated to
                improving cancer care.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-3 text-sm">
              <p>
                <strong>Full Membership - £65/year</strong>
              </p>
              <p>
                Access to eLearning courses, SACT Verification Passport, forums,
                resource library, publications, and conference discounts.
              </p>
              <Separator />
              <p>
                <strong>Free Associate Membership</strong>
              </p>
              <p>
                Limited access for those wanting to explore BOPA before committing to
                full membership.
              </p>
              <Separator />
              <p className="text-muted-foreground">
                Corporate membership is also available for organisations.
              </p>
            </div>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <DialogClose render={<Button onClick={() => setJoined(true)} />}>
                {joined ? 'Welcome!' : 'Join Now'}
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button
          variant="outline"
          size="lg"
          onClick={() =>
            document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Explore Programmes
        </Button>
      </div>
      {joined && (
        <Badge variant="secondary" className="mt-4">
          Welcome to BOPA!
        </Badge>
      )}
    </section>
  )
}
