// Shared data for the Still Water Yoga demo site. Everything is fictional.

export const yogaStudio = {
  name: 'Still Water Yoga',
  phone: '+1 (555) 014-3377',
  phoneHref: 'tel:+15550143377',
  email: 'hello@stillwateryoga.example',
  address: ['14 Alder Lane', 'Millbrook, OR 97400'],
  intro: { name: 'Two weeks unlimited', price: 35, days: 14 }
}

export const yogaHours = [
  { days: 'Monday – Friday', hours: '6:30 am – 8:30 pm' },
  { days: 'Saturday', hours: '8:00 am – 2:00 pm' },
  { days: 'Sunday', hours: '9:00 am – 1:00 pm' }
]

// ---------- Class types ----------

export type YogaLevel = 'All levels' | 'Beginner' | 'Intermediate'
export const yogaLevels: YogaLevel[] = ['All levels', 'Beginner', 'Intermediate']

export type YogaTypeId = 'vinyasa' | 'hatha' | 'yin' | 'restorative' | 'mat-pilates' | 'reformer'

export interface YogaClassType {
  id: YogaTypeId
  name: string
  short: string
  description: string
  intensity: 1 | 2 | 3
  props: string
  image: string
  imagePosition: string
  imageAlt: string
}

export const yogaClassTypes: YogaClassType[] = [
  {
    id: 'vinyasa',
    name: 'Vinyasa Flow',
    short: 'Breath-led movement',
    description:
      'A flowing class where each movement follows a breath. Expect standing sequences, a little core work and a long final rest. Warm, steady and never rushed.',
    intensity: 3,
    props: 'Mat, block, strap',
    image: '/yoga/teacher-priya.jpg',
    imagePosition: '30% 50%',
    imageAlt: 'A woman in a low lunge on a coral mat in front of a mural'
  },
  {
    id: 'hatha',
    name: 'Gentle Hatha',
    short: 'Slow and grounded',
    description:
      'Classic postures held for a few breaths, with plenty of time to settle into each one. A good place to learn the basics or to practise without pressure.',
    intensity: 2,
    props: 'Mat, blocks, blanket',
    image: '/yoga/teacher-maya.jpg',
    imagePosition: '30% 40%',
    imageAlt: 'A smiling woman sitting on a cork yoga mat'
  },
  {
    id: 'yin',
    name: 'Yin Yoga',
    short: 'Long, quiet holds',
    description:
      'Floor-based poses held for three to five minutes to release the hips, back and shoulders. Lights are low. You will leave feeling a bit taller.',
    intensity: 1,
    props: 'Bolster, blocks, blanket',
    image: '/yoga/teacher-tomas.jpg',
    imagePosition: '60% 50%',
    imageAlt: 'A man folding over a cushion in a bright room with tall windows'
  },
  {
    id: 'restorative',
    name: 'Restorative',
    short: 'Rest as practice',
    description:
      'Four or five supported poses, a lot of bolsters and absolutely no effort. Built for tired bodies, busy weeks and anyone recovering from illness or injury.',
    intensity: 1,
    props: 'Bolsters, blankets, eye pillow',
    image: '/yoga/hero.jpg',
    imagePosition: '40% 60%',
    imageAlt: 'A woman in a deep backbend on a mat beside a leafy plant'
  },
  {
    id: 'mat-pilates',
    name: 'Mat Pilates',
    short: 'Core and control',
    description:
      'Precise, low-impact exercises for the deep core, hips and spine. Small movements, big effect. Small groups so the teacher can correct your form.',
    intensity: 2,
    props: 'Mat, small ball, band',
    image: '/yoga/pilates-arches.jpg',
    imagePosition: '50% 40%',
    imageAlt: 'A woman balancing on a reformer in front of arched mirrors'
  },
  {
    id: 'reformer',
    name: 'Reformer Pilates',
    short: 'Spring-based strength',
    description:
      'Our eight reformers add spring resistance to classic Pilates. Strong but kind to the joints. Capped at eight people, booking is required.',
    intensity: 3,
    props: 'Reformer (provided), grip socks',
    image: '/yoga/reformer.jpg',
    imagePosition: '40% 40%',
    imageAlt: 'A woman lifting her legs on a pilates reformer in a warm, neutral studio'
  }
]

