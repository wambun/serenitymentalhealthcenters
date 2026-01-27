export interface Stat {
  id: string;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const stats: Stat[] = [
  {
    id: 'years',
    value: '7',
    label: 'Years of Excellence',
    prefix: '',
    suffix: '+',
  },
  {
    id: 'patients',
    value: '10,000',
    label: 'Patients Helped',
    prefix: '',
    suffix: '+',
  },
  {
    id: 'states',
    value: '8',
    label: 'States Served',
    prefix: '',
    suffix: '',
  },
  {
    id: 'success',
    value: '85',
    label: 'Success Rate',
    prefix: '',
    suffix: '%',
  },
  {
    id: 'providers',
    value: '50',
    label: 'Expert Providers',
    prefix: '',
    suffix: '+',
  },
];

export const getHomePageStats = (): Stat[] => {
  return stats.slice(0, 4);
};
