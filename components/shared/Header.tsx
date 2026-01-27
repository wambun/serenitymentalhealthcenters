'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Serenity Mental Health"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-[0.2em] uppercase text-primary-600">
                Serenity
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-amber-600">
                Mental Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  pathname === link.href
                    ? 'text-primary-500'
                    : 'text-neutral-600'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:844-310-1649"
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>844-310-1649</span>
            </a>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="px-4 py-6 space-y-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-100 space-y-4">
                <a
                  href="tel:844-310-1649"
                  className="flex items-center gap-2 text-base font-medium text-neutral-600"
                >
                  <Phone className="w-5 h-5" />
                  <span>844-310-1649</span>
                </a>
                <Link
                  href="/appointment"
                  className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
