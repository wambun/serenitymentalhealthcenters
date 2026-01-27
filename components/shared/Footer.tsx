import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/config/footerLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                Serenity
                <span className="font-light text-primary-400 ml-1">
                  Mental Health
                </span>
              </span>
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
