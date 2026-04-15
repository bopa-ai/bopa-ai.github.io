export interface Programme {
  title: string
  description: string
  access: string
}

export interface FAQ {
  q: string
  a: string
}

export interface ScheduleItem {
  time: string
  event: string
}

export const programmes: Programme[] = [
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

export const faqs: FAQ[] = [
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
    a: "The Digital SACT Verification Passport is BOPA's leading global competency training programme for pharmacists verifying systemic anti-cancer therapy prescriptions. It is free for paid members.",
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

export const conferenceSchedule: ScheduleItem[] = [
  { time: 'Fri 2 Oct', event: 'Registration & Welcome Reception' },
  { time: 'Fri 2 Oct', event: 'Opening Keynote & Plenary Sessions' },
  { time: 'Sat 3 Oct', event: 'Parallel Sessions & Workshops' },
  { time: 'Sat 3 Oct', event: 'Poster Presentations & Networking' },
  { time: 'Sat 3 Oct', event: 'Conference Dinner & Awards' },
  { time: 'Sun 4 Oct', event: 'Final Plenary & Abstract Presentations' },
  { time: 'Sun 4 Oct', event: 'Closing Ceremony' },
]
