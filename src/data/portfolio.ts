import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Palette,
  Share2,
  PenTool,
  Megaphone,
  Utensils,
  GraduationCap,
  Film,
  LayoutTemplate,
  Target,
  Search,
  BarChart3,
  Users,
  MessageSquare,
  Clock,
  Brain,
  Building2,
  Rocket,
  Trophy,
  BookOpen,
  Award,
} from "lucide-react";

import chandniPortrait from "@/assets/chandni-portrait.jpg";
import chandniAlt from "@/assets/chandni-alt.jpeg";
import styleforgeLogo from "@/assets/styleforge-logo.png";
import voxabridgeLogo from "@/assets/voxabridge-logo.png";
// Shashwat Education admissions creatives (real work by Chandni).
import shashwatPoster from "@/assets/creative-1.png";
import shashwatPoster2 from "@/assets/creative-2.png";

/* ------------------------------------------------------------------ *
 *  Profile & contact
 * ------------------------------------------------------------------ */
export const profile = {
  name: "Chandni Soni",
  firstName: "Chandni",
  role: "Marketing Professional & Brand Strategist",
  location: "United Kingdom",
  email: "chandnisoni269@gmail.com",
  linkedin: "https://www.linkedin.com/in/chandni-soni-269cs",
  cvPath: "/Chandni-Soni-CV.pdf",
  portrait: chandniPortrait,
  portraitAlt: chandniAlt,
  available: true,
};

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, handle: "/in/chandnisoni" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];

/* ------------------------------------------------------------------ *
 *  Navigation
 * ------------------------------------------------------------------ */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ *
 *  Hero
 * ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Marketing · Branding · Content",
  headlineLead: "Helping brands grow through",
  headlineAccent: "creative marketing.",
  subheadline:
    "Marketing Professional, Brand Strategist and Content Creator based in the UK — turning ideas into brands people remember.",
  stats: [
    { value: 4, suffix: "+", label: "Brands shaped" },
    { value: 3, suffix: "", label: "Years in marketing" },
    { value: 2, suffix: "", label: "Countries served" },
    { value: 100, suffix: "%", label: "Client-first" },
  ],
};

/* ------------------------------------------------------------------ *
 *  About
 * ------------------------------------------------------------------ */
export const about = {
  kicker: "About",
  heading: "A commerce mind with a creative heart.",
  paragraphs: [
    "I started in commerce — learning how businesses actually make money before I ever touched a design file. That grounding is why my marketing always ladders back to a commercial goal, not just a pretty post.",
    "An MSc in Digital & Strategic Marketing from the University of Bradford sharpened the strategy: audience research, positioning, campaign planning and the data behind what works. I fell for branding because it's where strategy and storytelling meet.",
    "Day to day I work at Amazon UK, a genuinely fast-paced, customer-obsessed environment that's made me sharper on standards, ownership and delivering under pressure. Alongside it, I partner with clients through Solverb IT Solutions — building brand identities, running social media and shipping creative that moves the needle.",
    "Freelancing is where I became truly creative: logos, menus, reels, campaigns, whole visual identities — often end to end. I love the moment a scattered idea becomes a brand a business is proud to put its name on.",
  ],
  highlights: [
    { icon: Building2, label: "Amazon UK", detail: "Customer-obsessed, fast-paced operations" },
    { icon: GraduationCap, label: "MSc Marketing", detail: "University of Bradford" },
    { icon: Megaphone, label: "Client work", detail: "Branding & social via Solverb IT" },
    { icon: Palette, label: "End-to-end creative", detail: "Identity, content & campaigns" },
  ],
};

/* ------------------------------------------------------------------ *
 *  Journey timeline
 * ------------------------------------------------------------------ */
export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  icon: LucideIcon;
};

