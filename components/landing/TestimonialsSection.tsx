'use client';

import { Quote, Star } from 'lucide-react';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TestimonialsSection = () => {
  const testimonials = getFeaturedTestimonials(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-neutral-50" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-primary-500 font-medium">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">
            Voices of Wellness
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hear from patients who have transformed their lives with our
            compassionate care and innovative treatments.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.33, 1, 0.68, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <Quote className="w-10 h-10 text-primary-200" />
              </motion.div>

              {/* Quote */}
              <p className="mt-4 text-neutral-700 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-1">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.15 + i * 0.05,
                      type: 'spring',
                      stiffness: 300,
                    }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center"
                >
                  <span className="text-lg font-semibold text-primary-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  {testimonial.treatment && (
                    <div className="text-sm text-neutral-500">
                      {testimonial.treatment}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
