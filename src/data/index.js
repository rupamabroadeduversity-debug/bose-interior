import {
  BadgeCheck,
  Building2,
  Compass,
  Hammer,
  Home,
  Layers3,
  MapPinned,
  MessageCircleMore,
  PanelsTopLeft,
  ShieldCheck,
  Sofa,
  Sparkles,
  SwatchBook,
} from 'lucide-react';

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Studio', href: '#about' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 1,
    title: 'Residential Interiors',
    description:
      'Living rooms, bedrooms, dining spaces, and full-home interiors shaped around comfort, layout clarity, and daily usability.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Modular Kitchens',
    description:
      'Storage-smart kitchens with durable finishes, thoughtful work triangles, appliance integration, and a polished modern look.',
    icon: PanelsTopLeft,
  },
  {
    id: 3,
    title: 'Wardrobes & Custom Furniture',
    description:
      'Tailored wardrobes, TV units, crockery storage, study setups, and made-to-fit furniture for better organization and finish.',
    icon: Sofa,
  },
  {
    id: 4,
    title: 'Commercial Interiors',
    description:
      'Showroom, office, and business-space interiors designed to look credible, function efficiently, and support a better customer impression.',
    icon: Building2,
  },
  {
    id: 5,
    title: '2D / 3D Design Planning',
    description:
      'Concept development, layout thinking, room visualization, and design direction that helps clients decide with confidence.',
    icon: Compass,
  },
  {
    id: 6,
    title: 'Turnkey Execution',
    description:
      'From consultation and material planning to coordination, site work, finishing, and final handover under one execution-led flow.',
    icon: Hammer,
  },
];

export const studioHighlights = [
  {
    title: 'Founder-Led Consultations',
    description:
      'Atanu Bose is publicly tied to the brand, which gives the studio a more direct, accountable, and relationship-led first touch.',
    icon: MessageCircleMore,
  },
  {
    title: 'Residential To Commercial Scope',
    description:
      'The service mix covers homes, modular kitchens, wardrobes, furniture, and commercial interiors without feeling one-dimensional.',
    icon: Layers3,
  },
  {
    title: 'Built For Local Trust',
    description:
      'The strongest opportunity is turning existing reviews, listings, and project visibility into a cleaner premium digital experience.',
    icon: ShieldCheck,
  },
];

export const serviceAreas = [
  'Uluberia',
  'Howrah',
  'Kolkata',
  'Hugli',
  'Midnapore',
  'Contai',
  'Digha',
  'South 24 Parganas',
  'North 24 Parganas',
];

export const featurePoints = [
  'Founder-led planning and consultation',
  'Residential and commercial project scope',
  'Modular kitchen and wardrobe specialization',
  'Portfolio-led selling with local credibility',
  'Call, WhatsApp, and consultation-friendly contact flow',
  'A warmer premium aesthetic with practical execution focus',
];

export const trustSignals = [
  '4.6/5 Local Listing Signal',
  '10+ Public Reviews',
  'Residential + Commercial',
  'Call / WhatsApp Consultation',
];

export const portfolio = [
  {
    id: 1,
    title: 'Warm Living Room Composition',
    category: 'Residential Interior',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    detail: 'Editorial neutrals, layered lighting, and a calm premium finish that feels lived-in rather than overdesigned.',
  },
  {
    id: 2,
    title: 'Modular Kitchen Planning',
    category: 'Kitchen Design',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    detail: 'Compact workflow thinking, durable materials, and clean storage lines suited for modern family routines.',
  },
  {
    id: 3,
    title: 'Bedroom + Wardrobe Suite',
    category: 'Furniture & Storage',
    image:
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80',
    detail: 'Integrated wardrobes, soft finishes, and quieter styling that makes organization part of the visual language.',
  },
  {
    id: 4,
    title: 'Commercial Reception Experience',
    category: 'Commercial Interior',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    detail: 'A sharper front-of-house presence shaped around circulation, lighting focus, and stronger brand perception.',
  },
];

