'use client';

import Link from 'next/link';
import { ArrowRight, Brain, Syringe, Pill, Heart, Focus } from 'lucide-react';
import { treatments } from '@/data/treatments';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  syringe: Syringe,
  pill: Pill,
  heart: Heart,
  focus: Focus,
};

const TreatmentCardsSection = () => {
  const featuredTreatments = treatments.slice(0, 3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-primary-500 font-medium">Our Treatments</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">
            Invest in Your Mental Health
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Choose from our range of evidence-based treatments designed to help
            you achieve lasting wellness.
          </p>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment, index) => {
            const IconComponent = iconMap[treatment.icon || 'brain'] || Brain;
            const isHighlighted = index === 1;

            return (
              <motion.div
                key={treatment.id}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl p-8 ${
                  isHighlighted
                    ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20'
                    : 'bg-neutral-50 hover:shadow-lg'
                } transition-shadow`}
              >
                {isHighlighted && (
                  <motion.div
                    initial={{ scale: 0, y: 10 }}
                    animate={isInView ? { scale: 1, y: 0 } : { scale: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.6, type: 'spring' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 rounded-full text-xs font-medium"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isHighlighted ? 'bg-white/20' : 'bg-primary-100'
                  }`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${
                      isHighlighted ? 'text-white' : 'text-primary-600'
                    }`}
                  />
                </motion.div>

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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-block"
          >
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              View All Treatments
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentCardsSection;
