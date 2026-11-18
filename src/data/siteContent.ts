export type AiVideoIndustrySlug =
  | 'health'
  | 'cafes'
  | 'real-estate'
  | 'fitness-beauty'
  | 'online-shops'
  | 'dental-physio';

export type RoutePath =
  | '/'
  | '/websites'
  | '/flyers-and-print'
  | '/ai-videos'
  | `/ai-videos/${AiVideoIndustrySlug}`
  | '/contact';

export type ServiceSlug = 'websites' | 'flyers' | 'videos';

export const BUSINESS_NAME = 'Ewixstudio';
export const CONTACT_EMAIL = 'ewixstudio25@gmail.com';
export const EMAIL_HREF =
  'mailto:ewixstudio25@gmail.com?subject=Portfolio%20enquiry%20for%20Ewixstudio';

export const SERVICE_PRICES: Record<ServiceSlug, string> = {
  websites: 'US$100',
  flyers: 'US$50',
  videos: 'US$50',
};

function withBase(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${relativePath.replace(/^\/+/, '')}`;
}

export function buildEmailUrl(service?: ServiceSlug): string {
  const subjectByService: Record<ServiceSlug, string> = {
    websites: 'Website quote enquiry — Ewixstudio',
    flyers: 'Flyers & Print quote enquiry — Ewixstudio',
    videos: 'AI Video quote enquiry — Ewixstudio',
  };

  const bodyByService: Record<ServiceSlug, string> = {
    websites:
      "Hi Ewixstudio team, I saw your portfolio and I'd like a quote for a website for my business.",
    flyers:
      "Hi Ewixstudio team, I saw your portfolio and I'd like a quote for flyers and print for my business.",
    videos:
      "Hi Ewixstudio team, I saw your portfolio and I'd like a quote for an AI video for my business.",
  };

  const subject = service
    ? subjectByService[service]
    : 'Project quote enquiry — Ewixstudio';
  const body = service
    ? bodyByService[service]
    : "Hi Ewixstudio team, I saw your portfolio and I'd like a quote for my business.";

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-midtowndental-lovable-app-2026-07-27-13_31_36_764be258.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-delightfull-world-2026-07-13-13_33_51_fcafeb08.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-midtowndentalmiami-2026-07-27-13_11_23_bc8f8ebb.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/Journal-Joi-Jno-Baptiste-09-02-2026_05_51_AM_484d154a.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-readdy-cc-preview-12ead0de-5690-4ff4-9d2c-8a7b28cd4a0e-11041618-2026-06-16-13_47_33_d688a00a.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-readdy-cc-preview-5306ca03-0bfe-4541-afee-764b392d68f9-11455008-2026-06-28-07_53_15_76487a9e.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-pixel-perfect-render-44762-lovable-app-2026-10-03-12_11_18_ac571868.webp'
    ),
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
    imageSrc: withBase(
      'assets/aistudio/screencapture-readdy-cc-preview-7863ddb5-4b8d-4b47-91af-0c74439b2490-11774434-2026-07-07-11_05_49_64def063.webp'
    ),
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
  title: string;
  styleLabel: string;
  format: string;
  whereUsed: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
}

export const FLYER_SAMPLES: FlyerSample[] = [
  {
    id: 'flyer-care-campaign',
    title: 'Stay Healthy, Stay Strong Campaign Layout',
    styleLabel: 'Warm Care & Wellness Flyer',
    format: 'A4 Print & Social Square',
    whereUsed: 'Community clinics, patient welcome desks & wellness promos',
    summary:
      'Clean sky-toned typography paired with approachable lifestyle photography and a clear website footer strip.',
    imageSrc: withBase(
      'assets/aistudio/8c8c2be4b33bc13b9049fa8a88378e46_64444924.jpg'
    ),
    imageAlt:
      'Healthcare awareness flyer example showing bright headline typography above smiling older adults and clinic website link',
  },
  {
    id: 'flyer-root-cause-care',
    title: 'Personalized Care Consultation Handout',
    styleLabel: 'Functional & Clinic Handout',
    format: 'A4 & A5 Print Handout',
    whereUsed: 'Diabetes & integrative health practices, waiting rooms & referrals',
    summary:
      'Bold contrast headline hierarchy highlighting personalized treatment paths with booking button and direct email footer.',
    imageSrc: withBase(
      'assets/aistudio/a117138b297d7f85fc4d1c2e02e887ee_4034ff69.jpg'
    ),
    imageAlt:
      'Green and neutral healthcare clinic flyer highlighting root-cause care, patient consultation photo, and booking strip',
  },
  {
    id: 'flyer-preventative-poster',
    title: 'Patient Trust & Preventative Care Poster',
    styleLabel: 'Clinical Reception Poster',
    format: 'Poster & Digital Promo',
    whereUsed: 'Clinic reception boards, health screening drives & community notices',
    summary:
      'Calm teal clinical palette centering doctor-patient connection around a crisp callout and appointment contact bar.',
    imageSrc: withBase(
      'assets/aistudio/c4415b2f5528275fc476e6b8af30054d_3ddc7591.jpg'
    ),
    imageAlt:
      'Teal healthcare clinic flyer featuring clinician and older couple framed inside a heart motif with appointment phone and web details',
  },
  {
    id: 'flyer-aged-care-program',
    title: 'Aged Care & Support Program Sheet',
    styleLabel: 'Accredited Program Brochure',
    format: 'A4 Information & Enrolment Sheet',
    whereUsed: 'Australian care providers, support services & recruitment',
    summary:
      'Structured accreditation header, icon-led benefit checklist, and high-visibility phone and website callouts.',
    imageSrc: withBase(
      'assets/aistudio/5ece360f034d2e6cd50661f56f31cd95_374b474a.jpg'
    ),
    imageAlt:
      'Australian aged care program flyer featuring caregiver and senior resident, key bullet checklist, and contact bar',
  },
  {
    id: 'flyer-medical-conversion',
    title: 'Transparent Care Direct Booking Flyer',
    styleLabel: 'Clinical Patient Conversion Flyer',
    format: 'Print Handout & Paid Social',
    whereUsed: 'Medical centres, specialist clinics & consultation offers',
    summary:
      'Moody clinical photography paired with an action-driven headline, clear value proposition, and appointment bar.',
    imageSrc: withBase(
      'assets/aistudio/dce194807fd6807b3a71bde4656aa9c0_c8c8b7c4.jpg'
    ),
    imageAlt:
      'Deep teal medical center flyer showing doctor speaking with bedside patient, bold white headline, and booking footer',
  },
  {
    id: 'flyer-awareness-social',
    title: 'Healthcare Awareness & Event Poster',
    styleLabel: 'Clinical Event & Social Card',
    format: 'Portrait Social & Print Card',
    whereUsed: 'Health awareness campaigns, clinic updates & social feeds',
    summary:
      'Layered script headline over clinical photography with dedicated bottom clinic address and contact markers.',
    imageSrc: withBase(
      'assets/aistudio/05eb7d78e4b7b32e54f49cffff5863bc_d245d2bd.jpg'
    ),
    imageAlt:
      'Blue healthcare awareness poster featuring clinician with stethoscope and layered display typography',
  },
];

export interface VideoSample {
  id: string;
  title: string;
  category: string;
  length: string;
  whereUsed: string;
  whatItExplains: string;
  videoSrc: string;
  thumbnailSrc: string;
  captionsSrc: string;
  aspectRatio: '16:9' | '9:16';
  industrySlug?: AiVideoIndustrySlug;
  result?: string;
}

export const VIDEO_SAMPLES: VideoSample[] = [
  {
    id: 'diabetes-care-explainer',
    title: 'Diabetes Care Clinic Explainer',
    category: 'Diabetes & Health Care',
    length: '30s',
    whereUsed: 'Clinic homepage, patient onboarding & social clips',
    whatItExplains:
      'Plain-language explainer moving from daily diabetes management overwhelm to clear clinic care plans and simple visit booking.',
    videoSrc: withBase(
      'assets/aistudio/Man_planning_at_kitchen_table_2969f572_a735a701.mp4'
    ),
    thumbnailSrc: withBase(
      'assets/aistudio/thumbs/diabetes-care-explainer.jpg'
    ),
    captionsSrc: withBase(
      'assets/aistudio/captions/diabetes-care-explainer.vtt'
    ),
    aspectRatio: '16:9',
    industrySlug: 'health',
  },
  {
    id: 'verdea-hydration-cream',
    title: 'Verdéa Botanical Hydration Cream',
    category: 'Online Shops & Skincare',
    length: '20s',
    whereUsed: 'Website hero, Instagram & online store campaigns',
    whatItExplains:
      'Calm botanical product showcase highlighting natural ingredients, whipped cream texture, and clean hydration messaging.',
    videoSrc: withBase(
      'assets/aistudio/Untitled_Scene_11-03_00_06_27_20261102190837_77d2e7f4.mp4'
    ),
    thumbnailSrc: withBase(
      'assets/aistudio/thumbs/verdea-hydration-cream.jpg'
    ),
    captionsSrc: withBase(
      'assets/aistudio/captions/verdea-hydration-cream.vtt'
    ),
    aspectRatio: '16:9',
    industrySlug: 'online-shops',
  },
  {
    id: 'hartman-cole-law',
    title: 'Hartman & Cole Law',
    category: 'Professional Practice',
    length: '20s',
    whereUsed: 'Practice landing page & consultation lead ads',
    whatItExplains:
      'Trust-focused brand commercial moving from client stress to calm reassurance, closing with an animated gold consultation call to action.',
    videoSrc: withBase(
      'assets/aistudio/create_ai_video_ads_for_4b02e8f6_3c3dd24f.mp4'
    ),
    thumbnailSrc: withBase('assets/aistudio/thumbs/hartman-cole-law.jpg'),
    captionsSrc: withBase('assets/aistudio/captions/hartman-cole-law.vtt'),
    aspectRatio: '16:9',
  },
  {
    id: 'maple-ridge-residences',
    title: 'Maple Ridge Residences',
    category: 'Real Estate & Property',
    length: '30s',
    whereUsed: 'Social reels, website showcase & private viewing invites',
    whatItExplains:
      'Guided architectural tour covering open living spaces, designer kitchen finishes, and private outdoor living with a clear booking prompt.',
    videoSrc: withBase(
      'assets/aistudio/I_will_create_AI_promo_5edb18ce_4b2344b1.mp4'
    ),
    thumbnailSrc: withBase('assets/aistudio/thumbs/maple-ridge-residences.jpg'),
    captionsSrc: withBase('assets/aistudio/captions/maple-ridge-residences.vtt'),
    aspectRatio: '16:9',
    industrySlug: 'real-estate',
  },
  {
    id: 'savore-gourmet-burger',
    title: 'Savoré Signature Gourmet',
    category: 'Cafes & Restaurants',
    length: '20s',
    whereUsed: 'Instagram Reels, TikTok & digital menu screens',
    whatItExplains:
      'Close-up culinary promo spotlighting fresh ingredients, craft preparation, and high-impact text captions built for muted autoplay feeds.',
    videoSrc: withBase(
      'assets/aistudio/Untitled_Scene_11-03_14_56_23_20261103095734_1c5e07c0.mp4'
    ),
    thumbnailSrc: withBase('assets/aistudio/thumbs/savore-gourmet-burger.jpg'),
    captionsSrc: withBase('assets/aistudio/captions/savore-gourmet-burger.vtt'),
    aspectRatio: '16:9',
    industrySlug: 'cafes',
  },
  {
    id: 'velocity-x1-footwear',
    title: 'Velocity X1 Performance',
    category: 'Online Shops & Footwear',
    length: '20s',
    whereUsed: 'Social video ads, product pages & launch campaigns',
    whatItExplains:
      'Dynamic product spotlight demonstrating breathable mesh construction, midsole cushioning, and real-world track movement.',
    videoSrc: withBase(
      'assets/aistudio/Untitled_Scene_11-03_00_33_52_20261102194413_4ab59636.mp4'
    ),
    thumbnailSrc: withBase('assets/aistudio/thumbs/velocity-x1-footwear.jpg'),
    captionsSrc: withBase('assets/aistudio/captions/velocity-x1-footwear.vtt'),
    aspectRatio: '16:9',
    industrySlug: 'online-shops',
  },
  {
    id: 'the-last-signal',
    title: 'The Last Signal',
    category: 'Cinematic Storytelling',
    length: '58s',
    whereUsed: 'YouTube showcase, teasers & storytelling reels',
    whatItExplains:
      'Full narrative trailer combining voiceover pacing, futuristic visual effects, and animated title typography.',
    videoSrc: withBase(
      'assets/aistudio/Last_Signal_20261104184317_0e461c4e.mp4'
    ),
    thumbnailSrc: withBase('assets/aistudio/thumbs/the-last-signal.jpg'),
    captionsSrc: withBase('assets/aistudio/captions/the-last-signal.vtt'),
    aspectRatio: '16:9',
  },
];

export interface AiVideoIndustryConfig {
  slug: AiVideoIndustrySlug;
  path: `/ai-videos/${AiVideoIndustrySlug}`;
  industryName: string;
  headline: string;
  description: string;
  ideas: string[];
  note?: string;
  whatsappUrl: string;
  videoIds: string[];
  published: boolean;
}

export const AI_VIDEO_INDUSTRIES: AiVideoIndustryConfig[] = [
  {
    slug: 'health',
    path: '/ai-videos/health',
    industryName: 'Health Clinics & Dietitians',
    headline: 'Videos that show patients what to expect',
    description:
      'Short, captioned videos for clinics, diabetes educators, dietitians and allied health, using only wording you approve.',
    ideas: [
      'What to expect at your first visit',
      'How to prepare for your appointment',
      'Meet the team',
      'How to book and what to bring',
      'Telehealth visits explained',
    ],
    note: 'I use wording you supply and approve and avoid treatment advice, results or health claims.',
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20health%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: ['diabetes-care-explainer'],
    published: true,
  },
  {
    slug: 'cafes',
    path: '/ai-videos/cafes',
    industryName: 'Cafes & Restaurants',
    headline: 'Videos that make people hungry for your menu',
    description:
      'Short, captioned clips for cafes and restaurants, ready for Instagram, TikTok and your website.',
    ideas: [
      'Dish spotlight',
      'Weekend or seasonal special',
      'Behind the counter',
      'Meet the team',
      'How to order and find us',
    ],
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20cafe%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: ['savore-gourmet-burger'],
    published: true,
  },
  {
    slug: 'real-estate',
    path: '/ai-videos/real-estate',
    industryName: 'Real Estate',
    headline: 'Videos that help your listings stand out',
    description:
      'Short, captioned videos for agents and agencies, from agent introductions to neighbourhood highlights.',
    ideas: [
      'Agent introduction',
      'Neighbourhood highlight',
      'Listing teaser using your own photos',
      'Open house announcement',
      'Agency overview',
    ],
    note: "I use your real photos and details. I don't alter properties or invent features.",
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20real%20estate%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: ['maple-ridge-residences'],
    published: true,
  },
  {
    slug: 'online-shops',
    path: '/ai-videos/online-shops',
    industryName: 'Online Shops',
    headline: 'Product videos that show how it works',
    description: '15-second product clips for Shopify and online stores.',
    ideas: [
      'Product demo',
      'Unboxing clip',
      'How it works in 15 seconds',
      'Seasonal promotion',
      'Delivery and returns explained',
    ],
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20online%20shop%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: ['verdea-hydration-cream', 'velocity-x1-footwear'],
    published: true,
  },
  {
    slug: 'fitness-beauty',
    path: '/ai-videos/fitness-beauty',
    industryName: 'Gyms & Salons',
    headline: 'Videos that fill your classes and appointments',
    description: 'Short, captioned promos for gyms, studios and salons.',
    ideas: [
      'Class or service promo',
      'Meet the trainer or stylist',
      'New offer announcement',
      'Studio tour',
      'How to book',
    ],
    note: 'No before-and-after claims or promised results.',
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20fitness%20and%20beauty%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: [],
    published: false,
  },
  {
    slug: 'dental-physio',
    path: '/ai-videos/dental-physio',
    industryName: 'Dental, Cosmetic & Physio',
    headline: 'Videos that help new patients feel at ease',
    description:
      'Short, captioned videos for dentists, cosmetic and physio clinics, using only wording you approve.',
    ideas: [
      'Meet the team',
      'What to expect at your first visit',
      'Clinic tour',
      'How to book',
      'Insurance and payment options explained',
    ],
    note: 'I use wording you supply and approve and avoid before-and-after images, patient testimonials and treatment claims.',
    whatsappUrl:
      'https://wa.me/2348140841284?text=Hi%20Raphael%2C%20I%20saw%20your%20clinic%20video%20sample%20and%20I%27d%20like%20a%20free%20sample%20for%20my%20business.',
    videoIds: [],
    published: false,
  },
];

export const PUBLISHED_AI_VIDEO_INDUSTRIES = AI_VIDEO_INDUSTRIES.filter(
  (industry) => industry.published && industry.videoIds.length > 0
);

export const MORE_VIDEO_SAMPLES = VIDEO_SAMPLES.filter(
  (sample) => !sample.industrySlug
);

export function getIndustryVideos(
  industry: AiVideoIndustryConfig
): VideoSample[] {
  return industry.videoIds
    .map((id) => VIDEO_SAMPLES.find((video) => video.id === id))
    .filter((video): video is VideoSample => Boolean(video));
}

export function getPublishedIndustryByPath(
  path: RoutePath
): AiVideoIndustryConfig | undefined {
  return PUBLISHED_AI_VIDEO_INDUSTRIES.find(
    (industry) => industry.path === path
  );
}
