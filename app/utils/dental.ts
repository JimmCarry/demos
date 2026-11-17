// Shared content for the Linden Dental Studio demo (fictional clinic).

export const dentalContact = {
  name: 'Linden Dental Studio',
  street: '42 Linden Row',
  town: 'Alderbrook, OR 97499',
  phone: '+1 (555) 014-3380',
  phoneHref: 'tel:+15550143380',
  emergencyPhone: '+1 (555) 014-3399',
  emergencyHref: 'tel:+15550143399',
  email: 'hello@lindendental.example'
}

export const dentalNav = [
  { to: '/dental', label: 'Home' },
  { to: '/dental/treatments', label: 'Treatments' },
  { to: '/dental/team', label: 'Our team' },
  { to: '/dental/contact', label: 'Contact' }
]

export const dentalHours = [
  { day: 'Monday – Thursday', time: '8:00 am – 6:00 pm' },
  { day: 'Friday', time: '8:00 am – 4:00 pm' },
  { day: 'Saturday', time: '9:00 am – 1:00 pm' },
  { day: 'Sunday', time: 'Closed (emergency line only)' }
]

export interface DentalTreatmentItem {
  name: string
  detail: string
  price: string
}

export interface DentalTreatmentGroup {
  id: string
  icon: string
  title: string
  intro: string
  items: DentalTreatmentItem[]
}

export const dentalTreatmentGroups: DentalTreatmentGroup[] = [
  {
    id: 'general',
    icon: 'shield',
    title: 'General & preventive',
    intro:
      'Most dental problems are easy to deal with when they are small. Regular check-ups and cleanings keep it that way, and fillings are done with numbing gel first and the gentlest possible drilling.',
    items: [
      { name: 'New patient exam & X-rays', detail: 'Full exam, digital X-rays, oral cancer screening and a written plan. 45 min.', price: 'from $95' },
      { name: 'Routine check-up', detail: 'Exam, bite check and a polish. 30 min, every 6 to 12 months.', price: 'from $65' },
      { name: 'Hygiene clean (scale & polish)', detail: 'Plaque and tartar removal with a gentle ultrasonic scaler. 45 min.', price: 'from $110' },
      { name: 'Tooth-coloured filling', detail: 'Composite resin matched to your tooth shade, one visit.', price: 'from $140' },
      { name: 'Root canal treatment', detail: 'Saves a badly infected tooth. Usually two visits, with sedation options.', price: 'from $690' },
      { name: 'Children’s check-up', detail: 'For ages 3 to 12. Short, friendly and free of lectures.', price: 'from $45' }
    ]
  },
  {
    id: 'cosmetic',
    icon: 'sparkle',
    title: 'Cosmetic',
    intro:
      'Small changes can make a big difference. We show you a preview before anything is done, and we will tell you honestly when a simpler option works just as well.',
    items: [
      { name: 'Professional whitening', detail: 'In-clinic session plus take-home trays. Up to 8 shades lighter.', price: 'from $349' },
      { name: 'Composite bonding', detail: 'Repairs chips and closes small gaps in a single visit, per tooth.', price: 'from $210' },
      { name: 'Porcelain veneers', detail: 'Thin, natural-looking shells, made by our partner lab in about 3 weeks, per tooth.', price: 'from $950' },
      { name: 'Crowns', detail: 'Ceramic crown that protects a weak or heavily filled tooth, per tooth.', price: 'from $890' }
    ]
  },
  {
    id: 'ortho',
    icon: 'smile',
    title: 'Orthodontics',
    intro:
      'Straighter teeth are easier to clean and more comfortable to bite with. Both children and adults are welcome, and monthly payment plans are available.',
    items: [
      { name: 'Clear aligners', detail: 'Removable, nearly invisible trays. Typically 6 to 14 months. Includes retainers.', price: 'from $2,900' },
      { name: 'Traditional braces', detail: 'Metal or ceramic brackets, adjusted every 6 weeks. Typically 12 to 24 months.', price: 'from $3,400' },
      { name: 'Retainers', detail: 'Fixed or removable, to keep your result for good.', price: 'from $180' },
      { name: 'Orthodontic consultation', detail: 'Scan, photos and a clear treatment plan. Fee credited if you proceed.', price: 'from $60' }
    ]
  },
  {
    id: 'emergency',
    icon: 'bolt',
    title: 'Emergency',
    intro:
      'Toothache, a knocked-out tooth or a broken filling will not wait for a convenient time. We keep slots free every day for people in pain, and we answer the emergency line outside opening hours.',
    items: [
      { name: 'Same-day emergency visit', detail: 'Pain relief, exam and X-ray. Seen the day you call whenever possible.', price: 'from $95' },
      { name: 'Tooth extraction', detail: 'Simple extraction with local anaesthetic. Surgical extractions quoted after the exam.', price: 'from $180' },
      { name: 'Broken tooth or filling repair', detail: 'Temporary or permanent repair, depending on the damage.', price: 'from $120' }
    ]
  }
]

