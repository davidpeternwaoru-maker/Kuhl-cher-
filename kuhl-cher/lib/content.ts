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
  location: "Lagos, Nigeria",
};

export const STATS = [
  { prefix: "", value: 3000, suffix: "+", label: "Entrepreneurs supported across programmes & trainings" },
  { prefix: "₦", value: 192, suffix: "M", label: "Mobilized for small business funding" },
  { prefix: "$", value: 10, suffix: "M+", label: "Raised by clients using investment-ready documentation" },
  { prefix: "", value: 300, suffix: "+", label: "Investor-ready business documents produced" },
  { prefix: "", value: 50, suffix: "+", label: "Technology clients managed across Africa" },
  { prefix: "", value: 95, suffix: "%", label: "Client satisfaction & repeat engagement rate" },
];

export const PILLARS = [
  {
    n: "01",
    name: "Process",
    image: "/images/process.webp",
    tagline: "The operating rhythm of the business",
    short: "The operating rhythm of the business.",
    body: "How work gets done, decisions get made, and consistency is maintained as the organization grows. We help leaders design processes rigorous enough to scale, yet flexible enough to bend without breaking when circumstances shift.",
  },
  {
    n: "02",
    name: "People",
    image: "/images/people.webp",
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
    image: "/images/finance.webp",
    tagline: "The discipline that buys you runway",
    short: "The discipline that buys you runway.",
    body: "The financial discipline and foresight that give an organization the runway to weather uncertainty. We help leaders build financial practices rooted in long-term thinking, not just short-term performance, so the business has the resources to stay true to its culture when disruption hits.",
  },
];

export const INTERVENTIONS = [
  {
    id: "csi",
    tag: "2 days",
    name: "The C.S.I Course",
    image: "/images/workshop.webp",
    short: "Diagnose the culture you really have, align it with strategy, measure the impact.",
  },
  {
    id: "convergence",
    tag: "1 day",
    name: "The Convergence Seminar",
    image: "/images/seminar.webp",
    short: "A real founder’s story of using culture to survive disruption.",
  },
  {
    id: "advisory",
    tag: "12 months",
    name: "Culture Advisory",
    image: "/images/advisory.webp",
    short: "From structured diagnosis to twelve months of performance tracking.",
  },
];

export const VALUES = [
  {
    n: "01",
    name: "Authenticity",
    line: "Honest counsel over comfortable answers.",
    body: "We believe culture can’t be manufactured or copied from a template. It has to be true to who an organization actually is. We help leaders uncover and articulate the culture that’s genuinely theirs, rather than imposing a generic model of what a “strong culture” is supposed to look like. Authenticity is also how we operate as a firm; honest counsel over comfortable answers, even when the truth about an organization’s culture is difficult to hear.",
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

export const POSTS: Post[] = [
  {
    slug: "strongest-quarter-cultural-risk",
    category: "Resilience",
    title: "Why your strongest quarter can hide your biggest cultural risk",
    author: "Aramide Akisanya",
    date: "June 2026",
    read: "6 min read",
    image: "/images/towers.webp",
    excerpt:
      "Good numbers are a poor proxy for cultural health. The habits that quietly corrode an organization form fastest when nobody feels the need to look.",
    body: [
      { type: "p", text: "Good numbers are a poor proxy for cultural health. A record quarter tells you the market rewarded what you sold. It tells you almost nothing about whether the organization that sold it is holding together — or quietly coming apart." },
      { type: "p", text: "The habits that corrode an organization form fastest when nobody feels the need to look. Success suspends scrutiny. Decisions that would have been questioned in a hard quarter sail through in a good one. Small exceptions become precedents. The gap between the culture on the wall and the culture in the room widens — and the numbers keep saying everything is fine." },
      { type: "pull", text: "Success suspends scrutiny. The strongest quarter is precisely when culture stops being examined." },
      { type: "p", text: "This is why we treat culture with the same rigour as a balance sheet. A lender doesn’t stop reading the numbers because last year was good; they read them because the future is uncertain. Culture deserves the same discipline: a structured look at how decisions actually get made, who actually gets promoted, and what actually happens when someone raises an uncomfortable truth." },
      { type: "p", text: "Across the four pillars — process, people, technology, and finance — the early signals are visible long before they show up in performance. Processes that only work because two specific people compensate for them. Financial discipline that relaxes with every win. Technology decisions made for speed that quietly remove human judgment from the loop." },
      { type: "p", text: "The organizations that come through disruption stronger aren’t the ones with the best quarter behind them. They’re the ones that kept examining their culture when the numbers said they didn’t have to." },
    ],
  },
  {
    slug: "four-pillars-fail-in-sequence",
    category: "Leadership",
    title: "The four pillars don’t fail at once. They fail in sequence.",
    author: "POA",
    date: "May 2026",
    read: "8 min read",
    image: "/images/process.webp",
    excerpt: "Process, people, technology and finance rarely break together. Knowing the order is how you catch it early.",
  },
  {
    slug: "what-a-culture-diagnostic-measures",
    category: "Culture",
    title: "Honest counsel: what a culture diagnostic actually measures",
    author: "Aramide Akisanya",
    date: "April 2026",
    read: "5 min read",
    image: "/images/writing.webp",
    excerpt: "Not the values on the wall. The decisions, behaviours and incentives that show what a culture really is.",
  },
  {
    slug: "runway-is-a-cultural-number",
    category: "Finance",
    title: "Runway is a cultural number: reading a balance sheet for resilience",
    author: "Aramide Akisanya",
    date: "March 2026",
    read: "7 min read",
    image: "/images/finance.webp",
    excerpt: "How financial discipline decides whether a business can stay true to its culture when disruption hits.",
  },
  {
    slug: "what-survives-the-crisis",
    category: "Resilience",
    title: "What survives the crisis is what you practiced before it",
    author: "POA",
    date: "February 2026",
    read: "6 min read",
    image: "/images/team-meeting.webp",
    excerpt: "Culture under pressure is only ever the culture you rehearsed when things were calm.",
  },
];

export const GALLERY = [
  { src: "/images/seminar.webp", caption: "The Convergence Seminar", tall: true },
  { src: "/images/workshop.webp", caption: "In session" },
  { src: "/images/writing.webp", caption: "Working sessions" },
  { src: "/images/process.webp", caption: "The C.S.I Course", tall: true },
  { src: "/images/advisory.webp", caption: "Honest counsel" },
  { src: "/images/people.webp", caption: "Leadership offsite", tall: true },
  { src: "/images/team-meeting.webp", caption: "The room where it happens", tall: true },
  { src: "/images/office.webp", caption: "Culture, operational" },
  { src: "/images/towers.webp", caption: "Lagos" },
];
