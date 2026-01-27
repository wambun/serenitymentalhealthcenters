import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/config/footerLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.svg"
                alt="Serenity Mental Health"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-[0.2em] uppercase text-primary-400">
                  Serenity
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-amber-500">
                  Mental Health
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm mb-6 max-w-sm">
              Giving you mental healing and overall wellness in our best-in-class
              clinics. Personalized treatment plans with highly trained
              professionals.
            </p>
            <div className="space-y-3">
              <a
                href="tel:844-310-1649"
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">844-310-1649</span>
              </a>
              <a
                href="mailto:info@serenitymentalhealthcenters.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@serenitymentalhealthcenters.com</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Serving AZ, CO, FL, GA, NV, TX, UT, VA
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.columnName}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {column.columnName}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Serenity Mental Health Centers. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
