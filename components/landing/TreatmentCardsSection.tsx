'use client';

import Link from 'next/link';
import { ArrowRight, Brain, Syringe, Pill, Heart, Focus } from 'lucide-react';
import { treatments } from '@/data/treatments';

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  syringe: Syringe,
  pill: Pill,
  heart: Heart,
  focus: Focus,
};

const TreatmentCardsSection = () => {
  const featuredTreatments = treatments.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-500 font-medium">Our Treatments</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">
            Invest in Your Mental Health
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Choose from our range of evidence-based treatments designed to help
            you achieve lasting wellness.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment, index) => {
            const IconComponent = iconMap[treatment.icon || 'brain'] || Brain;
            const isHighlighted = index === 1;

            return (
              <div
                key={treatment.id}
                className={`relative rounded-2xl p-8 ${
                  isHighlighted
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-50 hover:bg-neutral-100'
                } transition-colors`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isHighlighted ? 'bg-white/20' : 'bg-primary-100'
                  }`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${
                      isHighlighted ? 'text-white' : 'text-primary-600'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`mt-6 text-xl font-bold ${
                    isHighlighted ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {treatment.title}
                </h3>
                <p
                  className={`mt-3 text-sm ${
                    isHighlighted ? 'text-white/80' : 'text-neutral-600'
                  }`}
                >
                  {treatment.shortDescription}
                </p>

                {/* Benefits */}
                <ul className="mt-6 space-y-3">
                  {treatment.benefits.slice(0, 4).map((benefit, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        isHighlighted ? 'text-white/90' : 'text-neutral-700'
                      }`}
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isHighlighted ? 'bg-white' : 'bg-primary-500'
                        }`}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/treatments/${treatment.id}`}
                  className={`mt-8 inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-medium rounded-full transition-colors ${
                    isHighlighted
                      ? 'bg-white text-primary-600 hover:bg-neutral-100'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCardsSection;
