import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import {
  Hero,
  StatsBar,
  MissionSection,
  FeatureSection,
  TestimonialsSection,
  TreatmentCardsSection,
  FAQSection,
  NewsletterSection,
  CTASection,
} from '@/components/landing';
import { treatments } from '@/data/treatments';

export default function Home() {
  // Get first 3 treatments for feature sections
  const featuredTreatments = treatments.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Bar */}
        <StatsBar />

        {/* Mission Section */}
        <MissionSection />

        {/* Feature Sections - Treatments */}
        {featuredTreatments.map((treatment, index) => (
          <FeatureSection key={treatment.id} treatment={treatment} index={index} />
        ))}

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Treatment Cards */}
        <TreatmentCardsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />

        {/* Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
