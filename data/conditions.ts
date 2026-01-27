export interface Condition {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  treatments: string[];
  image: string;
  icon?: string;
}

export const conditions: Condition[] = [
  {
    id: 'depression',
    title: 'Depression',
    shortDescription:
      'Persistent feelings of sadness, hopelessness, and loss of interest',
    fullDescription:
      'Depression is more than just feeling sad. It is a serious mental health condition that affects how you feel, think, and handle daily activities. Symptoms must be present for at least two weeks for a diagnosis. At Serenity, we offer multiple evidence-based treatments to help you overcome depression and regain your quality of life.',
    symptoms: [
      'Persistent sad, anxious, or empty mood',
      'Feelings of hopelessness or pessimism',
      'Irritability and restlessness',
      'Loss of interest in hobbies and activities',
      'Decreased energy and fatigue',
      'Difficulty concentrating and making decisions',
      'Sleep disturbances',
      'Appetite and weight changes',
      'Thoughts of death or suicide',
    ],
    treatments: ['tms-therapy', 'ketamine-therapy', 'medication-management'],
    image: '/images/conditions/depression.jpg',
    icon: 'cloud-rain',
  },
  {
    id: 'anxiety',
    title: 'Anxiety',
    shortDescription:
      'Feelings of fear, tension, and worry that affect daily life',
    fullDescription:
      'Anxiety disorders involve more than temporary worry or fear. For people with anxiety disorders, the anxiety does not go away and can get worse over time, interfering with daily activities. Our team at Serenity provides comprehensive treatment approaches to help you manage anxiety and live a fuller life.',
    symptoms: [
      'Excessive worry and fear',
      'Restlessness and feeling on edge',
      'Difficulty concentrating',
      'Sleep problems',
      'Muscle tension',
      'Rapid heartbeat',
      'Sweating and trembling',
      'Avoidance of anxiety triggers',
    ],
    treatments: ['ketamine-therapy', 'medication-management', 'structured-gratitude'],
    image: '/images/conditions/anxiety.jpg',
    icon: 'activity',
  },
  {
    id: 'bipolar-disorder',
    title: 'Bipolar Disorder',
    shortDescription:
      'Extreme mood fluctuations from highs to lows that can last months',
    fullDescription:
      'Bipolar disorder causes unusual shifts in mood, energy, activity levels, and concentration. These shifts can affect your ability to carry out day-to-day tasks. Our psychiatrists specialize in diagnosing and treating bipolar disorder with personalized medication management and supportive care.',
    symptoms: [
      'Manic episodes with elevated mood',
      'Increased energy and activity',
      'Racing thoughts and rapid speech',
      'Decreased need for sleep',
      'Depressive episodes with low mood',
      'Fatigue and lack of energy',
      'Difficulty concentrating',
      'Changes in appetite and sleep',
    ],
    treatments: ['medication-management', 'ketamine-therapy'],
    image: '/images/conditions/bipolar.jpg',
    icon: 'trending-up-down',
  },
  {
    id: 'ptsd',
    title: 'PTSD',
    shortDescription:
      'Lasting effects from traumatic events causing difficulty sleeping and flashbacks',
    fullDescription:
      'Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event. Serenity offers specialized treatments including ketamine therapy for PTSD.',
    symptoms: [
      'Intrusive memories and flashbacks',
      'Nightmares about the trauma',
      'Severe emotional distress',
      'Avoidance of trauma reminders',
      'Negative changes in thinking and mood',
      'Hypervigilance and being easily startled',
      'Difficulty sleeping',
      'Angry outbursts',
    ],
    treatments: ['ketamine-therapy', 'medication-management'],
    image: '/images/conditions/ptsd.jpg',
    icon: 'shield-alert',
  },
  {
    id: 'ocd',
    title: 'OCD',
    shortDescription:
      'Intrusive thoughts and compulsive behaviors that interfere with daily life',
    fullDescription:
      'Obsessive-Compulsive Disorder (OCD) features a pattern of unwanted thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress. Our treatment approaches can help reduce symptoms and improve quality of life.',
    symptoms: [
      'Unwanted intrusive thoughts',
      'Fear of contamination or dirt',
      'Need for symmetry and order',
      'Aggressive or horrific thoughts',
      'Compulsive cleaning or washing',
      'Checking behaviors',
      'Counting or arranging rituals',
      'Need for reassurance',
    ],
    treatments: ['medication-management', 'tms-therapy'],
    image: '/images/conditions/ocd.jpg',
    icon: 'repeat',
  },
  {
    id: 'adhd',
    title: 'ADHD',
    shortDescription:
      'Difficulty focusing, disorganization, and impulsivity that can be managed',
    fullDescription:
      'Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. While often diagnosed in childhood, ADHD can persist into adulthood. Our comprehensive ADHD program provides testing, diagnosis, and ongoing management.',
    symptoms: [
      'Difficulty sustaining attention',
      'Easily distracted',
      'Trouble organizing tasks',
      'Forgetfulness in daily activities',
      'Fidgeting and restlessness',
      'Difficulty waiting turn',
      'Interrupting others',
      'Impulsive decision making',
    ],
    treatments: ['adhd-management', 'medication-management'],
    image: '/images/conditions/adhd.jpg',
    icon: 'zap',
  },
];

export const getConditionById = (id: string): Condition | undefined => {
  return conditions.find((condition) => condition.id === id);
};

export const getConditionBySlug = (slug: string): Condition | undefined => {
  return conditions.find((condition) => condition.id === slug);
};
