'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="text-primary-400 font-medium">
              Ready to Get Started?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Take the First Step Toward Healing
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              Our compassionate team is ready to help you on your journey to
              mental wellness. Schedule a consultation today and discover the
              treatment options that are right for you.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Link>
            <a
              href="tel:844-310-1649"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border-2 border-neutral-700 rounded-full hover:border-primary-500 hover:text-primary-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 844-310-1649
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { label: 'Insurance Accepted', value: 'Most Major Plans' },
              { label: 'Locations', value: '8+ States' },
              { label: 'Available', value: 'In-Person & Virtual' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-neutral-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
