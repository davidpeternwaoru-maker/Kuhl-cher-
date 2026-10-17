export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pillars", href: "/pillars" },
  { label: "Interventions", href: "/interventions" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  email: "hello@kuhl-cher.com",
  phone: "", // TODO: add the real phone number, e.g. "+234 800 000 0000"
  location: "Ikoyi, Lagos, Nigeria",
};

// Company details. Fill these in when the client sends them; empty values stay hidden on the site.
export const COMPANY = {
  legalName: "", // TODO: full registered name, e.g. "Kuhl-Cher Consulting Limited"
  rc: "", // TODO: CAC registration number, e.g. "RC 1234567"
  address: "", // TODO: full street address in Ikoyi, Lagos
};

export const PILLARS = [
  {
    n: "01",
    name: "Process",
    image: "https://images.unsplash.com/photo-1573167101669-476636b96cea?w=2000&q=80",
    tagline: "The operating rhythm of the business",
    short: "The operating rhythm of the business.",
    body: "How work gets done, decisions get made, and consistency is maintained as the organization grows. We help leaders design processes rigorous enough to scale, yet flexible enough to bend without breaking when circumstances shift.",
  },
  {
    n: "02",
    name: "People",
    image: "https://images.unsplash.com/photo-1739298061709-cfc57e6b620e?w=2000&q=80",
    tagline: "The individuals who carry culture forward",
    short: "The individuals who carry culture forward.",
    body: "The individuals who carry culture forward every day. How they’re hired, developed, led, and aligned around a shared purpose. We help founders and executives build teams that don’t just execute strategy, but embody the culture, especially when things get hard.",
  },
  {
    n: "03",
    name: "Technology",
    image: "/images/technology.webp",
    tagline: "The tools and systems that enable adaptation",
    short: "The tools and systems that enable adaptation.",
    body: "The tools and systems that enable an organization to operate efficiently and adapt quickly. We help businesses evaluate where technology strengthens their culture and operations, and where over-reliance on it can quietly erode the human judgment culture depends on.",
  },
  {
    n: "04",
    name: "Finance",
    image: "https://images.unsplash.com/photo-1730342754574-bb4a9aa8ad30?w=2000&q=80",
    tagline: "The discipline that buys you runway",
    short: "The discipline that buys you runway.",
    body: [
      "We help leaders build financial practices rooted in long-term thinking rather than short-term performance, giving the organization the runway to withstand uncertainty and remain true to its culture when disruption hits.",
      "Our advisors interpret your financial data through the lens of organizational culture, identifying where culture strengthens your results and where it may be undermining them.",
      "Where a funding gap exists, we help close it by connecting you with the right funding partner.",
    ],
  },
];

export const INTERVENTIONS = [
  {
    id: "csi",
    tag: "2 days",
    name: "The C.S.I Course",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=2000&q=80",
    short: "Diagnose the culture you really have, align it with strategy, measure the impact.",
  },
  {
    id: "convergence",
    tag: "1 day",
    name: "The Convergence Seminar",
    image: "https://images.unsplash.com/photo-1754373695753-1069438691f8?w=2000&q=80",
    short: "A real founder’s story of leading a business through disruption.",
  },
  {
    id: "advisory",
    tag: "12 months",
    name: "Culture Advisory",
    image: "https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=2000&q=80",
    short: "From structured diagnosis to twelve months of performance tracking.",
  },
];

export const VALUES = [
  {
    n: "01",
    name: "Integrity",
    line: "Honest counsel over comfortable answers.",
    body: "We believe culture can’t be manufactured or copied from a template. It has to be true to who an organization actually is. We help leaders uncover and articulate the culture that’s genuinely theirs, rather than imposing a generic model of what a “strong culture” is supposed to look like. Integrity is also how we operate as a firm: honest counsel over comfortable answers, even when the truth about an organization’s culture is difficult to hear.",
  },
  {
    n: "02",
    name: "Innovation",
    line: "Disruption doesn’t wait. Neither do we.",
    body: "Disruption doesn’t wait for organizations to catch up, and neither do we. We continually rethink how culture, process, people, technology, and finance intersect; because the playbook that worked yesterday isn’t guaranteed to work tomorrow. We bring fresh thinking to old problems, and we help our clients build the kind of adaptive culture that keeps innovating long after our engagement ends.",
  },
  {
    n: "03",
    name: "Impact",
    line: "Measured by what changes, not by what’s in a report.",
    body: "We measure our work by what changes, not by what’s written in a report. Every engagement is built around outcomes that matter. An organization that’s more resilient, a leadership team that’s more aligned, a culture that visibly shows up in how people work under pressure. If it doesn’t move the business forward, it’s not the work we do.",
  },
  {
    n: "04",
    name: "Client-Centeredness",
    line: "We start by listening, not prescribing.",
    body: "Every organization’s culture is shaped by its own history, people, and pressures. So we start by listening, not prescribing. We tailor our approach to each client’s specific context rather than forcing a one-size-fits-all framework, and we stay invested in outcomes long after the initial recommendations are delivered. Our clients’ success is the only real measure of ours.",
  },
];

export type Post = {
  slug: string;
  category: "Culture" | "Resilience" | "Leadership" | "Finance";
  title: string;
  author: string;
  date: string;
  read: string;
  image: string;
  excerpt: string;
  body?: { type: "p" | "pull"; text: string }[];
};

export const POSTS: Post[] = []; // The client will write the first posts herself.

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1754373695753-1069438691f8?w=2000&q=80", caption: "The Convergence Seminar", tall: true },
  { src: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=2000&q=80", caption: "In session" },
  { src: "https://images.unsplash.com/photo-1663743669853-2ac159c92445?w=2000&q=80", caption: "Working sessions" },
  { src: "https://images.unsplash.com/photo-1573167101669-476636b96cea?w=2000&q=80", caption: "The C.S.I Course", tall: true },
  { src: "https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=2000&q=80", caption: "Honest counsel" },
  { src: "https://images.unsplash.com/photo-1739298061709-cfc57e6b620e?w=2000&q=80", caption: "Leadership offsite", tall: true },
  { src: "https://images.unsplash.com/photo-1739287088753-73a9b8b771bc?w=2000&q=80", caption: "The room where it happens", tall: true },
  { src: "/images/office.webp", caption: "Culture, operational" },
  { src: "/images/towers.webp", caption: "Built for the long term" },
];