export const dentalFaqs = [
  {
    q: 'Does it hurt?',
    a: 'We aim for no. We use numbing gel before every injection, go slowly, and you can raise a hand to pause at any moment. If you are very anxious, ask about nitrous oxide (laughing gas) or a quiet first visit where we only talk and look around.'
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes. We work with most major PPO plans and will send the claim for you. We tell you what your plan is likely to cover before any treatment starts. If you have no insurance, our Linden Plan is $29 a month and includes two check-ups, two cleans and annual X-rays.'
  },
  {
    q: 'How often should I come for a check-up?',
    a: 'Every six months suits most people. If your gums are healthy and you have had no problems for years, we may suggest every twelve months. Children and people with gum disease benefit from shorter gaps.'
  },
  {
    q: 'Can I pay in instalments?',
    a: 'For treatment over $500 we offer interest-free plans over 6 or 12 months, and longer plans for orthodontics. Just ask at reception before you start.'
  },
  {
    q: 'What if I need to cancel?',
    a: 'Please give us 24 hours notice by phone or email so we can offer the slot to someone else. Life happens, so we do not charge a fee for a first late cancellation.'
  },
  {
    q: 'Do you see children?',
    a: 'Yes, from age 3. Dr. Larsen runs a short, relaxed children’s check-up with no drills and a sticker at the end. Younger children are welcome to sit on a parent’s lap in the chair.'
  }
]

export interface DentalTeamMember {
  name: string
  role: string
  bio: string
  languages: string
  photo: string
  alt: string
  position: string
}

export const dentalTeam: DentalTeamMember[] = [
  {
    name: 'Dr. Elena Marsh',
    role: 'Principal dentist, founder',
    bio: 'Elena opened Linden in 2011 after ten years in hospital dentistry. She leads general and restorative care and still sees many of her first patients.',
    languages: 'English, Spanish',
    photo: '/dental/team-elena.jpg',
    alt: 'Dr. Elena Marsh, wearing glasses and a white coat, seated at her desk',
    position: '50% 20%'
  },
  {
    name: 'Dr. Daniel Reyes',
    role: 'Cosmetic & implant dentist',
    bio: 'Daniel trained in restorative design and loves the details: shade matching, veneers and whitening plans that still look like you.',
    languages: 'English, Portuguese',
    photo: '/dental/team-daniel.jpg',
    alt: 'Dr. Daniel Reyes, bearded and smiling in a white coat with a stethoscope',
    position: '50% 20%'
  },
  {
    name: 'Dr. Ingrid Larsen',
    role: 'Family & children’s dentist',
    bio: 'Ingrid works under magnifying loupes for precise, gentle work. She is the person most nervous patients ask for by name.',
    languages: 'English, Norwegian',
    photo: '/dental/team-ingrid.jpg',
    alt: 'Dr. Ingrid Larsen wearing magnifying loupes while treating a patient',
    position: '30% 25%'
  },
  {
    name: 'Dr. Omar Haddad',
    role: 'Orthodontist',
    bio: 'Omar runs our clear aligner and braces programme two days a week. He explains every step with a 3D scan on screen, so you know what is coming.',
    languages: 'English, Arabic',
    photo: '/dental/team-omar.jpg',
    alt: 'Dr. Omar Haddad in green scrubs and a mask, examining a patient',
    position: '55% 20%'
  },
  {
    name: 'Hannah Cole, RDH',
    role: 'Dental hygienist',
    bio: 'Hannah makes cleanings comfortable, and she is happy to show you the brushing and flossing tricks that actually work.',
    languages: 'English, French',
    photo: '/dental/team-hannah.jpg',
    alt: 'Hannah Cole, dental hygienist, smiling against a light background',
    position: '50% 30%'
  }
]

export const dentalTestimonials = [
  {
    quote: 'I had not seen a dentist in nine years and was dreading it. Ingrid talked me through every step and I did not feel a thing. I have already booked my next check-up.',
    name: 'Rachel T.',
    detail: 'New patient, 2024'
  },
  {
    quote: 'Broke a tooth on a Saturday morning, called the emergency line and was in the chair by eleven. Calm, quick, and the price was exactly as quoted.',
    name: 'Marcus B.',
    detail: 'Emergency visit'
  },
  {
    quote: 'Both of my kids actually look forward to coming. The clear aligners Omar planned for me are finished after 9 months and I get compliments on my smile.',
    name: 'Priya S.',
    detail: 'Family patient since 2019'
  }
]
