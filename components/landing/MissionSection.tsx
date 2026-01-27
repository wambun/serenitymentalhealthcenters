'use client';

import { Heart, Shield, Users, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'We treat every patient with empathy, understanding, and respect throughout their healing journey.',
  },
  {
    icon: Shield,
    title: 'Evidence-Based Treatment',
    description:
      'Our treatments are backed by scientific research and proven clinical outcomes.',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description:
      'Every treatment plan is tailored to your unique needs, circumstances, and goals.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Wellness',
    description:
      'We focus on your complete well-being, addressing mind, body, and lifestyle factors.',
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Mission Statement */}
          <div>
            <span className="text-primary-500 font-medium">Our Mission</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Empowering Your Mental Wellness Journey
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Since 2017, Serenity Mental Health Centers has been dedicated to
              providing accessible, personalized mental health care. We believe
              everyone deserves access to effective treatment and compassionate
              support.
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              Our team of experienced psychiatrists and mental health
              professionals work together to create individualized treatment
              plans that address your specific needs and help you achieve
              lasting wellness.
            </p>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
