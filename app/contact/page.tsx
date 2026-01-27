import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { NewsletterSection } from '@/components/landing';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Serenity Mental Health Centers',
  description:
    'Get in touch with Serenity Mental Health Centers. Call us, send an email, or visit one of our locations. We are here to help you on your mental health journey.',
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our care team',
    detail: '844-310-1649',
    action: 'tel:844-310-1649',
    actionText: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your questions or concerns',
    detail: 'info@serenitymentalhealthcenters.com',
    action: 'mailto:info@serenitymentalhealthcenters.com',
    actionText: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Find a location near you',
    detail: '10+ locations across 8 states',
    action: '/locations',
    actionText: 'View Locations',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'When our offices are open',
    detail: 'Monday - Friday: 8am - 5pm',
    action: null,
    actionText: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Contact Us"
          description="We're here to help. Reach out to our compassionate team to start your journey toward better mental health."
        />

        {/* Contact Methods */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="p-6 bg-white rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-heading-lg font-semibold text-neutral-900">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-neutral-600">{method.description}</p>
                  <p className="mt-3 text-body-md font-medium text-neutral-900">{method.detail}</p>
                  {method.action && method.actionText && (
                    method.action.startsWith('/') ? (
                      <Link
                        href={method.action}
                        className="inline-flex items-center mt-4 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                      >
                        {method.actionText}
                        <span className="ml-1">→</span>
                      </Link>
                    ) : (
                      <a
                        href={method.action}
                        className="inline-flex items-center mt-4 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                      >
                        {method.actionText}
                        <span className="ml-1">→</span>
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div>
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  Have a question or want to learn more about our services? Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-body-sm font-medium text-neutral-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-body-sm font-medium text-neutral-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-body-sm font-medium text-neutral-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Schedule an Appointment</option>
                      <option value="tms">TMS Therapy</option>
                      <option value="ketamine">Ketamine Therapy</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-neutral-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info Panel */}
              <div className="lg:pl-12">
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <MessageCircle className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-heading-xl font-bold text-neutral-900">
                    Need Immediate Help?
                  </h3>
                  <p className="mt-4 text-body-md text-neutral-600">
                    If you&apos;re experiencing a mental health crisis, please call our crisis line or visit your nearest emergency room.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="p-4 bg-white rounded-xl">
                      <p className="text-body-sm font-medium text-neutral-900">
                        Crisis Hotline
                      </p>
                      <a
                        href="tel:988"
                        className="text-heading-lg font-bold text-primary-500 hover:text-primary-600"
                      >
                        988
                      </a>
                      <p className="text-body-sm text-neutral-500 mt-1">
                        Suicide & Crisis Lifeline
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <p className="text-body-sm font-medium text-neutral-900">
                        Our Main Line
                      </p>
                      <a
                        href="tel:844-310-1649"
                        className="text-heading-lg font-bold text-primary-500 hover:text-primary-600"
                      >
                        844-310-1649
                      </a>
                      <p className="text-body-sm text-neutral-500 mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <h4 className="text-heading-md font-semibold text-neutral-900">
                      Business Hours
                    </h4>
                    <div className="mt-4 space-y-2 text-body-sm text-neutral-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-neutral-900">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-neutral-900">By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-neutral-900">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
