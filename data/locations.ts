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
  image?: string;
  locations: Location[];
}

export const states: StateInfo[] = [
  {
    id: 'arizona',
    name: 'Arizona',
    abbreviation: 'AZ',
    image: '/images/locations/arizona.jpg',
    locations: [
      {
        id: 'az-gilbert',
        name: 'Gilbert',
        state: 'Arizona',
        city: 'Gilbert',
        address: '1501 North Gilbert Road, Suite 206',
        zip: '85234',
        phone: '480-956-5710',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'az-chandler',
        name: 'Chandler',
        state: 'Arizona',
        city: 'Phoenix',
        address: '4545 East Chandler Boulevard, Suite 308',
        zip: '85048',
        phone: '480-956-5660',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'az-desert-ridge',
        name: 'Desert Ridge',
        state: 'Arizona',
        city: 'Phoenix',
        address: '20950 North Tatum Boulevard, Suite 380',
        zip: '85050',
        phone: '480-956-5670',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'az-biltmore',
        name: 'Biltmore',
        state: 'Arizona',
        city: 'Phoenix',
        address: '2390 East Camelback Road, Suite 130',
        zip: '85016',
        phone: '480-956-5680',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'colorado',
    name: 'Colorado',
    abbreviation: 'CO',
    image: '/images/locations/colorado.jpg',
    locations: [
      {
        id: 'co-cherry-creek',
        name: 'Cherry Creek',
        state: 'Colorado',
        city: 'Denver',
        address: '425 South Cherry Street, Penthouse Suite',
        zip: '80246',
        phone: '720-340-7166',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 7AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'co-colorado-springs',
        name: 'Colorado Springs',
        state: 'Colorado',
        city: 'Colorado Springs',
        address: '6071 East Woodmen Road, Suite 200',
        zip: '80923',
        phone: '719-212-4401',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 7AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'co-parker',
        name: 'Parker',
        state: 'Colorado',
        city: 'Parker',
        address: '9399 Crown Crest Boulevard, Suite 401',
        zip: '80138',
        phone: '720-248-5527',
        hours: 'Mon-Fri: 9AM-5PM',
        services: ['TMS Therapy', 'Medication Management'],
      },
      {
        id: 'co-lakewood',
        name: 'Lakewood',
        state: 'Colorado',
        city: 'Lakewood',
        address: '10190 Bannock Street, Suite 100',
        zip: '80215',
        phone: '720-340-7170',
        hours: 'Mon-Fri: 6AM-8PM, Sat: 7AM-7PM',
        services: ['TMS Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'florida',
    name: 'Florida',
    abbreviation: 'FL',
    image: '/images/locations/florida.jpg',
    locations: [
      {
        id: 'fl-jacksonville',
        name: 'Jacksonville',
        state: 'Florida',
        city: 'Jacksonville',
        address: '841 Prudential Drive, Suite 1100',
        zip: '32207',
        phone: '904-328-7379',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'fl-orlando',
        name: 'Orlando',
        state: 'Florida',
        city: 'Orlando',
        address: '9400 Southpark Center Loop, Suite 450',
        zip: '32819',
        phone: '407-495-1733',
        hours: 'Tue-Fri: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'fl-lake-mary',
        name: 'Lake Mary',
        state: 'Florida',
        city: 'Lake Mary',
        address: '1185 International Parkway, Suite 2201',
        zip: '32746',
        phone: '407-495-1740',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'fl-nocatee',
        name: 'Nocatee',
        state: 'Florida',
        city: 'Ponte Vedra',
        address: '100 Marketside Avenue, Suite 112',
        zip: '32081',
        phone: '904-328-7385',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Medication Management'],
      },
    ],
  },
  {
    id: 'georgia',
    name: 'Georgia',
    abbreviation: 'GA',
    image: '/images/locations/georgia.jpg',
    locations: [
      {
        id: 'ga-alpharetta',
        name: 'Alpharetta/Roswell',
        state: 'Georgia',
        city: 'Roswell',
        address: '300 Colonial Center Parkway, Suite 350',
        zip: '30076',
        phone: '678-723-6912',
        hours: 'Mon-Sat: 6AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'ga-sandy-springs',
        name: 'Sandy Springs',
        state: 'Georgia',
        city: 'Sandy Springs',
        address: '990 Hammond Drive, 6th Floor',
        zip: '30328',
        phone: '678-856-6330',
        hours: 'Mon-Sat: 7AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'nevada',
    name: 'Nevada',
    abbreviation: 'NV',
    image: '/images/locations/nevada.jpg',
    locations: [
      {
        id: 'nv-las-vegas',
        name: 'Las Vegas',
        state: 'Nevada',
        city: 'Las Vegas',
        address: '7455 West Washington Avenue, Suite 420',
        zip: '89128',
        phone: '725-201-7837',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'nv-henderson',
        name: 'Henderson',
        state: 'Nevada',
        city: 'Henderson',
        address: '1505 Wigwam Parkway, Suite 211',
        zip: '89074',
        phone: '702-729-6480',
        hours: 'Mon-Sat: 7AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'texas',
    name: 'Texas',
    abbreviation: 'TX',
    image: '/images/locations/texas.jpg',
    locations: [
      {
        id: 'tx-austin',
        name: 'Austin',
        state: 'Texas',
        city: 'Austin',
        address: '9600 North Mopac Expressway, Suite 650',
        zip: '78759',
        phone: '737-312-2194',
        hours: 'Mon-Sat: 6AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-san-antonio',
        name: 'San Antonio',
        state: 'Texas',
        city: 'San Antonio',
        address: '18615 Tuscany Stone, Suite 250',
        zip: '78258',
        phone: '726-201-0353',
        hours: 'Mon-Sat: 6AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-fort-worth',
        name: 'Fort Worth',
        state: 'Texas',
        city: 'Fort Worth',
        address: '6500 West Freeway, Suite 700',
        zip: '76116',
        phone: '817-502-3075',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-frisco',
        name: 'Frisco',
        state: 'Texas',
        city: 'Frisco',
        address: '3800 Gaylord Parkway, Suite 1100',
        zip: '75034',
        phone: '469-865-1887',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-southlake',
        name: 'Southlake',
        state: 'Texas',
        city: 'Southlake',
        address: '431 East State Highway 114, Suite 400',
        zip: '76092',
        phone: '817-880-7098',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-sugar-land',
        name: 'Sugar Land',
        state: 'Texas',
        city: 'Sugar Land',
        address: '2245 Texas Drive, Suite 300',
        zip: '77479',
        phone: '346-307-7270',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'tx-galleria',
        name: 'Houston Galleria',
        state: 'Texas',
        city: 'Houston',
        address: '2929 Allen Parkway, Suite 200',
        zip: '77019',
        phone: '346-307-7275',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'utah',
    name: 'Utah',
    abbreviation: 'UT',
    image: '/images/locations/utah.jpg',
    locations: [
      {
        id: 'ut-holladay',
        name: 'Holladay',
        state: 'Utah',
        city: 'Salt Lake City',
        address: '6550 South Millrock Drive, Suite 250',
        zip: '84121',
        phone: '801-697-2610',
        hours: 'Mon-Sat: 6AM-8PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'ut-provo',
        name: 'Provo',
        state: 'Utah',
        city: 'Provo',
        address: '145 West 200 North, Suite 600',
        zip: '84601',
        phone: '801-882-2237',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'ut-lehi',
        name: 'Lehi',
        state: 'Utah',
        city: 'Lehi',
        address: '3300 North Triumph Boulevard, Suite 500',
        zip: '84043',
        phone: '801-697-2740',
        hours: 'Mon-Sat: 6AM-6PM',
        services: ['TMS Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'ut-layton',
        name: 'Layton',
        state: 'Utah',
        city: 'Layton',
        address: '1660 North Woodland Park Drive, Suite 200',
        zip: '84041',
        phone: '801-697-2750',
        hours: 'Mon-Sat: 6AM-7PM',
        services: ['TMS Therapy', 'Medication Management', 'ADHD Testing'],
      },
    ],
  },
  {
    id: 'virginia',
    name: 'Virginia',
    abbreviation: 'VA',
    image: '/images/locations/virginia.jpg',
    locations: [
      {
        id: 'va-fairfax',
        name: 'Fairfax',
        state: 'Virginia',
        city: 'Fairfax',
        address: '12150 Monument Drive, Suite 375',
        zip: '22033',
        phone: '571-534-3791',
        hours: 'Mon-Fri: 7:30AM-7PM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
      },
      {
        id: 'va-alexandria',
        name: 'Alexandria',
        state: 'Virginia',
        city: 'Alexandria',
        address: '6354 Walker Lane, Suite 450',
        zip: '22310',
        phone: '571-200-6057',
        hours: 'Mon-Fri: 6AM-8:30PM, Sat: 6AM-8:30AM',
        services: ['TMS Therapy', 'Ketamine Therapy', 'Medication Management', 'ADHD Testing'],
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
