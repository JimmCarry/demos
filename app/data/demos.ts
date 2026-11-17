// The demo websites shown on the hub page. All businesses are fictional.
export interface Demo {
  slug: string
  name: string
  industry: string
  description: string
  pages: string[]
  // Screenshot shown on the hub card (public/<slug>/cover.jpg).
  cover: string
}

export const demos: Demo[] = [
  {
    slug: 'cafe',
    name: 'Bramble & Bean',
    industry: 'Café & bistro',
    description: 'A warm neighbourhood café with a full menu, opening hours and a table booking form.',
    pages: ['Home', 'Menu', 'About', 'Contact'],
    cover: '/cafe/cover.jpg'
  },
  {
    slug: 'dental',
    name: 'Linden Dental Studio',
    industry: 'Dental clinic',
    description: 'A calm, trustworthy clinic site with treatments, prices, the team and an appointment request.',
    pages: ['Home', 'Treatments', 'Team', 'Contact'],
    cover: '/dental/cover.jpg'
  },
  {
    slug: 'law',
    name: 'Hartwell & Moss',
    industry: 'Law firm',
    description: 'A classic, serious website for a law firm: practice areas, attorneys and a consultation form.',
    pages: ['Home', 'Practice areas', 'About', 'Contact'],
    cover: '/law/cover.jpg'
  },
  {
    slug: 'builders',
    name: 'Ironbark Builders',
    industry: 'Construction & renovation',
    description: 'A bold site for a building company with services, a project gallery and a quote request form.',
    pages: ['Home', 'Services', 'Projects', 'About', 'Contact'],
    cover: '/builders/cover.jpg'
  },
  {
    slug: 'yoga',
    name: 'Still Water Yoga',
    industry: 'Yoga & fitness studio',
    description: 'A light, airy studio site with a filterable weekly class schedule, pricing and a contact form.',
    pages: ['Home', 'Classes', 'Pricing', 'About', 'Contact'],
    cover: '/yoga/cover.jpg'
  }
]

export const author = {
  name: 'Lukáš Žáček',
  site: 'https://www.lukaszacekwebdeveloper.cz'
}
