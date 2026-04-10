import { useState, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Moon01Icon, Sun01Icon } from '@hugeicons/core-free-icons'
import HeroScene from '@/components/HeroScene'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'


interface Programme {
  title: string
  description: string
  access: string
}

interface FAQ {
  q: string
  a: string
}

interface ScheduleItem {
  time: string
  event: string
}

const programmes: Programme[] = [
  {
    title: 'SACT Verification Passport',
    description:
      'Leading global pharmacy competency training programme for the verification of systemic anti-cancer therapy.',
    access: 'Free for members',
  },
  {
    title: 'Introduction to Cancer Course',
    description:
      'Comprehensive foundation course covering the principles of oncology pharmacy practice for those new to cancer care.',
    access: 'Enrol for 2026',
  },
  {
    title: 'Health Technology Assessment',
    description:
      'New HTA course equipping oncology pharmacists with the skills to evaluate and appraise cancer medicines.',
    access: 'Launching 2026',
  },
]

const faqs: FAQ[] = [
  {
    q: 'Who can join BOPA?',
    a: 'BOPA welcomes pharmacists, pharmacy technicians, and other healthcare professionals involved in the care of cancer patients. Students and trainees are also encouraged to join.',
  },
  {
    q: 'How much does membership cost?',
    a: 'Annual membership is £65. This gives you access to eLearning courses, the SACT Verification Passport, forums, resource library, publications, and conference discounts. Free associate membership is also available.',
  },
  {
    q: 'What is the SACT Verification Passport?',
    a: 'The Digital SACT Verification Passport is BOPA\'s leading global competency training programme for pharmacists verifying systemic anti-cancer therapy prescriptions. It is free for paid members.',
  },
  {
    q: 'When is the annual conference?',
    a: 'The 29th BOPA Annual Conference takes place 2–4 October 2026 at ICC London Olympia. Abstract submission is now open.',
  },
  {
    q: 'How can I access BOPA/IOCN Monographs?',
    a: 'The monographs on immune-related adverse events are available through the BOPA website. They are produced in collaboration with the International Oncology Clinical Nurses (IOCN).',
  },
]

const conferenceSchedule: ScheduleItem[] = [
  { time: 'Fri 2 Oct', event: 'Registration & Welcome Reception' },
  { time: 'Fri 2 Oct', event: 'Opening Keynote & Plenary Sessions' },
  { time: 'Sat 3 Oct', event: 'Parallel Sessions & Workshops' },
  { time: 'Sat 3 Oct', event: 'Poster Presentations & Networking' },
  { time: 'Sat 3 Oct', event: 'Conference Dinner & Awards' },
  { time: 'Sun 4 Oct', event: 'Final Plenary & Abstract Presentations' },
  { time: 'Sun 4 Oct', event: 'Closing Ceremony' },
]

export default function App() {
  const [joined, setJoined] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <span className="text-lg font-bold tracking-tight">BOPA</span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setIsDark((prev) => !prev)}
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

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16">
        <div className="w-full max-w-md h-64 mb-8">
          <HeroScene />
        </div>
        <Badge className="mb-4">Registered Charity No. 1065026</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center">
          British Oncology Pharmacy Association
        </h1>
        <p className="mt-4 max-w-xl text-center text-muted-foreground">
          Promoting excellence in the pharmaceutical care of patients with cancer
          through education, communication, research and innovation.
        </p>
        <div className="mt-8 flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Join BOPA</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Become a BOPA Member</DialogTitle>
                <DialogDescription>
                  Join a community of oncology pharmacy professionals dedicated to improving cancer care.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-3 text-sm">
                <p><strong>Full Membership — £65/year</strong></p>
                <p>Access to eLearning courses, SACT Verification Passport, forums, resource library, publications, and conference discounts.</p>
                <Separator />
                <p><strong>Free Associate Membership</strong></p>
                <p>Limited access for those wanting to explore BOPA before committing to full membership.</p>
                <Separator />
                <p className="text-muted-foreground">Corporate membership is also available for organisations.</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={() => setJoined(true)}>
                    {joined ? 'Welcome!' : 'Join Now'}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Programmes
          </Button>
        </div>
        {joined && (
          <Badge variant="secondary" className="mt-4">Welcome to BOPA!</Badge>
        )}
      </section>

      <Separator />

      {/* ── Education & Programmes ── */}
      <section id="programmes" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">Education & eLearning</h2>
        <p className="text-center text-muted-foreground mb-10">CPD-accredited courses and training programmes for oncology pharmacy professionals</p>
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((prog) => (
            <Card key={prog.title}>
              <CardHeader>
                <CardTitle>{prog.title}</CardTitle>
                <CardDescription>{prog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{prog.access}</Badge>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Conference Schedule ── */}
      <section id="conference" className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">29th Annual Conference</h2>
        <p className="text-center text-muted-foreground mb-10">2–4 October 2026 &middot; ICC London Olympia</p>
        <div className="space-y-3">
          {conferenceSchedule.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2">
              <Badge variant="outline" className="shrink-0">{item.time}</Badge>
              <span className="ml-4 text-sm">{item.event}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Badge variant="secondary">Abstract Submission Open</Badge>
        </div>
      </section>

      <Separator />

      {/* ── FAQ ── */}
      <section id="faq" className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator />

      {/* ── Footer ── */}
      <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
        <p>British Oncology Pharmacy Association — Registered Charity No. 1065026</p>
        <p className="mt-1">Promoting excellence in the pharmaceutical care of patients with cancer</p>
      </footer>
    </div>
  )
}
