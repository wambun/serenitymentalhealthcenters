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
    name: 'Sarah Buttles',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Depression', 'Anxiety'],
  },
  {
    id: 'aaron-dahl',
    name: 'Aaron Dahl',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-gilbert'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'sarah-moody',
    name: 'Sarah Moody',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Anxiety', 'ADHD'],
  },
  {
    id: 'ryan-wandler',
    name: 'Ryan Wandler',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-gilbert'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'brad-zehring',
    name: 'Brad Zehring',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-gilbert'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'mikayla-butkus',
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
    name: 'Aaron Clay',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-chandler'],
    specialties: ['General Psychiatry', 'Depression', 'Anxiety'],
  },
  {
    id: 'jeffrey-ely',
    name: 'Jeffrey Ely',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-gallegos',
    name: 'David Gallegos',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management', 'ADHD'],
  },
  {
    id: 'david-hauser',
    name: 'David Hauser',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-chandler'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'michelle-reijonen',
    name: 'Michelle Reijonen',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-chandler'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'elizabeth-rotella',
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
    name: 'Winona Belmonte',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-desert-ridge'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'kayla-cartwright',
    name: 'Kayla Cartwright',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'yong-lee',
    name: 'Yong Lee',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-desert-ridge'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'melissa-leuzzi',
    name: 'Melissa Leuzzi',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'lauren-marienau',
    name: 'Lauren Marienau',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'angela-oakley',
    name: 'Angela Oakley',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ekus-onosode',
    name: 'Ekuevugbe (Ekus) Onosode',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-desert-ridge'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'elias-ruiloba',
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
    name: 'Nathaniel Brooks',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'tara-leedham',
    name: 'Tara Leedham',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'marcus-nielson',
    name: 'Marcus Nielson',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'alexandria-penner',
    name: 'Alexandria Penner',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'laura-skiba',
    name: 'Laura Skiba',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'deborah-stegner',
    name: 'Deborah Stegner',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['az-biltmore'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'naomi-park',
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
    name: 'Marci Bastien',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['az-biltmore'],
    specialties: ['Medication Management'],
  },
  {
    id: 'christian-gerwe',
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
    name: 'Austin Alderton',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management'],
  },
  {
    id: 'nico-bohm',
    name: 'Nico Bohm',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jennifer-french',
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
    name: 'Johnny Patterson',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-cherry-creek'],
    specialties: ['Medication Management', 'Depression'],
  },
  {
    id: 'michael-wolfe',
    name: 'Michael Wolfe',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-cherry-creek'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'emily-brookshire',
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
    name: 'Sarah Gates',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'matthew-mills',
    name: 'Matthew Mills',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-colorado-springs'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'roselie-woodard',
    name: 'Roselie Woodard',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'elaina-wooten',
    name: 'Elaina Wooten',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-colorado-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'talmage-nielsen',
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
    name: 'Michaela Black',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'kara-guglielmo',
    name: 'Kara Guglielmo',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'aimee-jackowski',
    name: 'Aimee Jackowski',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jordan-suchy',
    name: 'Jordan Suchy',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['co-lakewood'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'angela-zimmerman',
    name: 'Angela Zimmerman',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['co-lakewood'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'dustin-froehlich',
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
    name: 'Sherry Carter',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['fl-jacksonville'],
    specialties: ['Medication Management'],
  },
  {
    id: 'dianne-dekeyser',
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
    name: 'Cristina Lopez Seiler',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['fl-jacksonville'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-tyson',
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
    name: 'Joshua Lotfallah',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['fl-orlando'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'modupe-mcintosh',
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
    name: 'Bianca Mitchell',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'tiffany-talton',
    name: 'Tiffany Talton',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'avis-gibson-holmes',
    name: 'Avis Gibson Holmes',
    credentials: 'PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'lacey-jeong',
    name: 'Lacey Jeong',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ga-sandy-springs'],
    specialties: ['General Psychiatry', 'Mood Disorders'],
  },
  {
    id: 'nia-anderson',
    name: 'Nia I. Anderson',
    credentials: 'MSN, APRN, PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ga-sandy-springs'],
    specialties: ['Medication Management'],
  },
  {
    id: 'paul-ferns',
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
    name: 'Rowena De La Cruz',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['nv-las-vegas'],
    specialties: ['Medication Management'],
  },
  {
    id: 'david-gibson',
    name: 'David Gibson',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['nv-las-vegas'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'tavi-thongdy',
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
    name: 'Sterling Hahn',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['nv-henderson'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'jayison-mccorkle',
    name: 'Jayison McCorkle',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['nv-henderson'],
    specialties: ['Medication Management'],
  },
  {
    id: 'anna-simonenko',
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
    name: 'Jeffrey Twiss',
    credentials: 'NP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-austin'],
    specialties: ['TMS Therapy', 'Medication Management'],
  },
  {
    id: 'joseph-houchins',
    name: 'Joseph Houchins',
    credentials: 'DNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-austin'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ryan-jones',
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
    name: 'Carlos Aleman',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-san-antonio'],
    specialties: ['Medication Management'],
  },
  {
    id: 'lucy-flores',
    name: 'Lucy Flores',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-san-antonio'],
    specialties: ['Medication Management'],
  },
  {
    id: 'shadi-lavasani',
    name: 'Shadi Lavasani',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'erik-lundmark',
    name: 'Erik Lundmark',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry', 'Depression'],
  },
  {
    id: 'andrew-norman',
    name: 'Andrew Norman',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-san-antonio'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'monique-reyes-lester',
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
    name: 'Elise Griffin',
    credentials: 'DO',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-frisco'],
    specialties: ['General Psychiatry'],
  },
  {
    id: 'alex-chung',
    name: 'Alex Chung',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['tx-frisco'],
    specialties: ['General Psychiatry', 'ADHD'],
  },
  {
    id: 'zahra-hassanally',
    name: 'Zahra Hassanally',
    credentials: 'MSN, APRN, PMHNP-BC',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['tx-frisco'],
    specialties: ['Medication Management'],
  },
  {
    id: 'erica-canterbury',
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
    name: 'Benjamin Shapiro',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['ut-holladay'],
    specialties: ['General Psychiatry', 'TMS Therapy'],
  },
  {
    id: 'elizabeth-zeker',
    name: 'Elizabeth Zeker',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-holladay'],
    specialties: ['Medication Management'],
  },
  {
    id: 'ivan-mayor',
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
    name: 'Jenna Hyer',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-provo'],
    specialties: ['Medication Management'],
  },
  {
    id: 'tanner-manwaring',
    name: 'Tanner Manwaring',
    credentials: 'DNP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-provo'],
    specialties: ['Medication Management'],
  },
  {
    id: 'jenn-zeer',
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
    name: 'Mah Mekolle',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-lehi'],
    specialties: ['Medication Management'],
  },
  {
    id: 'pamela-ziel',
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
    name: 'Brenda Galvez',
    credentials: 'NP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management'],
  },
  {
    id: 'bryce-gosney',
    name: 'Bryce Gosney',
    credentials: 'PMHNP',
    title: 'Psychiatric Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management', 'Anxiety'],
  },
  {
    id: 'sarah-samsky',
    name: 'Sarah Samsky',
    credentials: 'DNP',
    title: 'Nurse Practitioner',
    role: 'nurse-practitioner',
    locationIds: ['ut-layton'],
    specialties: ['Medication Management'],
  },
  {
    id: 'anthony-vita',
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
    name: 'Vanessa Freeman',
    credentials: 'MD',
    title: 'Psychiatrist',
    role: 'psychiatrist',
    locationIds: ['va-fairfax'],
    specialties: ['General Psychiatry', 'Adult Psychiatry'],
  },
  {
    id: 'lan-anh-tran',
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
