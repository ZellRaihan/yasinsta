'use client'
import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-purple-900 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-300">
      <dt>
        <button
          className="flex justify-between items-center w-full text-left p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-white">{question}</span>
          {isOpen ? 
            <ChevronUp className="flex-shrink-0 text-purple-400" aria-hidden="true" /> : 
            <ChevronDown className="flex-shrink-0 text-purple-400" aria-hidden="true" />
          }
        </button>
      </dt>
      <dd className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-300 text-sm">{answer}</p>
      </dd>
    </div>
  )
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Is YASINSTA free to use?",
      answer: "Yes, YASINSTA is completely free to use. There are no hidden charges or in-app purchases."
    },
    {
      question: "Is it legal to use YASINSTA?",
      answer: "YASINSTA is designed for personal use and to download content you have the right to access. Always respect copyright and Instagram's terms of service."
    },
    {
      question: "How often is YASINSTA updated?",
      answer: "We strive to update YASINSTA regularly to ensure compatibility with the latest version of Instagram and iOS."
    },
    {
      question: "Can I use YASINSTA on Android?",
      answer: "Currently, YASINSTA is only available for iOS devices. We may consider developing an Android version in the future."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <dl className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}