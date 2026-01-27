'use client';

import { stats } from '@/data/stats';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/animations';

const StatsBar = () => {
  const displayStats = stats.slice(0, 5);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-12 bg-neutral-50" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500">
                {stat.prefix}
                <AnimatedCounter
                  value={parseInt(stat.value.replace(/,/g, '')) || 0}
                  duration={2}
                />
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
