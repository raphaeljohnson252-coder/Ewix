export type RoutePath =
  | '/'
  | '/websites'
  | '/flyers-and-print'
  | '/ai-videos'
  | '/contact';

export type ServiceSlug = 'websites' | 'flyers' | 'videos';

export const BUSINESS_NAME = 'Ewixstudio';
export const DESIGNER_NAME = 'Raphael';
export const LOCATION_TEXT = 'Lagos, Nigeria';
export const CONTACT_EMAIL = 'ewixstudio25@gmail.com';
export const EMAIL_HREF =
  'mailto:ewixstudio25@gmail.com?subject=Portfolio%20enquiry%20for%20Ewixstudio';

export const WHATSAPP_NUMBER_DISPLAY = '+234 814 084 1284';
export const WHATSAPP_BASE = 'https://wa.me/2348140841284';

export function buildWhatsAppUrl(service?: ServiceSlug): string {
  const textByService: Record<ServiceSlug, string> = {
    websites:
      "Hi Raphael, I saw your portfolio and I'd like a quote for a website for my business.",
    flyers:
      "Hi Raphael, I saw your portfolio and I'd like a quote for flyers and print for my business.",
    videos:
      "Hi Raphael, I saw your portfolio and I'd like a quote for an AI video for my business.",
  };

  const message = service
    ? textByService[service]
    : "Hi Raphael, I saw your portfolio and I'd like a quote for my business.";

  const encoded = encodeURIComponent(message).replace(/'/g, '%27');
  return `${WHATSAPP_BASE}?text=${encoded}`;
}

export interface TestimonialData {
  quote: string;
  clientName: string;
  business: string;
  city: string;
}

// Keep null until a real client quote is supplied.
export const REAL_TESTIMONIAL: TestimonialData | null = null;

export type WebsiteCategory =
  | 'All'
  | 'Health & Wellness'
  | 'Books & Editorial'
  | 'Studios & Hospitality';

export interface WebsiteProject {
  id: string;
  clientName: string;
  businessType: string;
  country: string;
  category: Exclude<WebsiteCategory, 'All'>;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  problem: string;
  whatIDid: string;
  highlights: string[];
  linkLabel: string;
}

export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: 'midtown-dental-modern',
    clientName: 'Midtown Dental',
    businessType: 'Cosmetic & family dental studio',
    country: 'USA',
    category: 'Health & Wellness',
    imageSrc:
      '/assets/aistudio/screencapture-midtowndental-lovable-app-2026-07-27-13_31_36_764be258.png',
    imageAlt:
      'Full-page website capture for Midtown Dental showing modern appointment booking, treatment cards, dentist profile, and before-and-after smile gallery',
    summary:
      'Patient-first clinic website with instant appointment booking, clear treatment breakdowns, insurance acceptance, and before-and-after smile gallery.',
    problem:
      'Patients visiting health clinics often struggle to find transparent service explanations, clinician credentials, and a quick way to book on mobile.',
    whatIDid:
      'Designed a calm, clinical layout with prominent appointment booking buttons, six treatment cards, a Dr. John Nelson profile section, an interactive before-and-after comparison view, and insurance clarity.',
    highlights: [
      'Direct Book Appointment CTA & click-to-call header',
      'Clear service grid (Implants, Invisalign, Veneers, Cleaning)',
      'Doctor bio, patient stories & financing section',
    ],
    linkLabel: 'midtowndental.lovable.app (preview capture)',
  },
  {
    id: 'delightfull-company',
    clientName: 'DelightFull Company',
    businessType: 'Holistic wellness, herbal tea & publishing',
    country: 'USA',
    category: 'Health & Wellness',
    imageSrc:
      '/assets/aistudio/screencapture-delightfull-world-2026-07-13-13_33_51_fcafeb08.png',
    imageAlt:
      'Full-page website capture for DelightFull Company featuring herbal tea blends, wellness branches, founder story, and mailing list',
    summary:
      'Warm lifestyle and herbal wellness website uniting medicinal tea blends, business coaching, and publishing under one clear navigation flow.',
    problem:
      'Multi-branch wellness brands can confuse visitors when products, coaching, and community events compete for attention on the same page.',
    whatIDid:
      'Structured the homepage around three clear branches — DelightFull Tea, DelightFull Entrepreneurs, and DelightFull Books — paired with founder storytelling and a mailing list signup.',
    highlights: [
      'Three-branch editorial layout with clear Learn More routes',
      'Founder story & community wellness gallery section',
      'Warm typography with integrated mailing list capture',
    ],
    linkLabel: 'delightfull.world (preview capture)',
  },
  {
    id: 'midtown-dental-miami',
    clientName: 'Midtown Dental Miami',
    businessType: 'Dental practice & patient education hub',
    country: 'USA',
    category: 'Health & Wellness',
    imageSrc:
      '/assets/aistudio/screencapture-midtowndentalmiami-2026-07-27-13_11_23_bc8f8ebb.png',
    imageAlt:
      'Full-page website capture for Midtown Dental Miami showing clinic hours, patient education links, dentist profile, testimonials, and embedded location map',
    summary:
      'Comprehensive dental practice site featuring patient forms, treatment education, working hours, and an interactive clinic location map.',
    problem:
      'New patients need practical clinic logistics — opening hours, parking location, emergency phone number, and treatment info — without digging through submenus.',
    whatIDid:
      'Organised clinic hours, direct phone contact, Invisalign provider trust marks, patient testimonials, and an interactive Biscayne Blvd location map into one scannable layout.',
    highlights: [
      'Top utility bar with hours, phone & clinic address',
      'Eight-service dental treatment overview grid',
      'Working hours panel overlaid on embedded street map',
    ],
    linkLabel: 'midtowndentalmiami.com (preview capture)',
  },
  {
    id: 'joi-jno-baptiste-book',
    clientName: "Hold On, I'm Going Through",
    businessType: 'Author book & guided healing journal',
    country: 'International',
    category: 'Books & Editorial',
    imageSrc:
      '/assets/aistudio/Journal-Joi-Jno-Baptiste-09-02-2026_05_51_AM_484d154a.png',
    imageAlt:
      "Full-page website capture for Joi' Jno-Baptiste's book and guided journal launch featuring preorder buttons and author bio",
    summary:
      'Focused book and guided journal pre-order landing page built around clear reader fit, author story, and direct order calls to action.',
    problem:
      'Author launches lose readers when the book premise, author credibility, and pre-order steps are scattered across separate pages.',
    whatIDid:
      'Created a single-flow landing page with a 3D book hero, five reader-fit points, an author quote section, and a matching guided journal pre-order block.',
    highlights: [
      'Book & spiral journal showcase visuals',
      'Reader-fit icon strip & What to Expect checklist',
      'Dedicated Coming Soon journal pre-order section',
    ],
    linkLabel: 'Author launch page (preview capture)',
  },
  {
    id: 'mighty-free-mind',
    clientName: 'The Mighty Free Mind',
    businessType: 'Digital library, books & video lectures',
    country: 'International',
    category: 'Books & Editorial',
    imageSrc:
      '/assets/aistudio/screencapture-readdy-cc-preview-12ead0de-5690-4ff4-9d2c-8a7b28cd4a0e-11041618-2026-06-16-13_47_33_d688a00a.png',
    imageAlt:
      'Full-page website capture for The Mighty Free Mind showcasing a multi-book library, essays, video lectures, and contact form',
    summary:
      'Content-rich editorial library website organising multi-language books, downloadable editions, video lectures, and direct reader contact.',
    problem:
      'Publishing catalogues with multiple books, languages, and video talks quickly become overwhelming without clear visual hierarchy.',
    whatIDid:
      'Built a structured library showcase with featured releases, language-tagged downloads, an essays grid, video lecture thumbnails, and a clean contact form.',
    highlights: [
      'Featured book releases & 4-column full library grid',
      'Dedicated Videos & Lectures media block',
      'Structured Reach the Author enquiry form',
    ],
    linkLabel: 'Editorial library (preview capture)',
  },
  {
    id: 'musicians-world',
    clientName: 'MusiciansWorld.us',
    businessType: 'Creative studios & event space booking',
    country: 'USA',
    category: 'Studios & Hospitality',
    imageSrc:
      '/assets/aistudio/screencapture-readdy-cc-preview-5306ca03-0bfe-4541-afee-764b392d68f9-11455008-2026-06-28-07_53_15_76487a9e.png',
    imageAlt:
      'Full-page black-theme website capture for MusiciansWorld.us showcasing photography studio, rehearsal rooms, event venue, and booking actions',
    summary:
      'Dark-mode creative studio rental platform featuring four bookable spaces, gallery previews, upcoming events schedule, and instant booking CTAs.',
    problem:
      'Studio and venue clients need to inspect room specifications, capacity, and availability at a glance before committing to a booking.',
    whatIDid:
      'Crafted a high-contrast black interface pairing studio photography with numbered space cards, equipment details, a visual gallery grid, and an upcoming events list.',
    highlights: [
      'High-contrast obsidian black visual system',
      'Four room cards with capacity & equipment specs',
      'Visual space gallery & upcoming events calendar',
    ],
    linkLabel: 'musiciansworld.us (preview capture)',
  },
  {
    id: 'threshold-interiors',
    clientName: 'Threshold',
    businessType: 'Architectural doors & lighting catalogue',
    country: 'International',
    category: 'Studios & Hospitality',
    imageSrc:
      '/assets/aistudio/screencapture-pixel-perfect-render-44762-lovable-app-2026-10-03-12_11_18_ac571868.png',
    imageAlt:
      'Full-page website capture for Threshold featuring architectural doors, lighting collection grids, and editorial photography',
    summary:
      'Minimalist architectural catalogue website presenting handcrafted interior doors and lighting fixtures with clean pricing and product detail links.',
    problem:
      'Homeowners and builders comparing fixtures need large, uncluttered photography and clear starting prices without noisy promotional banners.',
    whatIDid:
      'Designed an editorial showroom layout with two primary collection pillars (Doors and Lighting), clean 3-column product rows, and warm natural spacing.',
    highlights: [
      'Calm architectural serif & sans typography',
      'Featured Doors & Featured Lighting 3-column grids',
      'Transparent starting prices on every product card',
    ],
    linkLabel: 'Threshold showroom (preview capture)',
  },
  {
    id: 'mill-coffee-house',
    clientName: 'The Mill Coffee House',
    businessType: 'Local coffee shop, rewards & catering',
    country: 'USA',
    category: 'Studios & Hospitality',
    imageSrc:
      '/assets/aistudio/screencapture-readdy-cc-preview-7863ddb5-4b8d-4b47-91af-0c74439b2490-11774434-2026-07-07-11_05_49_64def063.png',
    imageAlt:
      'Full-page website capture for The Mill Coffee House showing online ordering, featured drinks menu, rewards, catering, and reviews',
    summary:
      'Hospitality website built to drive online drink orders, loyalty signups, and private catering bookings for a local community café.',
    problem:
      'Local food and drink businesses lose orders when opening hours, menu pricing, and catering options are buried inside PDFs or social feeds.',
    whatIDid:
      'Put opening hours and Order Online buttons right below the hero, followed by a visual 5-drink menu strip, loyalty rewards section, catering enquiry block, and community reviews.',
    highlights: [
      'Hero Order Online & Visit Us buttons + hours strip',
      'Visual menu cards with clear item pricing',
      'Private events, catering checklist & newsletter signup',
    ],
    linkLabel: 'The Mill Coffee House (preview capture)',
  },
];

