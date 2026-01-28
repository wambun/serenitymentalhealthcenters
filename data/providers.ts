export interface Provider {
  id: string;
  name: string;
  credentials: string;
  title: string;
  role: 'psychiatrist' | 'nurse-practitioner' | 'chief-medical-officer';
  image?: string;
  bio?: string;
  specialties?: string[];
  locationIds: string[];
  featured?: boolean;
}

export const providers: Provider[] = [
  // ============================================
  // LEADERSHIP
  // ============================================
  {
    id: 'teejay-tripp',
    image: '/images/providers/teejay-tripp.jpg',
    name: 'TeeJay Tripp',
    credentials: 'DO',
    title: 'Chief Medical Officer',
    role: 'chief-medical-officer',
    locationIds: ['az-gilbert', 'tx-fort-worth', 'tx-galleria', 'fl-lake-mary'],
    featured: true,
    specialties: ['TMS Therapy', 'Ketamine Therapy', 'Treatment-Resistant Depression'],
  },
  {
    id: 'jayson-tripp',
    image: '/images/providers/jayson-tripp.jpg',
    name: 'Jayson Tripp',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-gilbert', 'tx-fort-worth', 'tx-galleria', 'fl-lake-mary'],
    featured: true,
    specialties: ['General Psychiatry', 'Medication Management', 'Depression', 'Anxiety'],
  },

  // ============================================
  // ARIZONA PROVIDERS
  // ============================================
  // Gilbert
  {
    id: 'sarah-buttles',
    image: '/images/providers/sarah-buttles.jpg',
    name: 'Sarah Buttles',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Depression', 'Anxiety'],
  },
  {
    id: 'aaron-dahl',
    image: '/images/providers/aaron-dahl.jpg',
    name: 'Aaron Dahl',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-gilbert'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'sarah-moody',
    image: '/images/providers/sarah-moody.jpg',
    name: 'Sarah Moody',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Anxiety', 'ADHD'],
  },
  {
    id: 'ryan-wandler',
    image: '/images/providers/ryan-wandler.png',
    name: 'Ryan Wandler',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'brad-zehring',
    image: '/images/providers/brad-zehring.jpg',
    name: 'Brad Zehring',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-gilbert'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'mikayla-butkus',
    image: '/images/providers/mikayla-butkus.jpeg',
    name: 'Mikayla Butkus',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Mood Disorders'],
  },

  // Chandler
  {
    id: 'aaron-clay',
    image: '/images/providers/aaron-clay.jpg',
    name: 'Aaron Clay',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-chandler'],
    specialties: ['General Psychiatry', 'Depression', 'Anxiety'],
  },
  {
    id: 'jeffrey-ely',
    image: '/images/providers/jeffrey-ely.jpg',
    name: 'Jeffrey Ely',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-gallegos',
    image: '/images/providers/david-gallegos.jpg',
    name: 'David Gallegos',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management', 'ADHD'],
  },
  {
    id: 'david-hauser',
    image: '/images/providers/david-hauser.jpg',
    name: 'David Hauser',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-chandler'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'michelle-reijonen',
    image: '/images/providers/michelle-reijonen.jpeg',
    name: 'Michelle Reijonen',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'elizabeth-rotella',
    image: '/images/providers/elizabeth-rotella.png',
    name: 'Elizabeth Rotella',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management'],
  },

  // Desert Ridge
  {
    id: 'winona-belmonte',
    image: '/images/providers/winona-belmonte.jpg',
    name: 'Winona Belmonte',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-desert-ridge'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'kayla-cartwright',
    image: '/images/providers/kayla-cartwright.jpg',
    name: 'Kayla Cartwright',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'yong-lee',
    image: '/images/providers/yong-lee.jpg',
    name: 'Yong Lee',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-desert-ridge'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'melissa-leuzzi',
    image: '/images/providers/melissa-leuzzi.jpg',
    name: 'Melissa Leuzzi',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'lauren-marienau',
    image: '/images/providers/lauren-marienau.jpg',
    name: 'Lauren Marienau',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'angela-oakley',
    image: '/images/providers/angela-oakley.jpg',
    name: 'Angela Oakley',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ekus-onosode',
    image: '/images/providers/ekus-onosode.jpeg',
    name: 'Ekuevugbe (Ekus) Onosode',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'elias-ruiloba',
    image: '/images/providers/elias-ruiloba.jpg',
    name: 'Elias Ruiloba',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-desert-ridge'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },

  // Biltmore
  {
    id: 'nathaniel-brooks',
    image: '/images/providers/nathaniel-brooks.webp',
    name: 'Nathaniel Brooks',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'tara-leedham',
    image: '/images/providers/tara-leedham.webp',
    name: 'Tara Leedham',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'marcus-nielson',
    image: '/images/providers/marcus-nielson.webp',
    name: 'Marcus Nielson',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'alexandria-penner',
    image: '/images/providers/alexandria-penner.webp',
    name: 'Alexandria Penner',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'laura-skiba',
    image: '/images/providers/laura-skiba.png',
    name: 'Laura Skiba',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'deborah-stegner',
    image: '/images/providers/deborah-stegner.jpg',
    name: 'Deborah Stegner',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'naomi-park',
    image: '/images/providers/naomi-park.jpg',
    name: 'Naomi Park',
    credentials: 'MD, ABPN',
    title: 'Board-Certified Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry', 'ADHD', 'Depression'],
    featured: true,
  },
  {
    id: 'marci-bastien',
    image: '/images/providers/marci-bastien.jpeg',
    name: 'Marci Bastien',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'christian-gerwe',
    image: '/images/providers/christian-gerwe.jpg',
    name: 'Christian Gerwe',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry'],
  },

  // ============================================
  // COLORADO PROVIDERS
  // ============================================
  // Cherry Creek
  {
    id: 'austin-alderton',
    image: '/images/providers/austin-alderton.jpg',
    name: 'Austin Alderton',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management'],
  },
  {
    id: 'nico-bohm',
    image: '/images/providers/nico-bohm.jpg',
    name: 'Nico Bohm',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jennifer-french',
    image: '/images/providers/jennifer-french.jpg',
    name: 'Jennifer French',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-cherry-creek'],
    specialties: ['TMS Therapy', 'General Psychiatry'],
    featured: true,
  },
  {
    id: 'johnny-patterson',
    image: '/images/providers/johnny-patterson.jpg',
    name: 'Johnny Patterson',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'michael-wolfe',
    image: '/images/providers/michael-wolfe.jpg',
    name: 'Michael Wolfe',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-cherry-creek'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'emily-brookshire',
    image: '/images/providers/emily-brookshire.jpeg',
    name: 'Emily Brookshire',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-cherry-creek'],
    specialties: ['General Psychiatry'],
  },

  // Colorado Springs
  {
    id: 'sarah-gates',
    image: '/images/providers/sarah-gates.jpg',
    name: 'Sarah Gates',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'matthew-mills',
    image: '/images/providers/matthew-mills.jpg',
    name: 'Matthew Mills',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-colorado-springs'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'roselie-woodard',
    image: '/images/providers/roselie-woodard.jpg',
    name: 'Roselie Woodard',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'elaina-wooten',
    image: '/images/providers/elaina-wooten.jpg',
    name: 'Elaina Wooten',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'talmage-nielsen',
    image: '/images/providers/talmage-nielsen.jpg',
    name: 'Talmage Nielsen',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-colorado-springs'],
    specialties: ['General Psychiatry'],
  },

  // Parker
  {
    id: 'heath-canfield',
    name: 'Heath Canfield',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-parker'],
    specialties: ['General Psychiatry', 'Medication Management'],
  },

  // Lakewood
  {
    id: 'michaela-black',
    image: '/images/providers/michaela-black.webp',
    name: 'Michaela Black',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'kara-guglielmo',
    image: '/images/providers/kara-guglielmo.jpg',
    name: 'Kara Guglielmo',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'aimee-jackowski',
    image: '/images/providers/aimee-jackowski.png',
    name: 'Aimee Jackowski',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jordan-suchy',
    image: '/images/providers/jordan-suchy.jpg',
    name: 'Jordan Suchy',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-lakewood'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'angela-zimmerman',
    image: '/images/providers/angela-zimmerman.jpg',
    name: 'Angela Zimmerman',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'dustin-froehlich',
    image: '/images/providers/dustin-froehlich.jpg',
    name: 'Dustin Froehlich',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-lakewood'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },

  // ============================================
  // FLORIDA PROVIDERS
  // ============================================
  // Jacksonville
  {
    id: 'sherry-carter',
    image: '/images/providers/sherry-carter.jpg',
    name: 'Sherry Carter',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['fl-jacksonville'],
    specialties: ['Medication Management'],
  },
  {
    id: 'dianne-dekeyser',
    image: '/images/providers/dianne-dekeyser.jpg',
    name: 'Dianne Dekeyser',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['fl-jacksonville'],
    specialties: ['PTSD', 'OCD', 'General Psychiatry'],
    featured: true,
  },
  {
    id: 'cristina-lopez-seiler',
    image: '/images/providers/cristina-lopez-seiler.jpg',
    name: 'Cristina Lopez Seiler',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['fl-jacksonville'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-tyson',
    image: '/images/providers/david-tyson.jpg',
    name: 'David Tyson',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['fl-jacksonville'],
    specialties: ['General Psychiatry', 'Depression'],
  },

  // Orlando
  {
    id: 'joshua-lotfallah',
    image: '/images/providers/joshua-lotfallah.png',
    name: 'Joshua Lotfallah',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['fl-orlando'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'modupe-mcintosh',
    image: '/images/providers/modupe-mcintosh.png',
    name: "Modupe 'Mo' McIntosh",
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['fl-orlando'],
    specialties: ['Medication Management'],
  },

  // Lake Mary
  {
    id: 'tim-larson',
    image: '/images/providers/tim-larson.png',
    name: 'Tim Larson',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['fl-lake-mary'],
    specialties: ['General Psychiatry', 'Depression'],
  },

  // ============================================
  // GEORGIA PROVIDERS
  // ============================================
  // Alpharetta/Roswell
  {
    id: 'chandler-knight',
    name: 'Chandler Knight',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-alpharetta'],
    specialties: ['Medication Management', 'Depression'],
  },

  // Sandy Springs
  {
    id: 'bianca-mitchell',
    image: '/images/providers/bianca-mitchell.jpg',
    name: 'Bianca Mitchell',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'tiffany-talton',
    image: '/images/providers/tiffany-talton.jpg',
    name: 'Tiffany Talton',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'avis-gibson-holmes',
    image: '/images/providers/avis-gibson-holmes.jpg',
    name: 'Avis Gibson Holmes',
    credentials: 'PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'lacey-jeong',
    image: '/images/providers/lacey-jeong.jpg',
    name: 'Lacey Jeong',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ga-sandy-springs'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'nia-anderson',
    image: '/images/providers/nia-anderson.jpg',
    name: 'Nia I. Anderson',
    credentials: 'MSN, APRN, PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'paul-ferns',
    image: '/images/providers/paul-ferns.jpg',
    name: 'Paul Ferns',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ga-sandy-springs'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },

  // ============================================
  // NEVADA PROVIDERS
  // ============================================
  // Las Vegas
  {
    id: 'rowena-de-la-cruz',
    image: '/images/providers/rowena-de-la-cruz.jpg',
    name: 'Rowena De La Cruz',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['nv-las-vegas'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-gibson',
    image: '/images/providers/david-gibson.jpg',
    name: 'David Gibson',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['nv-las-vegas'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'tavi-thongdy',
    image: '/images/providers/tavi-thongdy.png',
    name: 'Tavi Thongdy',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['nv-las-vegas'],
    specialties: ['General Psychiatry'],
  },

  // Henderson
  {
    id: 'sterling-hahn',
    image: '/images/providers/sterling-hahn.png',
    name: 'Sterling Hahn',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['nv-henderson'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'jayison-mccorkle',
    image: '/images/providers/jayison-mccorkle.jpg',
    name: 'Jayison McCorkle',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['nv-henderson'],
    specialties: ['Medication Management'],
  },
  {
    id: 'anna-simonenko',
    image: '/images/providers/anna-simonenko.jpg',
    name: 'Anna Simonenko',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['nv-henderson'],
    specialties: ['Medication Management', 'Anxiety'],
  },

  // ============================================
  // TEXAS PROVIDERS
  // ============================================
  // Austin
  {
    id: 'jeffrey-twiss',
    image: '/images/providers/jeffrey-twiss.jpg',
    name: 'Jeffrey Twiss',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-austin'],
    specialties: ['TMS Therapy', 'Medication Management'],
  },
  {
    id: 'joseph-houchins',
    image: '/images/providers/joseph-houchins.jpg',
    name: 'Joseph Houchins',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-austin'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ryan-jones',
    image: '/images/providers/ryan-jones.jpg',
    name: 'Ryan Jones',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-austin'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },

  // San Antonio
  {
    id: 'carlos-aleman',
    image: '/images/providers/carlos-aleman.jpg',
    name: 'Carlos Aleman',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-san-antonio'],
    specialties: ['Medication Management'],
  },
  {
    id: 'lucy-flores',
    image: '/images/providers/lucy-flores.jpg',
    name: 'Lucy Flores',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-san-antonio'],
    specialties: ['Medication Management'],
  },
  {
    id: 'shadi-lavasani',
    image: '/images/providers/shadi-lavasani.jpg',
    name: 'Shadi Lavasani',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'erik-lundmark',
    image: '/images/providers/erik-lundmark.jpg',
    name: 'Erik Lundmark',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'andrew-norman',
    image: '/images/providers/andrew-norman.jpg',
    name: 'Andrew Norman',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'monique-reyes-lester',
    image: '/images/providers/monique-reyes-lester.jpg',
    name: 'Monique Reyes-Lester',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-san-antonio'],
    specialties: ['Medication Management', 'Anxiety'],
  },

  // Fort Worth
  {
    id: 'alexa-westbrook-quintanilla',
    image: '/images/providers/alexa-westbrook-quintanilla.jpg',
    name: 'Alexa Westbrook Quintanilla',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-fort-worth'],
    specialties: ['Medication Management', 'Depression'],
  },

  // Frisco
  {
    id: 'elise-griffin',
    image: '/images/providers/elise-griffin.jpg',
    name: 'Elise Griffin',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-frisco'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'alex-chung',
    image: '/images/providers/alex-chung.jpg',
    name: 'Alex Chung',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-frisco'],
    specialties: ['General Psychiatry', 'ADHD'],
  },
  {
    id: 'zahra-hassanally',
    image: '/images/providers/zahra-hassanally.jpg',
    name: 'Zahra Hassanally',
    credentials: 'MSN, APRN, PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-frisco'],
    specialties: ['Medication Management'],
  },
  {
    id: 'erica-canterbury',
    image: '/images/providers/erica-canterbury.jpg',
    name: 'Erica Canterbury',
    credentials: 'PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-frisco', 'tx-southlake'],
    specialties: ['Medication Management', 'Anxiety'],
  },

  // Sugar Land
  {
    id: 'kendra-nguyen',
    name: 'Kendra Nguyen',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-sugar-land'],
    specialties: ['Medication Management'],
  },
  {
    id: 'gary-robinson',
    name: 'Gary Robinson',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-sugar-land'],
    specialties: ['Medication Management'],
  },
  {
    id: 'muhammad-atif-akhtar',
    name: 'Muhammad Atif Akhtar',
    credentials: 'MD, CCRP',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-sugar-land'],
    specialties: ['General Psychiatry', 'Clinical Research'],
  },

  // ============================================
  // UTAH PROVIDERS
  // ============================================
  // Holladay
  {
    id: 'benjamin-shapiro',
    image: '/images/providers/benjamin-shapiro.jpg',
    name: 'Benjamin Shapiro',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ut-holladay'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'elizabeth-zeker',
    image: '/images/providers/elizabeth-zeker.jpg',
    name: 'Elizabeth Zeker',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-holladay'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ivan-mayor',
    image: '/images/providers/ivan-mayor.jpg',
    name: 'Ivan Mayor',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ut-holladay'],
    specialties: ['General Psychiatry', 'Ketamine Therapy'],
  },

  // Provo
  {
    id: 'jenna-hyer',
    image: '/images/providers/jenna-hyer.jpg',
    name: 'Jenna Hyer',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-provo'],
    specialties: ['Medication Management'],
  },
  {
    id: 'tanner-manwaring',
    image: '/images/providers/tanner-manwaring.jpg',
    name: 'Tanner Manwaring',
    credentials: 'DNP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-provo'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jenn-zeer',
    image: '/images/providers/jenn-zeer.jpg',
    name: 'Jenn Zeer',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-provo'],
    specialties: ['Medication Management'],
  },

  // Lehi
  {
    id: 'mah-mekolle',
    image: '/images/providers/mah-mekolle.jpg',
    name: 'Mah Mekolle',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-lehi'],
    specialties: ['Medication Management'],
  },
  {
    id: 'pamela-ziel',
    image: '/images/providers/pamela-ziel.jpg',
    name: 'Pamela Ziel',
    credentials: 'DNP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-lehi'],
    specialties: ['Medication Management'],
  },

  // Layton
  {
    id: 'brenda-galvez',
    image: '/images/providers/brenda-galvez.jpg',
    name: 'Brenda Galvez',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management'],
  },
  {
    id: 'bryce-gosney',
    image: '/images/providers/bryce-gosney.jpg',
    name: 'Bryce Gosney',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'sarah-samsky',
    image: '/images/providers/sarah-samsky.jpg',
    name: 'Sarah Samsky',
    credentials: 'DNP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management'],
  },
  {
    id: 'anthony-vita',
    image: '/images/providers/anthony-vita.jpg',
    name: 'Anthony Vita',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ut-layton'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },

  // ============================================
  // VIRGINIA PROVIDERS
  // ============================================
  // Fairfax
  {
    id: 'vanessa-freeman',
    image: '/images/providers/vanessa-freeman.jpg',
    name: 'Vanessa Freeman',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['va-fairfax'],
    specialties: ['General Psychiatry', 'Adult Psychiatry'],
  },
  {
    id: 'lan-anh-tran',
    image: '/images/providers/lan-anh-tran.jpg',
    name: 'Lan-Anh Tran',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['va-fairfax', 'co-parker'],
    specialties: ['General Psychiatry', 'Adolescent Psychiatry'],
  },
];

// Helper functions
export const getProviderById = (id: string): Provider | undefined => {
  return providers.find((provider) => provider.id === id);
};

export const getProvidersByLocation = (locationId: string): Provider[] => {
  return providers.filter((provider) => provider.locationIds.includes(locationId));
};

export const getProvidersByState = (stateId: string): Provider[] => {
  return providers.filter((provider) =>
    provider.locationIds.some((locId) => locId.startsWith(stateId.substring(0, 2)))
  );
};

export const getFeaturedProviders = (): Provider[] => {
  return providers.filter((provider) => provider.featured);
};

export const getPsychiatrists = (): Provider[] => {
  return providers.filter((provider) => provider.role === 'psychiatrist');
};

export const getNursePractitioners = (): Provider[] => {
  return providers.filter((provider) => provider.role === 'nurse-practitioner');
};

export const getProvidersCount = (): number => providers.length;

export const getPsychiatristsCount = (): number => getPsychiatrists().length;

export const generateProviderSlug = (provider: Provider): string => {
  return provider.id;
};
