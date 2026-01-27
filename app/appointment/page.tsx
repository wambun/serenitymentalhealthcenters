import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { CheckCircle2, Phone, Clock, Shield, ArrowRight } from 'lucide-react';
import { states } from '@/data/locations';
import { treatments } from '@/data/treatments';
import { conditions } from '@/data/conditions';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Serenity Mental Health Centers',
  description:
    'Request an appointment at Serenity Mental Health Centers. Take the first step toward better mental health with our compassionate, expert care team.',
};

const benefits = [
  'Same-week appointments often available',
  'Most insurance plans accepted',
  'Confidential and compassionate care',
  'Evidence-based treatment approaches',
];

export default function AppointmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Content */}
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span className="text-body-sm font-medium text-primary-600">
                    Quick & Easy Scheduling
                  </span>
                </div>

                <h1 className="text-display-md sm:text-display-lg font-bold text-neutral-900 tracking-tight">
                  <span className="block font-light">Take the First Step</span>
                  <span className="block">Toward Wellness</span>
                </h1>

                <p className="mt-6 text-body-lg text-neutral-600">
                  Request an appointment today. Our care coordinators will contact you within 24 hours to confirm your appointment and answer any questions.
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-body-md text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 p-6 bg-white rounded-2xl border border-neutral-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-600">Prefer to call?</p>
                      <a
                        href="tel:844-310-1649"
                        className="text-heading-lg font-bold text-primary-500 hover:text-primary-600"
                      >
                        844-310-1649
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-body-sm text-neutral-500">
                  <Shield className="w-4 h-4" />
                  <span>Your information is secure and confidential</span>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-8">
                <h2 className="text-heading-xl font-bold text-neutral-900">
                  Request an Appointment
                </h2>
                <p className="mt-2 text-body-md text-neutral-600">
                  Fill out the form below and we&apos;ll be in touch soon.
                </p>

                <form className="mt-8 space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-heading-md font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                      Personal Information
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-body-sm font-medium text-neutral-700"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-body-sm font-medium text-neutral-700"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-body-sm font-medium text-neutral-700"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-body-sm font-medium text-neutral-700"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="dob"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        required
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Appointment Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-heading-md font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                      Appointment Preferences
                    </h3>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Preferred Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                      >
                        <option value="">Select a location</option>
                        {states.map((state) => (
                          <optgroup key={state.id} label={state.name}>
                            {state.locations.map((location) => (
                              <option key={location.id} value={location.id}>
                                {location.name}, {state.abbreviation}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="treatment"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Treatment Interest
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                      >
                        <option value="">Select a treatment (optional)</option>
                        {treatments.map((treatment) => (
                          <option key={treatment.id} value={treatment.id}>
                            {treatment.title}
                          </option>
                        ))}
                        <option value="unsure">Not sure / Need consultation</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="condition"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Primary Concern
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                      >
                        <option value="">Select a condition (optional)</option>
                        {conditions.map((condition) => (
                          <option key={condition.id} value={condition.id}>
                            {condition.title}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredContact"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Preferred Contact Method
                      </label>
                      <div className="mt-2 flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            defaultChecked
                            className="w-4 h-4 text-primary-500 border-neutral-300 focus:ring-primary-500"
                          />
                          <span className="text-body-sm text-neutral-700">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            className="w-4 h-4 text-primary-500 border-neutral-300 focus:ring-primary-500"
                          />
                          <span className="text-body-sm text-neutral-700">Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="text"
                            className="w-4 h-4 text-primary-500 border-neutral-300 focus:ring-primary-500"
                          />
                          <span className="text-body-sm text-neutral-700">Text</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="space-y-6">
                    <h3 className="text-heading-md font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                      Insurance Information
                    </h3>

                    <div>
                      <label
                        htmlFor="insurance"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Insurance Provider
                      </label>
                      <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="e.g., Blue Cross Blue Shield"
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-6">
                    <h3 className="text-heading-md font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                      Additional Information
                    </h3>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-body-sm font-medium text-neutral-700"
                      >
                        Tell us more about your needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-2 w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          className="mt-1 w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-body-sm text-neutral-600">
                          I consent to receiving communications from Serenity Mental Health Centers regarding my appointment request. I understand that my information will be kept confidential. <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Request Appointment
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-body-sm text-neutral-500">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