export interface FlyerSample {
  id: string;
  label: string;
  clientName: string;
  flyerType: string;
  whereUsed: string;
  result?: string;
}

export const FLYER_SAMPLES: FlyerSample[] = [
  {
    id: 'flyer-sample-1',
    label: 'Placeholder sample 1',
    clientName: '[Client name]',
    flyerType: '[type of flyer]',
    whereUsed: '[clinic, event, online]',
  },
  {
    id: 'flyer-sample-2',
    label: 'Placeholder sample 2',
    clientName: '[Client name]',
    flyerType: '[type of flyer]',
    whereUsed: '[clinic, event, online]',
  },
  {
    id: 'flyer-sample-3',
    label: 'Placeholder sample 3',
    clientName: '[Client name]',
    flyerType: '[type of flyer]',
    whereUsed: '[clinic, event, online]',
  },
];

export interface VideoSample {
  id: string;
  label: string;
  projectName: string;
  length: string;
  whereUsed: string;
  whatItExplains: string;
  result?: string;
}

export const VIDEO_SAMPLES: VideoSample[] = [
  {
    id: 'video-sample-1',
    label: 'Placeholder sample 1',
    projectName: '[Project name]',
    length: '[length]',
    whereUsed: '[where it is used]',
    whatItExplains: '[one sentence]',
  },
  {
    id: 'video-sample-2',
    label: 'Placeholder sample 2',
    projectName: '[Project name]',
    length: '[length]',
    whereUsed: '[where it is used]',
    whatItExplains: '[one sentence]',
  },
  {
    id: 'video-sample-3',
    label: 'Placeholder sample 3',
    projectName: '[Project name]',
    length: '[length]',
    whereUsed: '[where it is used]',
    whatItExplains: '[one sentence]',
  },
];