export const yogaTypeById = (id: YogaTypeId): YogaClassType => yogaClassTypes.find((t) => t.id === id)!

// ---------- Teachers ----------

export interface YogaTeacher {
  id: string
  name: string
  role: string
  specialties: string[]
  bio: string
  photo: string
  position: string
  alt: string
}

export const yogaTeachers: YogaTeacher[] = [
  {
    id: 'maya',
    name: 'Maya Laurent',
    role: 'Founder · Hatha and Yin',
    specialties: ['Gentle Hatha', 'Yin Yoga', 'Beginners'],
    bio: 'Maya opened Still Water in 2016 after ten years in hospital administration. She teaches slowly, explains everything and has never once said "just relax".',
    photo: '/yoga/teacher-maya.jpg',
    position: '30% 25%',
    alt: 'Portrait of Maya Laurent smiling on a yoga mat'
  },
  {
    id: 'elena',
    name: 'Elena Ruiz',
    role: 'Vinyasa and Mat Pilates',
    specialties: ['Vinyasa Flow', 'Mat Pilates', 'Back care'],
    bio: 'A former dancer, Elena builds classes around smooth transitions and honest alignment. Her Saturday flow is the studio favourite.',
    photo: '/yoga/teacher-elena.jpg',
    position: '55% 35%',
    alt: 'Elena Ruiz sitting in a seated twist on her mat'
  },
  {
    id: 'tomas',
    name: 'Tomas Berg',
    role: 'Restorative and Yin',
    specialties: ['Restorative', 'Yin Yoga', 'Stress and sleep'],
    bio: 'Tomas came to yoga for his sore back and stayed for the stillness. His evening classes end with a long rest and an eye pillow.',
    photo: '/yoga/teacher-tomas.jpg',
    position: '65% 60%',
    alt: 'Tomas Berg folding over a cushion by a bright window'
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Reformer Pilates and Vinyasa',
    specialties: ['Reformer Pilates', 'Vinyasa Flow', 'Strength'],
    bio: 'Priya is our Pilates lead and a certified reformer instructor. She is great with first-timers, and with people who think they are not flexible enough.',
    photo: '/yoga/teacher-priya.jpg',
    position: '38% 40%',
    alt: 'Priya Nair in a low lunge on a coral yoga mat'
  }
]

export const yogaTeacherById = (id: string): YogaTeacher => yogaTeachers.find((t) => t.id === id)!

// ---------- Weekly timetable ----------

export const yogaDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

export interface YogaClass {
  id: string
  day: number // 0 = Monday ... 6 = Sunday
  start: string // 24h "HH:MM"
  minutes: number
  type: YogaTypeId
  level: YogaLevel
  teacher: string // teacher id
}

