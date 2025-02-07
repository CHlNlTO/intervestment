import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is web development the only service you offer?",
    answer:
      "No, we offer a variety of services, including mobile development, API integrations, e-commerce development, and more. You can learn more about all our services on our Services page.",
    value: "item-1",
  },
  {
    question: "How do I contact you for a project?",
    answer:
      "You can fill out the contact form on the Contact page, or reach us via email at clark.wayne023@gmail.com. We'll get back to you as soon as possible.",
    value: "item-2",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "The timeline for a project depends on its complexity and scope. We will provide you with an estimated timeline once we understand your project requirements.",
    value: "item-3",
  },
  {
    question: "Do you offer maintenance for completed projects?",
    answer:
      "Yes, we offer ongoing maintenance services to ensure your website or system stays up-to-date and functions smoothly after launch.",
    value: "item-4",
  },
  {
    question: "Can I request a custom feature for my project?",
    answer:
      "Absolutely! We work with you to understand your needs and build custom features tailored to your business goals.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
