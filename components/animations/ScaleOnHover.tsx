'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleOnHoverProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export const ScaleOnHover = ({
  children,
  scale = 1.02,
  className = '',
  ...props
}: ScaleOnHoverProps) => {
  return (
    <motion.div
      whileHover={{ scale, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnHover;
