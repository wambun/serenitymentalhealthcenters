export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Treatments',
    links: [
      { href: '/treatments/tms-therapy', title: 'TMS Therapy' },
      { href: '/treatments/ketamine-therapy', title: 'Ketamine Therapy' },
      { href: '/treatments/medication-management', title: 'Medication Management' },
      { href: '/treatments/adhd-management', title: 'ADHD Management' },
    ],
  },
  {
    columnName: 'Conditions',
    links: [
      { href: '/conditions/depression', title: 'Depression' },
      { href: '/conditions/anxiety', title: 'Anxiety' },
      { href: '/conditions/ptsd', title: 'PTSD' },
      { href: '/conditions/bipolar-disorder', title: 'Bipolar Disorder' },
      { href: '/conditions/ocd', title: 'OCD' },
      { href: '/conditions/adhd', title: 'ADHD' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/locations', title: 'Locations' },
      { href: '/testimonials', title: 'Patient Stories' },
      { href: '/careers', title: 'Careers' },
      { href: '/contact', title: 'Contact' },
    ],
  },
  {
    columnName: 'Resources',
    links: [
      { href: '/insurance', title: 'Insurance' },
      { href: '/blog', title: 'Mental Health Blog' },
      { href: '/appointment', title: 'Request Appointment' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];
