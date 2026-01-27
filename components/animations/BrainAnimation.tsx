'use client';

import { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'framer-motion';
import brainAnimation from '@/public/animations/brain.json';
import neuronAnimation from '@/public/animations/neuron.json';

interface BrainAnimationProps {
  className?: string;
}

export const BrainAnimation = ({ className = '' }: BrainAnimationProps) => {
  const brainRef = useRef<LottieRefCurrentProps>(null);
  const neuronRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Slow down the animations for a more calming effect
    if (brainRef.current) {
      brainRef.current.setSpeed(0.7);
    }
    if (neuronRef.current) {
      neuronRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 via-primary-400/10 to-primary-600/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary pulsing glow */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-400/30 to-transparent blur-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Neuron animation layer - behind the brain */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <Lottie
          lottieRef={neuronRef}
          animationData={neuronAnimation}
          loop={true}
          className="w-[140%] h-[140%] opacity-40"
          style={{
            filter: 'hue-rotate(-10deg) saturate(1.2)',
          }}
        />
      </motion.div>

      {/* Main brain animation */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <Lottie
          lottieRef={brainRef}
          animationData={brainAnimation}
          loop={true}
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(101, 60, 133, 0.4))',
          }}
        />
      </motion.div>

      {/* Floating particles around the brain */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-400/60"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Synapse spark effects */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${30 + i * 15}%`,
            top: `${40 + (i % 2) * 20}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            boxShadow: [
              '0 0 0px rgba(255,255,255,0)',
              '0 0 10px rgba(255,255,255,0.8)',
              '0 0 0px rgba(255,255,255,0)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.8 + 1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BrainAnimation;
