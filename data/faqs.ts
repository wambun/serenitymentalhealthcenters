export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is TMS therapy and how does it work?',
    answer:
      'TMS (Transcranial Magnetic Stimulation) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate nerve cells in areas of the brain involved in mood control. During a TMS session, an electromagnetic coil is placed against your scalp near your forehead. The electromagnet painlessly delivers a magnetic pulse that stimulates nerve cells in the region of your brain involved in mood regulation and depression.',
    category: 'treatments',
  },
  {
    id: '2',
    question: 'Is ketamine therapy safe?',
    answer:
      'When administered by trained medical professionals in a clinical setting like Serenity Mental Health Centers, ketamine therapy is safe and effective. Our team carefully screens all patients, monitors vital signs throughout treatment, and provides a comfortable, supervised environment. Ketamine has been used safely in medical settings for decades.',
    category: 'treatments',
  },
  {
    id: '3',
    question: 'How long does TMS treatment take?',
    answer:
      'A typical TMS treatment course consists of daily sessions (5 days per week) for 4-6 weeks. Each session lasts approximately 19-37 minutes depending on the protocol used. Most patients can return to their normal daily activities immediately after each session.',
    category: 'treatments',
  },
  {
    id: '4',
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major commercial insurance carriers including BlueCross BlueShield, Aetna, United Healthcare, Cigna, Humana, and many others. Our team will help verify your benefits and explain your coverage before treatment begins.',
    category: 'insurance',
  },
  {
    id: '5',
    question: 'How do I know if I am a candidate for TMS?',
    answer:
      'TMS is typically recommended for patients with depression who have not achieved satisfactory improvement from prior antidepressant medication. During your initial consultation, our psychiatrists will evaluate your medical history, current symptoms, and previous treatments to determine if TMS is right for you.',
    category: 'treatments',
  },
  {
    id: '6',
    question: 'What conditions do you treat?',
    answer:
      'We specialize in treating depression, anxiety, PTSD, OCD, bipolar disorder, and ADHD. Our comprehensive approach includes various treatment modalities such as TMS therapy, ketamine therapy, medication management, and structured therapeutic programs.',
    category: 'general',
  },
  {
    id: '7',
    question: 'How do I schedule an appointment?',
    answer:
      'You can schedule an appointment by calling us at 844-310-1649 or by filling out our online appointment request form. Our team will contact you within one business day to confirm your appointment and gather any necessary information.',
    category: 'general',
  },
  {
    id: '8',
    question: 'What should I expect at my first visit?',
    answer:
      'During your first visit, you will meet with one of our psychiatrists for a comprehensive evaluation. This includes a review of your medical history, current symptoms, previous treatments, and your goals for care. Based on this evaluation, we will develop a personalized treatment plan tailored to your needs.',
    category: 'general',
  },
  {
    id: '9',
    question: 'Are your treatments covered by insurance?',
    answer:
      'Many of our treatments, including TMS therapy and medication management, are covered by most major insurance plans. Ketamine therapy may have different coverage depending on your plan. Our billing team will help verify your benefits and provide cost estimates before treatment.',
    category: 'insurance',
  },
  {
    id: '10',
    question: 'Do you offer virtual/telehealth appointments?',
    answer:
      'Yes, we offer telehealth appointments for certain services including initial consultations, medication management follow-ups, and some therapy sessions. This allows patients to receive care from the comfort of their home when appropriate.',
    category: 'general',
  },
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

export const getFeaturedFAQs = (count: number = 5): FAQ[] => {
  return faqs.slice(0, count);
};