export const yogaSchedule: YogaClass[] = [
  // Monday
  { id: 'mon-1', day: 0, start: '07:00', minutes: 60, type: 'vinyasa', level: 'All levels', teacher: 'elena' },
  { id: 'mon-2', day: 0, start: '12:15', minutes: 45, type: 'mat-pilates', level: 'Beginner', teacher: 'elena' },
  { id: 'mon-3', day: 0, start: '18:00', minutes: 60, type: 'reformer', level: 'Intermediate', teacher: 'priya' },
  { id: 'mon-4', day: 0, start: '19:30', minutes: 75, type: 'yin', level: 'All levels', teacher: 'maya' },
  // Tuesday
  { id: 'tue-1', day: 1, start: '06:45', minutes: 60, type: 'hatha', level: 'Beginner', teacher: 'maya' },
  { id: 'tue-2', day: 1, start: '09:30', minutes: 55, type: 'reformer', level: 'Beginner', teacher: 'priya' },
  { id: 'tue-3', day: 1, start: '17:30', minutes: 60, type: 'vinyasa', level: 'Intermediate', teacher: 'priya' },
  { id: 'tue-4', day: 1, start: '19:00', minutes: 60, type: 'restorative', level: 'All levels', teacher: 'tomas' },
  // Wednesday
  { id: 'wed-1', day: 2, start: '07:00', minutes: 60, type: 'vinyasa', level: 'All levels', teacher: 'priya' },
  { id: 'wed-2', day: 2, start: '12:15', minutes: 45, type: 'hatha', level: 'All levels', teacher: 'maya' },
  { id: 'wed-3', day: 2, start: '18:00', minutes: 50, type: 'mat-pilates', level: 'Intermediate', teacher: 'elena' },
  { id: 'wed-4', day: 2, start: '19:15', minutes: 75, type: 'yin', level: 'All levels', teacher: 'tomas' },
  // Thursday
  { id: 'thu-1', day: 3, start: '06:45', minutes: 60, type: 'hatha', level: 'All levels', teacher: 'maya' },
  { id: 'thu-2', day: 3, start: '09:30', minutes: 55, type: 'reformer', level: 'Intermediate', teacher: 'priya' },
  { id: 'thu-3', day: 3, start: '17:30', minutes: 60, type: 'vinyasa', level: 'Beginner', teacher: 'elena' },
  { id: 'thu-4', day: 3, start: '19:00', minutes: 60, type: 'restorative', level: 'All levels', teacher: 'tomas' },
  // Friday
  { id: 'fri-1', day: 4, start: '07:00', minutes: 60, type: 'vinyasa', level: 'Intermediate', teacher: 'elena' },
  { id: 'fri-2', day: 4, start: '12:15', minutes: 45, type: 'mat-pilates', level: 'All levels', teacher: 'elena' },
  { id: 'fri-3', day: 4, start: '17:30', minutes: 60, type: 'reformer', level: 'Beginner', teacher: 'priya' },
  { id: 'fri-4', day: 4, start: '19:00', minutes: 75, type: 'yin', level: 'All levels', teacher: 'maya' },
  // Saturday
  { id: 'sat-1', day: 5, start: '08:30', minutes: 75, type: 'vinyasa', level: 'All levels', teacher: 'elena' },
  { id: 'sat-2', day: 5, start: '10:00', minutes: 55, type: 'reformer', level: 'All levels', teacher: 'priya' },
  { id: 'sat-3', day: 5, start: '11:30', minutes: 60, type: 'hatha', level: 'Beginner', teacher: 'maya' },
  // Sunday
  { id: 'sun-1', day: 6, start: '09:30', minutes: 60, type: 'hatha', level: 'All levels', teacher: 'maya' },
  { id: 'sun-2', day: 6, start: '11:00', minutes: 75, type: 'restorative', level: 'All levels', teacher: 'tomas' }
]

