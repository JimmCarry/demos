// Shared data for the Hartwell & Moss demo site (fictional law firm).

export interface LawArea {
  id: string
  name: string
  summary: string
  description: string
  matters: string[]
  fees: { model: string; detail: string }
}

export const lawAreas: LawArea[] = [
  {
    id: 'business-law',
    name: 'Business law',
    summary: 'Formation, contracts, shareholder agreements and disputes for owner-managed companies.',
    description:
      'We act for founders, family-owned companies and growing local firms. Most of our work is preventive: contracts that say what you meant, and ownership structures that survive a disagreement between partners.',
    matters: [
      'Company formation and shareholder agreements',
      'Commercial contracts, terms of business and supplier agreements',
      'Buying or selling a small business',
      'Commercial leases and licensing',
      'Partner disputes and debt recovery'
    ],
    fees: {
      model: 'Fixed fee for most documents, hourly for disputes',
      detail:
        'A shareholder agreement is typically $2,400 to $4,500 fixed. Contract reviews start at $350. Disputes are billed hourly at $285 to $395, with a written budget before we start.'
    }
  },
  {
    id: 'real-estate',
    name: 'Real estate',
    summary: 'Residential and commercial purchases, sales, leases and title issues.',
    description:
      'Whether you are buying a first flat or leasing a unit for a business, we handle searches, contracts and completion, and we tell you plainly when a risk is worth walking away from.',
    matters: [
      'Residential purchases and sales',
      'Commercial property and lease negotiation',
      'Boundary, easement and title disputes',
      'Landlord and tenant matters',
      'Transfers of ownership between family members'
    ],
    fees: {
      model: 'Fixed fee',
      detail:
        'Residential purchase or sale: $1,650 fixed, plus disbursements such as search and registry fees. Lease reviews from $600. Title disputes are hourly after a free first assessment.'
    }
  },
  {
    id: 'family-law',
    name: 'Family law',
    summary: 'Separation, divorce, parenting arrangements and financial settlements, handled with care.',
    description:
      'Family matters are rarely only legal ones. We aim for agreements reached through negotiation or mediation where that is safe, and we are ready to go to court when it is not.',
    matters: [
      'Divorce and separation agreements',
      'Parenting plans and relocation',
      'Division of property and pensions',
      'Prenuptial and postnuptial agreements',
      'Child and spousal support'
    ],
    fees: {
      model: 'Hourly with a capped stage budget',
      detail:
        'Hourly rates of $265 to $340. We agree a capped budget for each stage, so you know the likely cost before it is incurred. Uncontested divorce paperwork is a fixed $1,900.'
    }
  },
  {
    id: 'wills-estates',
    name: 'Wills & estates',
    summary: 'Wills, powers of attorney, trusts and estate administration.',
    description:
      'Good planning spares your family stress at the worst possible moment. We write clear wills, set up powers of attorney, and guide executors through probate step by step.',
    matters: [
      'Wills and codicils',
      'Lasting powers of attorney',
      'Trusts and inheritance planning',
      'Probate and estate administration',
      'Contested wills and estate claims'
    ],
    fees: {
      model: 'Fixed fee',
      detail:
        'Single will $320, mirror wills for couples $520, power of attorney $280 each. Estate administration is a fixed fee agreed after we review the estate, usually 1.5% to 2.5% of its value.'
    }
  },
  {
    id: 'employment-law',
    name: 'Employment law',
    summary: 'Contracts, redundancy, discrimination and settlement agreements, for employees and employers.',
    description:
      'We advise both sides of the table, never in the same dispute. Employers get practical policies and contracts; employees get a straight answer on whether they have a claim.',
    matters: [
      'Employment contracts and handbooks',
      'Unfair dismissal and redundancy',
      'Discrimination and harassment',
      'Settlement agreements and exit packages',
      'Restrictive covenants and non-competes'
    ],
    fees: {
      model: 'Fixed fee for advice, hourly for claims',
      detail:
        'Settlement agreement review is $450 fixed. Employment contracts from $500. Tribunal or court claims are hourly at $265 to $360, and some employee claims can be taken on a conditional-fee basis.'
    }
  }
]

export interface LawAttorney {
  name: string
  role: string
  photo: string
  position: string
  bio: string
  admissions: string[]
  education: string[]
}

export const lawAttorneys: LawAttorney[] = [
  {
    name: 'Edmund Hartwell',
    role: 'Founding partner · Business & real estate',
    photo: '/law/attorney-1.jpg',
    position: '50% 30%',
    bio: 'Edmund started the firm in 1998 after a decade at a large city practice. He still handles most of our shareholder and commercial property work personally.',
    admissions: ['State Bar, admitted 1994', 'U.S. District Court, Eastern District'],
    education: ['J.D., Westbrook University School of Law', 'B.A. Economics, Ashford College']
  },
  {
    name: 'Clara Moss',
    role: 'Partner · Family law & wills',
    photo: '/law/attorney-3.jpg',
    position: '40% 25%',
    bio: 'Clara joined in 2006 and became partner in 2012. She is a trained family mediator and writes the firm’s plain-English guides for clients going through separation.',
    admissions: ['State Bar, admitted 2005', 'Accredited family mediator'],
    education: ['J.D., Marlowe University School of Law', 'B.A. Psychology, Ashford College']
  },
  {
    name: 'Daniel Reyes',
    role: 'Associate · Employment law',
    photo: '/law/attorney-2.jpg',
    position: '68% 25%',
    bio: 'Daniel advises both employers and employees and has argued before the state employment tribunal in more than sixty hearings. He leads our settlement agreement work.',
    admissions: ['State Bar, admitted 2016'],
    education: ['J.D., Westbrook University School of Law', 'B.Sc. Business Administration']
  }
]

export const lawContact = {
  address: ['214 Calloway Street, Suite 400', 'Fenmouth, WA 98240'],
  phone: '+1 (555) 014-2290',
  phoneHref: '+15550142290',
  email: 'enquiries@hartwellmoss.example',
  hours: [
    { days: 'Monday to Thursday', time: '8:30 am – 5:30 pm' },
    { days: 'Friday', time: '8:30 am – 4:00 pm' },
    { days: 'Saturday and Sunday', time: 'Closed' }
  ]
}
