// Shared data for the Ironbark Builders demo site. All names, numbers and addresses are fictional.

export const buildersContact = {
  name: 'Ironbark Builders',
  address: ['214 Foundry Lane', 'Harlow Falls, OR 97099'],
  phone: '+1 (555) 014-2290',
  phoneHref: 'tel:+15550142290',
  email: 'quotes@ironbarkbuilders.example',
  hours: [
    { days: 'Mon – Fri', time: '7:00 – 17:30' },
    { days: 'Saturday', time: '8:00 – 12:00' },
    { days: 'Sunday', time: 'Closed' }
  ],
  area: 'Harlow Falls, Cedar Bend, Marlow, Pine Hollow and everywhere within 40 miles of the city centre.',
  licence: 'Licensed, bonded & insured · CCB #000000 (demo)'
}

export const buildersNav = [
  { to: '/builders', label: 'Home' },
  { to: '/builders/services', label: 'Services' },
  { to: '/builders/projects', label: 'Projects' },
  { to: '/builders/about', label: 'About' },
  { to: '/builders/contact', label: 'Contact' }
]

export interface BuildersService {
  id: string
  title: string
  summary: string
  image: string
  alt: string
  includes: string[]
  timeline: string
  from: string
}

export const buildersServices: BuildersService[] = [
  {
    id: 'renovations',
    title: 'Home renovations',
    summary: 'Whole-house or room-by-room refurbishments, from strip-out to final coat of paint.',
    image: '/builders/room.jpg',
    alt: 'A gutted room mid-renovation with plastered walls and tools on the floor',
    includes: ['Strip-out and waste removal', 'Structural changes and new openings', 'Plastering, flooring and joinery', 'Electrical and plumbing first and second fix', 'Painting and a full clean before handover'],
    timeline: '6 – 16 weeks',
    from: '$38,000'
  },
  {
    id: 'extensions',
    title: 'Extensions & lofts',
    summary: 'Single and two-storey extensions, loft conversions and garage conversions that look like they were always there.',
    image: '/builders/frame.jpg',
    alt: 'Timber frame and roof trusses of an extension under construction',
    includes: ['Permit drawings and engineer coordination', 'Foundations, frame, roof and weathertight shell', 'Matching brickwork and cladding', 'Insulation, services and finishes', 'Final inspection sign-off'],
    timeline: '12 – 24 weeks',
    from: '$85,000'
  },
  {
    id: 'kitchens-bathrooms',
    title: 'Kitchens & bathrooms',
    summary: 'Complete kitchen and bathroom fit-outs with our own tilers, joiners and plumbers.',
    image: '/builders/kitchen.jpg',
    alt: 'Bright finished kitchen with a marble island and light timber cabinets',
    includes: ['Design help and fixture selection', 'Cabinet, worktop and appliance install', 'Waterproofing, tiling and glazing', 'Plumbing and electrical upgrades', 'Fixed price with a written schedule'],
    timeline: '3 – 8 weeks',
    from: '$16,000'
  },
  {
    id: 'roofing',
    title: 'Roofing',
    summary: 'Re-roofs, repairs, flashing and gutters on tile, slate, metal and flat roofs.',
    image: '/builders/roof2.jpg',
    alt: 'Roofer laying terracotta tiles on timber battens',
    includes: ['Free roof survey with photos', 'Strip, re-batten and underlay', 'New tiles, slate or metal sheeting', 'Fascias, soffits and gutters', '15-year workmanship guarantee'],
    timeline: '3 days – 3 weeks',
    from: '$7,500'
  },
  {
    id: 'commercial',
    title: 'Small commercial fit-outs',
    summary: 'Offices, cafés, clinics and shops fitted out around your opening date, with out-of-hours work available.',
    image: '/builders/office.jpg',
    alt: 'Finished open-plan office with desks and exposed concrete columns',
    includes: ['Partitions, ceilings and flooring', 'Power, data and lighting', 'Accessibility and fire-code compliance', 'Out-of-hours and weekend working', 'Single point of contact'],
    timeline: '4 – 12 weeks',
    from: '$24,000'
  }
]

export type BuildersCategory = 'Renovation' | 'Extension' | 'Kitchen & bath' | 'Commercial'

export interface BuildersProject {
  id: string
  title: string
  category: BuildersCategory
  location: string
  duration: string
  image: string
  alt: string
  summary: string
  details: string
}

export const buildersCategories: ('All' | BuildersCategory)[] = ['All', 'Renovation', 'Extension', 'Kitchen & bath', 'Commercial']

