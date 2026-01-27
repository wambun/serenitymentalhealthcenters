'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - HealthWell style: light first line, bold second line */}
          <h1 className="text-display-md sm:text-display-lg lg:text-display-xl tracking-tight">
            <span className="block font-light text-neutral-900">
              Take Back Your Life
            </span>
            <span className="block font-bold text-neutral-900">
              with <span className="text-primary-500">Serenity</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Personalized treatment plans that really work. Our experienced
            psychiatrists provide comprehensive, evidence-based mental health
            care tailored to your unique needs.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-body-sm font-medium text-neutral-700">
                4.9/5.0
              </span>
            </div>
            <div className="h-6 w-px bg-neutral-300 hidden sm:block" />
            <span className="text-body-sm text-neutral-600">
              Trusted by 10,000+ patients
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-neutral-700 bg-white border border-neutral-200 rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors"
            >
              Find More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
