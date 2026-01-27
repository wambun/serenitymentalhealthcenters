'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const TextReveal = ({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionComponent
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={className}
      >
        {children}
      </MotionComponent>
    </div>
  );
};

interface SplitTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
}

export const SplitTextReveal = ({
  text,
  className = '',
  wordClassName = '',
  staggerDelay = 0.05,
}: SplitTextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: index * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
