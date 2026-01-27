export interface Treatment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process?: string[];
  image: string;
  icon?: string;
}

export const treatments: Treatment[] = [
  {
    id: 'tms-therapy',
    title: 'TMS Therapy',
    shortDescription: 'A breakthrough approach to alleviating depression',
    fullDescription:
      'Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate nerve cells in the brain. This innovative therapy is particularly effective for treatment-resistant depression, offering hope when other treatments have not been successful.',
    benefits: [
      'FDA-approved and clinically proven',
      'Non-invasive with no sedation required',
      'No systemic side effects',
      'Covered by most insurance plans',
      'Sessions last only 19-37 minutes',
      'Return to normal activities immediately',
    ],
    process: [
      'Initial consultation and evaluation',
      'Brain mapping to identify treatment area',
      'Daily sessions over 4-6 weeks',
      'Progress monitoring throughout',
      'Follow-up care and maintenance',
    ],
    image: '/images/treatments/tms-therapy.jpg',
    icon: 'brain',
  },
  {
    id: 'ketamine-therapy',
    title: 'Ketamine Therapy',
    shortDescription:
      'For those with extreme depression, anxiety, PTSD, and thoughts of self-harm',
    fullDescription:
      'Ketamine therapy offers rapid relief for severe depression, anxiety, PTSD, and other treatment-resistant mental health conditions. Administered in a controlled clinical setting, this breakthrough treatment can provide significant improvement in symptoms within hours to days.',
    benefits: [
      'Rapid symptom relief',
      'Effective for treatment-resistant conditions',
      'Safe clinical environment',
      'Experienced medical supervision',
      'Personalized treatment protocols',
      'Long-lasting results with maintenance',
    ],
    process: [
      'Comprehensive psychiatric evaluation',
      'Personalized treatment plan development',
      'IV infusion sessions in comfortable setting',
      'Continuous monitoring during treatment',
      'Integration therapy support',
    ],
    image: '/images/treatments/ketamine-therapy.jpg',
    icon: 'syringe',
  },
  {
    id: 'medication-management',
    title: 'Psychiatric Medication Management',
    shortDescription:
      "Navigate mental health medication with Serenity's expert guidance",
    fullDescription:
      'Our experienced psychiatrists provide comprehensive medication management services to ensure your treatment is safe, effective, and tailored to your unique needs. We work closely with you to find the right medication and dosage, monitoring your progress and adjusting as needed.',
    benefits: [
      'Expert psychiatric evaluation',
      'Individualized medication plans',
      'Regular monitoring and adjustments',
      'Side effect management',
      'Coordination with other providers',
      'Ongoing support and guidance',
    ],
    process: [
      'Initial psychiatric assessment',
      'Review of medical history and current medications',
      'Collaborative treatment planning',
      'Prescription and monitoring',
      'Regular follow-up appointments',
    ],
    image: '/images/treatments/medication-management.jpg',
    icon: 'pill',
  },
  {
    id: 'structured-gratitude',
    title: 'Structured Gratitude',
    shortDescription: 'Embrace the transformative power of gratitude',
    fullDescription:
      'Our Structured Gratitude program helps you cultivate appreciation, enhance well-being, and heal in our nurturing environment. This evidence-based approach combines gratitude practices with therapeutic support to promote mental wellness and emotional resilience.',
    benefits: [
      'Improved emotional well-being',
      'Reduced symptoms of anxiety and depression',
      'Enhanced relationships and social connections',
      'Better sleep quality',
      'Increased resilience to stress',
      'Greater life satisfaction',
    ],
    process: [
      'Assessment of current mental health needs',
      'Introduction to gratitude practices',
      'Guided journaling and reflection',
      'Group and individual sessions',
      'Integration into daily life',
    ],
    image: '/images/treatments/structured-gratitude.jpg',
    icon: 'heart',
  },
  {
    id: 'adhd-management',
    title: 'ADHD Testing and Management',
    shortDescription: 'Comprehensive ADHD assessments and tailored strategies',
    fullDescription:
      'Our ADHD program provides thorough diagnostic testing and personalized management strategies to help you reclaim your focus and find a balanced life. We combine medication management with behavioral strategies for comprehensive care.',
    benefits: [
      'Comprehensive diagnostic evaluation',
      'Personalized treatment plans',
      'Medication management when appropriate',
      'Behavioral strategy development',
      'Academic and workplace accommodations support',
      'Ongoing monitoring and adjustment',
    ],
    process: [
      'Detailed clinical interview',
      'Standardized ADHD testing',
      'Comprehensive evaluation report',
      'Treatment plan development',
      'Medication trial if indicated',
      'Regular follow-up and adjustment',
    ],
    image: '/images/treatments/adhd-management.jpg',
    icon: 'focus',
  },
];

export const getTreatmentById = (id: string): Treatment | undefined => {
  return treatments.find((treatment) => treatment.id === id);
};

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find((treatment) => treatment.id === slug);
};
