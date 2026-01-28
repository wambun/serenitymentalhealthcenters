'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-neutral-900 w-full" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center">
          <motion.span
            className="text-primary-400 font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            Ready to Get Started?
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            Take the First Step Toward Healing
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            Our compassionate team is ready to help you on your journey to
            mental wellness. Schedule a consultation today and discover the
            treatment options that are right for you.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <a
                href="tel:844-310-1649"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border-2 border-neutral-700 rounded-full hover:border-primary-500 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 844-310-1649
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 grid sm:grid-cols-3 gap-8 lg:gap-16 max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          >
            {[
              { label: 'Insurance Accepted', value: 'Most Major Plans' },
              { label: 'Locations', value: '8+ States' },
              { label: 'Available', value: 'In-Person & Virtual' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-neutral-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