export const timeline: TimelineItem[] = [
  {
    period: "Foundation",
    title: "Bachelor of Commerce",
    org: "Gujarat University",
    description:
      "Built a commercial foundation in business, finance and markets — the lens I still bring to every campaign.",
    icon: BookOpen,
  },
  {
    period: "Specialisation",
    title: "MSc Digital & Strategic Marketing",
    org: "University of Bradford",
    description:
      "Moved into strategy: consumer behaviour, brand positioning, digital campaigns and marketing analytics.",
    icon: GraduationCap,
  },
  {
    period: "First role",
    title: "Junior Marketing Executive",
    org: "Multipz Technology",
    description:
      "Hands-on with SEO, social media, banners, flyers and research — where I learned to ship creative at pace.",
    icon: Rocket,
  },
  {
    period: "Now",
    title: "Operations at Amazon UK",
    org: "Amazon UK",
    description:
      "A high-standards, customer-first environment that sharpened my ownership, problem-solving and delivery.",
    icon: Building2,
  },
  {
    period: "Now",
    title: "Marketing Manager & Client Work",
    org: "Solverb IT Solutions",
    description:
      "Leading branding, social media and digital campaigns for UK and international clients.",
    icon: Megaphone,
  },
  {
    period: "Ahead",
    title: "Future Marketing Leader",
    org: "The next chapter",
    description:
      "Growing into one of the brand strategists businesses trust to build identities that last.",
    icon: Trophy,
  },
];