export const buildersProjects: BuildersProject[] = [
  {
    id: 'terrace',
    title: 'Edwardian terrace, full refurbishment',
    category: 'Renovation',
    location: 'Cedar Bend',
    duration: '14 weeks',
    image: '/builders/room.jpg',
    alt: 'Terrace house ground floor stripped back to plaster during refurbishment',
    summary: 'Ground floor opened up, new wiring and plumbing, re-plastered throughout.',
    details: 'The owners wanted one big living space without losing the period feel. We removed a load-bearing wall with a steel beam, re-wired the whole house, re-plastered every room and restored the original floorboards.'
  },
  {
    id: 'side-extension',
    title: 'Two-storey side extension',
    category: 'Extension',
    location: 'Marlow',
    duration: '20 weeks',
    image: '/builders/houses.jpg',
    alt: 'Two-storey brick and render house with a grey tiled roof',
    summary: 'New bedroom, ensuite and a larger kitchen, in brick to match the original.',
    details: 'A growing family needed two more rooms without moving. We built a two-storey side extension with matching brick, tied the new roof into the existing one and finished the interior in 20 weeks.'
  },
  {
    id: 'marble-kitchen',
    title: 'Open-plan kitchen with marble island',
    category: 'Kitchen & bath',
    location: 'Harlow Falls',
    duration: '7 weeks',
    image: '/builders/kitchen.jpg',
    alt: 'Open-plan kitchen with a marble island, white chairs and large sliding doors',
    summary: 'Wall removed, new sliding doors to the deck and a custom island.',
    details: 'We took out the wall between kitchen and dining room, fitted a 3 m sliding door to the deck and installed light oak cabinets with a book-matched marble island and integrated appliances.'
  },
  {
    id: 'spa-bathroom',
    title: 'Stone-look family bathroom',
    category: 'Kitchen & bath',
    location: 'Pine Hollow',
    duration: '3 weeks',
    image: '/builders/bath.jpg',
    alt: 'Bathroom with a freestanding tub and large warm-grey wall tiles',
    summary: 'Freestanding tub, wall-hung vanity and underfloor heating.',
    details: 'A dated bathroom replaced with large-format tiles, concealed plumbing, underfloor heating and a freestanding tub. Fully waterproofed and finished in three weeks.'
  },
  {
    id: 'ensuite',
    title: 'Geometric tile ensuite',
    category: 'Kitchen & bath',
    location: 'Cedar Bend',
    duration: '2 weeks',
    image: '/builders/bath2.jpg',
    alt: 'Ensuite shower with blue chevron wall tiles and a patterned floor',
    summary: 'A small ensuite turned into a feature, with chevron and encaustic-style tile.',
    details: 'Tight space, bold brief. We fitted a frameless black shower screen, blue chevron wall tile and a patterned floor, with a recessed niche and a wall-hung vanity to save room.'
  },
  {
    id: 'office',
    title: 'Open-plan office for 40 staff',
    category: 'Commercial',
    location: 'Harlow Falls, Mill District',
    duration: '9 weeks',
    image: '/builders/office.jpg',
    alt: 'Modern open-plan office with desks, glass partitions and exposed concrete',
    summary: 'Concrete-frame floor fitted out with meeting rooms, acoustic ceilings and data.',
    details: 'Delivered in two phases to keep the tenant downstairs trading. Glazed partitions, acoustic ceiling, new power and data and a fire-code upgrade, signed off on day one of the lease.'
  },
  {
    id: 're-roof',
    title: 'Terracotta tile re-roof',
    category: 'Renovation',
    location: 'Marlow',
    duration: '10 days',
    image: '/builders/roof2.jpg',
    alt: 'Roof half re-tiled with new terracotta tiles on timber battens',
    summary: 'Full strip, new battens and underlay, reclaimed and new tiles blended.',
    details: 'Failing underlay and slipped tiles caused leaks. We stripped the roof, re-battened, fitted breathable underlay and re-laid tiles, with new lead flashing and gutters.'
  },
  {
    id: 'timber-frame',
    title: 'Timber-frame rear extension',
    category: 'Extension',
    location: 'Pine Hollow',
    duration: '16 weeks',
    image: '/builders/frame.jpg',
    alt: 'Exposed timber frame and roof trusses of a house extension',
    summary: 'Engineered timber frame, weathertight in just three weeks on site.',
    details: 'A pre-engineered timber frame let us close the shell in three weeks, which kept the build on schedule through a wet autumn. Insulated, clad and fitted out in under four months.'
  }
]

export const buildersTestimonials = [
  { quote: 'They quoted a fixed price, started on the day they said and finished a week early. The site was clean every evening.', name: 'Dana R.', project: 'Kitchen & dining extension' },
  { quote: 'Our terrace was a shell for three months and I never once had to chase anyone. Everything I was told turned out true.', name: 'Marcus T.', project: 'Full refurbishment' },
  { quote: 'Fit-out finished over a long weekend so we opened on Monday. Rare to find a builder who understands deadlines.', name: 'Priya S.', project: 'Dental practice fit-out' }
]
