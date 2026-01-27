export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment?: string;
  location?: string;
  image?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sharon',
    quote:
      'Energy level change was the biggest benefit. I actually felt like cooking after work, which I hadn\'t done in years. TMS gave me my life back.',
    treatment: 'TMS Therapy',
    location: 'Georgia',
    image: '/images/testimonials/sharon.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ryan',
    quote:
      'TMS helped me concentrate and focus in ways I never thought possible. I\'m confident I\'ll be able to work full-time again. The staff at Serenity was incredibly supportive.',
    treatment: 'TMS Therapy',
    location: 'Florida',
    image: '/images/testimonials/ryan.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael',
    quote:
      'Things seemed brighter after my treatment. It brought back childhood memories - things looked fresh again. I\'m grateful I found Serenity.',
    treatment: 'TMS Therapy',
    location: 'Texas',
    image: '/images/testimonials/michael.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jennifer',
    quote:
      'After struggling with depression for over a decade, ketamine therapy at Serenity finally gave me relief. The team is compassionate and truly cares about your well-being.',
    treatment: 'Ketamine Therapy',
    location: 'Arizona',
    image: '/images/testimonials/jennifer.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'David',
    quote:
      'The medication management program helped me find the right balance. My psychiatrist took the time to understand my needs and adjusted my treatment accordingly.',
    treatment: 'Medication Management',
    location: 'Colorado',
    image: '/images/testimonials/david.jpg',
    rating: 5,
  },
  {
    id: '6',
    name: 'Maria',
    quote:
      'I was skeptical at first, but the structured gratitude program changed my perspective on life. Combined with other treatments, I feel like a new person.',
    treatment: 'Structured Gratitude',
    location: 'Nevada',
    image: '/images/testimonials/maria.jpg',
    rating: 5,
  },
];

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter((t) => t.treatment === treatment);
};