/* ------------------------------------------------------------------ *
 *  Case studies
 * ------------------------------------------------------------------ */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Brand" | "Social" | "Design" | "Campaign";
  industry: string;
  year: string;
  accent: string;
  logo?: StaticImageData;
  cover?: StaticImageData;
  role: string[];
  summary: string;
  note?: string;
  challenge: string;
  research: string;
  strategy: string;
  creativeProcess: string;
  marketingThinking: string;
  result: string;
  outcome: string;
  lessons: string;
  tools: string[];
  gallery: { src?: StaticImageData; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "styleforge-ai",
    title: "StyleForge AI",
    client: "StyleForge AI",
    category: "Brand",
    industry: "Fashion-Technology · UK",
    year: "2025",
    accent: "#6366f1",
    logo: styleforgeLogo,
    role: [
      "Marketing Strategy",
      "Brand Identity",
      "Creative Assets",
      "Landing Page Content",
      "Social Media",
      "Brand Positioning",
    ],
    note: "StyleForge AI is founded by Aakash. I led the marketing, branding, social media and creative side of the project.",
    summary:
      "Shaped the content-led brand presence for an AI fashion-styling product — from positioning to social to landing-page copy.",
    challenge:
      "StyleForge AI needed to feel premium yet approachable: technical enough to signal real AI, human enough to win a style-conscious audience. The brand had a product but not yet a consistent voice or visual presence across channels.",
    research:
      "I studied how leading fashion-tech and AI products talk to their audiences — where they lean technical, where they lean aspirational — and mapped the gap StyleForge could own: effortless, personal styling powered by AI.",
    strategy:
      "Positioned StyleForge as a confident style companion rather than a cold tool. Defined a brand voice, a content pillar system for social, and messaging for the landing page that led with the outcome for the user, not the technology.",
    creativeProcess:
      "Built a cohesive visual language and a library of social templates, then produced short-form video and posts to a repeatable calendar — keeping colour, type and tone consistent so every touchpoint felt like one brand.",
    marketingThinking:
      "Every asset tied back to a funnel stage: awareness content to grow reach, consideration content to explain the value, and landing-page copy engineered to convert curiosity into sign-ups.",
    result:
      "A clear, consistent brand presence across social and web that turned an AI concept into a content-led fashion identity ready to scale.",
    outcome:
      "A recognisable, repeatable brand system the founder can keep growing — with messaging, templates and a content rhythm already in place.",
    lessons:
      "For AI products, lead with the human outcome. The audience buys the confidence of getting dressed well, not the model behind it.",
    tools: ["Canva", "CapCut", "Content Strategy"],
    gallery: [
      { src: styleforgeLogo, caption: "StyleForge AI brand mark" },
      { caption: "Social content templates — upload later" },
      { caption: "Landing page content system — upload later" },
      { caption: "Short-form video stills — upload later" },
    ],
  },
  {
    slug: "shree-madhav-restaurant",
    title: "Shree Madhav Restaurant",
    client: "Shree Madhav Restaurant",
    category: "Brand",
    industry: "Hospitality · UK",
    year: "2024",
    accent: "#e0793a",
    role: [
      "Logo",
      "Brand Identity",
      "Menu Design",
      "Restaurant Branding",
      "Social Media",
      "Campaign Design",
    ],
    summary:
      "A complete restaurant identity built from scratch — logo, print-ready menus, campaign artwork and an ongoing social presence.",
    challenge:
      "A restaurant with great food but no cohesive brand needed a warm, appetising identity that worked from the sign above the door to the phone in a customer's hand — and drove local footfall.",
    research:
      "Looked at how the most-loved local restaurants build trust and cravings on social, and what makes a menu both beautiful and easy to order from. Grounded the palette in warmth, appetite and hospitality.",
    strategy:
      "Created a single visual system that scaled across every surface — logo, menu, banners and social — so the brand felt consistent and premium wherever a diner met it, with campaign moments around key days to drive visits.",
    creativeProcess:
      "Designed the logo and brand marks first, then extended them into print-ready menus, promotional banners and a set of branded social templates the team could reuse without losing consistency.",
    marketingThinking:
      "Social content was built to do a job: showcase dishes, prompt bookings and keep the restaurant top-of-mind for local diners deciding where to eat tonight.",
    result:
      "A confident, consistent brand voice across menu, print and social — a restaurant that finally looked as good as it tastes.",
    outcome:
      "A reusable identity and template kit that lets the restaurant keep marketing itself without starting from a blank page each time.",
    lessons:
      "In hospitality, consistency is the brand. The logo matters, but the system that keeps every menu and post on-brand matters more.",
    tools: ["Canva", "Logo Design", "Print Design"],
    gallery: [
      { caption: "Logo & brand marks — upload later" },
      { caption: "Print-ready menu — upload later" },
      { caption: "Promotional banners — upload later" },
      { caption: "Social media templates — upload later" },
    ],
  },
  {
    slug: "voxabridge",
    title: "VoxaBridge",
    client: "VoxaBridge",
    category: "Design",
    industry: "Technology · Global",
    year: "2024",
    accent: "#3a7ca5",
    logo: voxabridgeLogo,
    role: ["Logo", "Brand Identity", "Cover Visuals", "Marketing Assets", "Website Graphics"],
    summary:
      "A clean, enterprise-ready identity for a global live-translation meeting platform — built to signal clarity, trust and scale.",
    challenge:
      "VoxaBridge operates where AI meets enterprise communication. It needed a forward-looking brand that felt trustworthy to business buyers across multiple markets — professional without being cold.",
    research:
      "Reviewed how global SaaS and communication brands convey reliability and reach, then defined a visual direction built on clarity: confident type, a considered palette and a mark that reads instantly at any size.",
    strategy:
      "Anchored the identity in 'clarity across borders' — a logo and system that communicate enterprise confidence and global reach, ready to travel across web, social and marketing collateral.",
    creativeProcess:
      "Designed the primary logo and brand mark, then built cover visuals, profile assets and a supporting template set so the brand stays coherent everywhere it appears.",
    marketingThinking:
      "For enterprise, trust is the whole funnel. Every visual was chosen to reduce perceived risk and make a global platform feel established and dependable.",
    result:
      "A crisp, scalable identity that gives an ambitious platform the visual credibility to sell into enterprise markets.",
    outcome:
      "A cohesive brand kit — logo, covers and marketing assets — that presents VoxaBridge as global, capable and built for scale.",
    lessons:
      "Enterprise design is restraint. Clarity and consistency signal competence far more than decoration ever will.",
    tools: ["Canva", "Logo Design", "Brand Systems"],
    gallery: [
      { src: voxabridgeLogo, caption: "Primary logo mark" },
      { caption: "Cover & profile visuals — upload later" },
      { caption: "Marketing assets — upload later" },
      { caption: "Website graphics — upload later" },
    ],
  },
  {
    slug: "shashwat-education",
    title: "Shashwat Education",
    client: "Shashwat Education Institute",
    category: "Campaign",
    industry: "Education",
    year: "2024",
    accent: "#c0392b",
    cover: shashwatPoster,
    role: [
      "Brand Identity",
      "Admissions Campaign",
      "Social Media Marketing",
      "Creative Design",
    ],
    summary:
      "A credible, approachable brand and admissions campaign for an education institute — built to attract and reassure prospective students.",
    challenge:
      "Shashwat Education needed a brand that felt trustworthy to parents and students alike, plus a steady content programme and an admissions push to convert interest into enrolments.",
    research:
      "Explored what makes families choose one institute over another — credibility, warmth and clear outcomes — and shaped a brand and message set around exactly those signals.",
    strategy:
      "Built a professional yet warm identity, then wrapped it in an admissions campaign: social creatives, messaging and a content calendar timed to the decision window.",
    creativeProcess:
      "Designed institutional branding and style guidelines, then produced social creatives and short-form video to a regular cadence, plus reusable templates for future intakes.",
    marketingThinking:
      "Admissions is a considered decision. Content was sequenced to build trust first, then make the next step to enquire feel easy and low-risk.",
    result:
      "A brand institutions trust and students connect with — professional, warm and built for growth across intakes.",
    outcome:
      "An identity and content system the institute can reuse every admissions cycle, keeping the brand consistent as it grows.",
    lessons:
      "In education, trust is earned before it's asked for. Warmth and consistency do more for enrolments than any single ad.",
    tools: ["Canva", "CapCut", "Campaign Planning"],
    gallery: [
      { src: shashwatPoster, caption: "Admissions campaign — key visual" },
      { src: shashwatPoster2, caption: "Admissions creative — variant" },
      { caption: "Social media reels & posts — upload later" },
      { caption: "Branded templates — upload later" },
    ],
  },
];

