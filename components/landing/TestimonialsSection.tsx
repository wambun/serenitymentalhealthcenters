'use client';

import { Quote, Star } from 'lucide-react';
import { getFeaturedTestimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  const testimonials = getFeaturedTestimonials(3);

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-500 font-medium">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">
            Voices of Wellness
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hear from patients who have transformed their lives with our
            compassionate care and innovative treatments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary-200" />

              {/* Quote */}
              <p className="mt-4 text-neutral-700 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-1">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
