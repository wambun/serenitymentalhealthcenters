'use client';

import Link from 'next/link';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NeuralNetwork, BrainAnimation } from '@/components/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
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
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-amber-100/20 rounded-full blur-3xl translate-x-1/2"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full border border-primary-200/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600" aria-hidden="true" />
              <span className="text-sm font-medium text-primary-700">
                Evidence-Based Mental Health Care
              </span>
            </motion.div>

            {/* Headline */}
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
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                with{' '}
                <span className="relative">
                  <span className="text-primary-500">Serenity</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mt-6 text-body-lg text-neutral-600 max-w-xl mx-auto lg:mx-0"
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
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 flex-wrap"
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
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
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
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
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
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-neutral-700 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full hover:border-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Explore Treatments
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Brain Animation */}
          <motion.div
            className="relative order-1 lg:order-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Decorative ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="w-[90%] h-[90%] rounded-full border border-primary-200/40 border-dashed" />
            </motion.div>

            {/* Second decorative ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 0.5, rotate: 0 }}
              transition={{ duration: 2.5, delay: 0.7, ease: 'easeOut' }}
            >
              <div className="w-[75%] h-[75%] rounded-full border border-primary-300/30" />
            </motion.div>

            {/* Main Brain Animation Container */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <BrainAnimation className="w-full h-full" />

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-primary-100"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Success Rate</p>
                    <p className="text-sm font-bold text-neutral-800">94%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-primary-100"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Patients Helped</p>
                    <p className="text-sm font-bold text-neutral-800">10,000+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
