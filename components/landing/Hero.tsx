'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NeuralNetwork } from '@/components/animations';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Neural Network Background */}
      <div className="absolute inset-0 -z-20">
        <NeuralNetwork className="absolute inset-0 w-full h-full" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - HealthWell style with animations */}
          <motion.h1
            className="text-display-md sm:text-display-lg lg:text-display-xl tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="block font-light text-neutral-900 overflow-hidden"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              Take Back Your Life
            </motion.span>
            <motion.span
              className="block font-bold text-neutral-900"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            >
              with <span className="text-primary-500">Serenity</span>
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-body-lg text-neutral-600 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          >
            Personalized treatment plans that really work. Our experienced
            psychiatrists provide comprehensive, evidence-based mental health
            care tailored to your unique needs.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-6 flex-wrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + i * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
              <span className="ml-2 text-body-sm font-medium text-neutral-700">
                4.9/5.0
              </span>
            </div>
            <div className="h-6 w-px bg-neutral-300 hidden sm:block" />
            <span className="text-body-sm text-neutral-600">
              Trusted by 10,000+ patients
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-neutral-700 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                Find More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