/* ------------------------------------------------------------------ *
 *  Services
 * ------------------------------------------------------------------ */
export type Service = { icon: LucideIcon; title: string; description: string };

export const services: Service[] = [
  { icon: Sparkles, title: "Brand Identity", description: "Logos, colour, type and voice — a complete system that makes a business unmistakable." },
  { icon: Share2, title: "Social Media Marketing", description: "Strategy, content and calendars that grow reach and turn followers into customers." },
  { icon: PenTool, title: "Content Creation", description: "Scroll-stopping posts, graphics and copy crafted to a consistent brand look." },
  { icon: Palette, title: "Logo Design", description: "Distinctive, scalable marks that read instantly — from favicon to shopfront." },
  { icon: LayoutTemplate, title: "Menu Design", description: "Print-ready menus that look premium and make ordering effortless." },
  { icon: Utensils, title: "Restaurant Branding", description: "End-to-end hospitality identities — sign, menu, social and campaigns." },
  { icon: GraduationCap, title: "Education Marketing", description: "Admissions campaigns and content that build trust and drive enrolments." },
  { icon: Film, title: "Short-form Video Editing", description: "Reels and shorts edited in CapCut to keep brands active and engaging." },
  { icon: LayoutTemplate, title: "Canva Design", description: "Reusable template kits so a brand stays on-point long after handover." },
  { icon: Megaphone, title: "Campaign Planning", description: "Goal-led campaigns mapped to the funnel — from awareness to conversion." },
];

/* ------------------------------------------------------------------ *
 *  Skills (grouped)
 * ------------------------------------------------------------------ */
export type SkillGroup = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  skills: { label: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Marketing",
    icon: Target,
    blurb: "Strategy that ties creative back to a commercial goal.",
    skills: [
      { label: "Digital Marketing", level: 92 },
      { label: "Social Media Strategy", level: 94 },
      { label: "Content Marketing", level: 90 },
      { label: "SEO", level: 82 },
      { label: "Campaign Planning", level: 88 },
    ],
  },
  {
    name: "Design",
    icon: Palette,
    blurb: "Hands-on craft across identity and content.",
    skills: [
      { label: "Canva", level: 95 },
      { label: "CapCut", level: 90 },
      { label: "Logo Design", level: 86 },
      { label: "Banners & Menus", level: 88 },
      { label: "Brand Identity", level: 90 },
    ],
  },
  {
    name: "Professional",
    icon: Users,
    blurb: "The delivery skills that keep clients coming back.",
    skills: [
      { label: "Client Communication", level: 93 },
      { label: "Deadline Management", level: 92 },
      { label: "Team Coordination", level: 88 },
      { label: "Problem Solving", level: 90 },
    ],
  },
  {
    name: "AI & Tools",
    icon: Brain,
    blurb: "Using AI to create faster and smarter.",
    skills: [
      { label: "ChatGPT", level: 90 },
      { label: "Claude", level: 88 },
      { label: "AI Content Creation", level: 88 },
      { label: "Prompt Engineering", level: 84 },
    ],
  },
];

/* Quick skill chips for the command menu / marquee. */
export const skillChips = [
  "Marketing", "Branding", "Canva", "CapCut", "Content Strategy", "SEO",
  "Social Media", "Creative Thinking", "Communication", "Client Management",
  "Analytics", "Campaign Planning", "Visual Storytelling", "Prompt Engineering",
];

