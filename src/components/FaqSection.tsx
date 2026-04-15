import { faqs } from '@/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FaqSection() {
  return (
    <section id="faq" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.q} value={`faq-${index}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
