export interface Location {
  id: string;
  name: string;
  state: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  hours?: string;
  services?: string[];
  image?: string;
}

export interface StateInfo {
  id: string;
  name: string;
  abbreviation: string;
  locations: Location[];
}

export const states: StateInfo[] = [
  {
    id: 'arizona',
    name: 'Arizona',
    abbreviation: 'AZ',
    locations: [
      {
        id: 'az-phoenix',
        name: 'Phoenix',
        state: 'Arizona',
        city: 'Phoenix',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'colorado',
    name: 'Colorado',
    abbreviation: 'CO',
    locations: [
      {
        id: 'co-denver',
        name: 'Denver',
        state: 'Colorado',
        city: 'Denver',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'florida',
    name: 'Florida',
    abbreviation: 'FL',
    locations: [
      {
        id: 'fl-jacksonville-1',
        name: 'Jacksonville - Southside',
        state: 'Florida',
        city: 'Jacksonville',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management'],
      },
      {
        id: 'fl-jacksonville-2',
        name: 'Jacksonville - Northside',
        state: 'Florida',
        city: 'Jacksonville',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'georgia',
    name: 'Georgia',
    abbreviation: 'GA',
    locations: [
      {
        id: 'ga-alpharetta',
        name: 'Alpharetta/Roswell',
        state: 'Georgia',
        city: 'Alpharetta',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'ga-sandy-springs',
        name: 'Sandy Springs',
        state: 'Georgia',
        city: 'Sandy Springs',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'nevada',
    name: 'Nevada',
    abbreviation: 'NV',
    locations: [
      {
        id: 'nv-las-vegas',
        name: 'Las Vegas',
        state: 'Nevada',
        city: 'Las Vegas',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'texas',
    name: 'Texas',
    abbreviation: 'TX',
    locations: [
      {
        id: 'tx-houston',
        name: 'Houston',
        state: 'Texas',
        city: 'Houston',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'utah',
    name: 'Utah',
    abbreviation: 'UT',
    locations: [
      {
        id: 'ut-salt-lake',
        name: 'Salt Lake City',
        state: 'Utah',
        city: 'Salt Lake City',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'virginia',
    name: 'Virginia',
    abbreviation: 'VA',
    locations: [
      {
        id: 'va-richmond',
        name: 'Richmond',
        state: 'Virginia',
        city: 'Richmond',
        address: '',
        zip: '',
        phone: '844-310-1649',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
];

export const getAllLocations = (): Location[] => {
  return states.flatMap((state) => state.locations);
};

export const getStateBySlug = (slug: string): StateInfo | undefined => {
  return states.find((state) => state.id === slug);
};

export const getLocationById = (id: string): Location | undefined => {
  return getAllLocations().find((location) => location.id === id);
};

export const getStatesCount = (): number => states.length;

export const getLocationsCount = (): number => getAllLocations().length;