/* ------------------------------------------------------------------ *
 *  Experience
 * ------------------------------------------------------------------ */
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  accent: string;
  summary: string;
  points: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Amazon UK",
    role: "Operations",
    period: "Present",
    location: "United Kingdom",
    type: "Current",
    accent: "#ff9900",
    summary:
      "A fast-paced, customer-obsessed environment that sharpens the transferable skills every marketer needs.",
    points: [
      "Deliver to high operational standards in a fast-paced, customer-focused setting.",
      "Collaborate across teams to hit shared targets under time pressure.",
      "Apply structured problem-solving and ownership to keep standards high.",
      "Manage time and priorities to consistently meet deadlines.",
    ],
    skills: ["Teamwork", "Problem Solving", "Time Management", "Customer Focus"],
  },
  {
    company: "Solverb IT Solutions",
    role: "Marketing Manager (Freelance / Part-time)",
    period: "Present",
    location: "UK & International clients",
    type: "Marketing",
    accent: "#2563eb",
    summary:
      "Leading branding, social media and digital campaigns for clients across the UK and abroad.",
    points: [
      "Own social media strategy, branding and creative direction for multiple clients.",
      "Design brand assets and graphics — logos, banners, menus and templates.",
      "Plan and run digital campaigns and content marketing programmes.",
      "Manage client communication end to end, from brief to delivery.",
    ],
    skills: ["Brand Strategy", "Social Media", "Graphic Design", "Client Management", "Campaigns"],
  },
  {
    company: "Multipz Technology",
    role: "Junior Marketing Executive",
    period: "Earlier",
    location: "Marketing team",
    type: "Foundation",
    accent: "#8b5cf6",
    summary:
      "Where the fundamentals were built — shipping SEO, social and creative at pace.",
    points: [
      "Created social media campaigns and digital creatives.",
      "Worked on SEO and on-page optimisation to grow visibility.",
      "Designed banners, flyers and promotional material.",
      "Ran market research to inform content and creative decisions.",
    ],
    skills: ["SEO", "Social Media", "Design", "Research", "Digital Creatives"],
  },
];

/* ------------------------------------------------------------------ *
 *  Education & certificates
 * ------------------------------------------------------------------ */
export const education = [
  {
    degree: "MSc Digital & Strategic Marketing",
    school: "University of Bradford",
    detail: "Strategy, consumer behaviour, digital campaigns and marketing analytics.",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Commerce",
    school: "Gujarat University",
    detail: "Foundation in business, finance and markets — the commercial lens behind the creative.",
    icon: BookOpen,
  },
];

export const certificates = [
  {
    title: "Advanced SEO Certification",
    issuer: "Google",
    icon: Search,
    detail: "Technical and content SEO for measurable organic growth.",
  },
  {
    title: "Digital Marketing & Social Media",
    issuer: "HubSpot Academy",
    icon: Award,
    detail: "Inbound strategy, content and social media marketing.",
  },
];

/* ------------------------------------------------------------------ *
 *  Resume quick facts
 * ------------------------------------------------------------------ */
export const quickFacts = [
  { icon: Target, label: "Focus", value: "Brand & Digital Marketing" },
  { icon: Building2, label: "Currently", value: "Amazon UK + Client Work" },
  { icon: GraduationCap, label: "Education", value: "MSc Marketing, Bradford" },
  { icon: Megaphone, label: "Open to", value: "Roles & Freelance Projects" },
];

/* ------------------------------------------------------------------ *
 *  Testimonials (placeholders — to be replaced with real quotes)
 * ------------------------------------------------------------------ */
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chandni took our brand from scattered to unmistakable. Every asset felt considered — and our social finally looked like one brand.",
    name: "Client Name",
    title: "Founder · Add company",
    initials: "C",
    placeholder: true,
  },
  {
    quote:
      "Reliable, creative and genuinely strategic. She understood the business goal first, then designed for it. A pleasure to work with.",
    name: "Client Name",
    title: "Marketing Lead · Add company",
    initials: "C",
    placeholder: true,
  },
  {
    quote:
      "The identity and content she delivered gave us the confidence to show up professionally everywhere. Highly recommended.",
    name: "Client Name",
    title: "Director · Add company",
    initials: "C",
    placeholder: true,
  },
];

/* Icons re-exported for convenience in sections. */
export const icons = {
  BarChart3, MessageSquare, Clock, Trophy, Award,
};
