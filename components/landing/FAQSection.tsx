'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedFAQs } from '@/data/faqs';

const FAQSection = () => {
  const faqs = getFeaturedFAQs(5);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div>
            <span className="text-primary-500 font-medium">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">
              Help and Information
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Find answers to common questions about our treatments, insurance,
              and what to expect during your care journey.
            </p>

            <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Our team is here to help.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${faq.id}`;
              const buttonId = `faq-button-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="border border-neutral-200 rounded-xl overflow-hidden"
                >
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenIndex(isOpen ? null : index);
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
                  >
                    <span className="font-medium text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={isOpen ? 'px-5 pb-5 text-neutral-600' : ''}
                  >
                    {isOpen && faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