/** "07:00" -> "7:00 am" */
export function yogaFormatTime(start: string): string {
  const [h = 0, m = 0] = start.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, '0')} ${suffix}`
}

/** Today's index, 0 = Monday. */
export function yogaTodayIndex(date: Date = new Date()): number {
  return (date.getDay() + 6) % 7
}

// ---------- Pricing ----------

export interface YogaPlan {
  id: string
  name: string
  price: number
  unit: string
  blurb: string
  features: string[]
  highlight?: boolean
  badge?: string
}

export const yogaDropIn = [
  { name: 'Drop-in class', price: 22, note: 'Yoga or Mat Pilates, any time' },
  { name: 'Reformer drop-in', price: 32, note: 'Booking required, 8 spots' },
  { name: '5-class pack', price: 95, note: '$19 a class, valid 3 months' },
  { name: '10-class pack', price: 175, note: '$17.50 a class, valid 5 months' },
  { name: '20-class pack', price: 320, note: '$16 a class, valid 9 months' }
]

export const yogaMemberships: YogaPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: 69,
    unit: 'per month',
    blurb: 'Four classes a month for a steady weekly habit.',
    features: ['4 yoga or Mat Pilates classes', 'Roll over 1 unused class', 'Mat and prop hire included', '10% off workshops']
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: 119,
    unit: 'per month',
    blurb: 'Every yoga and Mat Pilates class on the timetable.',
    features: [
      'Unlimited yoga and Mat Pilates',
      '2 reformer classes a month',
      'Bring a friend once a month',
      'Pause for up to 2 months a year',
      '15% off workshops'
    ],
    highlight: true,
    badge: 'Most popular'
  },
  {
    id: 'unlimited-plus',
    name: 'Unlimited + Reformer',
    price: 169,
    unit: 'per month',
    blurb: 'Everything, including unlimited reformer classes.',
    features: [
      'Unlimited yoga, Mat and Reformer',
      'Priority reformer booking',
      'Bring a friend twice a month',
      'One private session per quarter',
      '20% off workshops'
    ]
  }
]

export const yogaIncluded = [
  'Mat, blocks, straps and blankets for every class',
  'Reformer grip socks to borrow, or buy a pair for $12',
  'Changing rooms with lockers and two showers',
  'Filtered water and herbal tea after class',
  'Free first-visit orientation, 15 minutes before class',
  'Online booking and cancellation up to 4 hours before'
]

export interface YogaFaq {
  q: string
  a: string
}

export const yogaFaqs: YogaFaq[] = [
  {
    q: 'I have never done yoga. Where should I start?',
    a: 'Come to a Gentle Hatha or a Beginner-level class. Arrive ten minutes early, tell the teacher it is your first time and they will look after you. Our intro offer covers two weeks of any class, so you can try a few styles.'
  },
  {
    q: 'How does the intro offer work?',
    a: 'It costs $35 and gives you 14 days of unlimited yoga and Mat Pilates, starting from your first class. It is for people who have not been to Still Water before. Reformer classes can be added for $15 each.'
  },
  {
    q: 'Can I cancel or freeze my membership?',
    a: 'Yes. Memberships renew monthly and can be cancelled with 7 days notice. Unlimited members can pause for up to two months a year, no fee, if they are travelling or recovering.'
  },
  {
    q: 'What is your late-cancellation policy?',
    a: 'You can cancel a booking free of charge up to 4 hours before class. After that the class is deducted from your pack or membership, or $10 is charged for drop-ins. Reformer classes need 12 hours notice because of the waitlist.'
  },
  {
    q: 'Do you offer student, senior or community rates?',
    a: 'Students, seniors (65+) and healthcare workers get 15% off packs and memberships with ID. We also hold two pay-what-you-can community classes each month. Ask at the desk or send us a message.'
  },
  {
    q: 'Is the studio suitable if I am pregnant or have an injury?',
    a: 'Often, yes, with a few adjustments. Please tell the teacher before class. For the first trimester onwards we recommend Gentle Hatha or Restorative, and we are happy to talk through your situation by phone first.'
  }
]

// ---------- Testimonials ----------

export const yogaTestimonials = [
  {
    quote:
      'I walked in with a stiff neck and zero flexibility. Three months later I sleep better and I actually look forward to Tuesday mornings.',
    name: 'Hannah K.',
    detail: 'Member since 2023'
  },
  {
    quote:
      'The reformer classes are small enough that Priya notices every detail. My lower back has never felt this strong.',
    name: 'Daniel R.',
    detail: 'Reformer regular'
  },
  {
    quote:
      'Nobody here cares what you wear or how far you can bend. It is the first studio where I did not feel like a beginner.',
    name: 'Aisha M.',
    detail: 'Joined with the intro offer'
  }
]

export const yogaNav = [
  { to: '/yoga', label: 'Home' },
  { to: '/yoga/classes', label: 'Classes' },
  { to: '/yoga/pricing', label: 'Pricing' },
  { to: '/yoga/about', label: 'About' },
  { to: '/yoga/contact', label: 'Contact' }
]

export const yogaInterests = [
  { value: 'intro', label: 'The intro offer' },
  { value: 'class', label: 'A specific class' },
  { value: 'private', label: 'A private session' },
  { value: 'other', label: 'Something else' }
]
