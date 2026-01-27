'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Treatment } from '@/data/treatments';

interface FeatureSectionProps {
  treatment: Treatment;
  index: number;
}

const FeatureSection = ({ treatment, index }: FeatureSectionProps) => {
  const isReversed = index % 2 === 1;

  return (
    <section className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto bg-white/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-primary-700 font-medium">{treatment.title}</p>
              </div>
            </div>
            {/* Decorative element */}
            <div
              className={`absolute -z-10 w-full h-full bg-primary-100 rounded-2xl top-4 ${
                isReversed ? '-left-4' : '-right-4'
              }`}
            />
          </div>

          {/* Content */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              {treatment.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {treatment.fullDescription}
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {treatment.benefits.slice(0, 4).map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/treatments/${treatment.id}`}
              className="inline-flex items-center gap-2 mt-8 text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              Learn more about {treatment.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