export const portfolioPillars = [
  {
    title: 'Portfolio First',
    note: 'Show finished rooms clearly so premium intent builds before pricing questions start.',
  },
  {
    title: 'Local Trust',
    note: 'Use Uluberia, Howrah, and Kolkata relevance to make the brand feel closer and easier to choose.',
  },
  {
    title: 'Consultation Ready',
    note: 'Every section should naturally lead into a call, WhatsApp conversation, or project discussion.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Start The Conversation',
    description:
      'Begin through phone, WhatsApp, or a consultation request so the team can understand the space, goals, and project location.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Understand The Requirement',
    description:
      'Discuss room priorities, layout constraints, storage needs, style direction, and the level of execution required.',
    icon: MapPinned,
  },
  {
    step: '03',
    title: 'Shape The Design Direction',
    description:
      'Move into 2D / 3D planning, material intent, furniture ideas, and a scope that fits both vision and practical use.',
    icon: SwatchBook,
  },
  {
    step: '04',
    title: 'Execute And Handover',
    description:
      'Coordinate the making, installation, finishing, and on-site details so the result feels considered from entry to final touch.',
    icon: BadgeCheck,
  },
];

export const testimonials = [
  {
    id: 1,
    metric: '4.6/5',
    title: 'Local review signal',
    content:
      'Public listing mirrors show strong local review sentiment around Bose Interior in Uluberia and Howrah, which is a valuable trust layer to feature more prominently.',
  },
  {
    id: 2,
    metric: 'Founder-led',
    title: 'Direct first contact',
    content:
      'The founder is publicly listed as a primary contact, which makes the brand feel more accountable and consultation-driven than faceless vendor-style competitors.',
  },
  {
    id: 3,
    metric: 'Regional reach',
    title: 'Broader service footprint',
    content:
      'Public profiles position the studio across Kolkata, Howrah, and surrounding districts, giving the homepage room to speak to both local and regional project demand.',
  },
];

export const faqs = [
  {
    question: 'What kinds of interiors does Bose Interior handle?',
    answer:
      'The studio is positioned around residential interiors, modular kitchens, wardrobes, custom furniture, decoration work, and selected commercial projects such as offices and showrooms.',
  },
  {
    question: 'Do I need to finalize the whole project before contacting the studio?',
    answer:
      'No. The site is designed around an easy consultation path so you can begin with your room requirements, location, and budget direction before locking the full scope.',
  },
  {
    question: 'Which areas does Bose Interior serve?',
    answer:
      'Public profiles connect the brand to Uluberia, Howrah, Kolkata, and nearby West Bengal districts, making it a strong fit for both local and regional interior projects.',
  },
  {
    question: 'Why is the portfolio section so important on this homepage?',
    answer:
      'Interior buyers need visible proof of taste, detailing, and execution quality early. A stronger project showcase improves both premium perception and inquiry confidence.',
  },
  {
    question: 'What is the best way to reach Bose Interior quickly?',
    answer:
      'WhatsApp and direct calling are the clearest fast-response paths, while the consultation form helps organize project details before the first conversation.',
  },
];

export const businessDetails = {
  name: 'Bose Interior',
  legalName: 'Bose Interior - Design My Life',
  tagline: 'Interior Design & Home Interiors',
  phone: '+91 89814 19085',
  whatsapp: '918981419085',
  email: 'info@boseinterior.in',
  website: 'https://www.boseinterior.in',
  address: 'Latibpur Rd, Nimdighi',
  city: 'Uluberia, Howrah - 711316',
  fullAddress: 'Latibpur Rd, Nimdighi, Uluberia, Howrah - 711316',
  hours: 'Call or WhatsApp to schedule your consultation',
  founder: 'Atanu Bose',
  mapEmbed:
    'https://www.google.com/maps?q=Bose%20Interior%20Uluberia%20Howrah&output=embed',
  stats: [
    { label: 'Local Reviews', value: '4.6/5' },
    { label: 'Service Reach', value: 'Howrah + Kolkata' },
    { label: 'Lead Path', value: 'Call / WhatsApp' },
  ],
};
