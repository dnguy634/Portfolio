export const profile = {
  name: 'Daniel Nguyen',
  role: 'Computer Science + Business Student',
  subtitle:
    'Interested in Program Management, Product, Software, and Technology',
  email: 'nguyendkdaniel@gmail.com',
  phone: '(657) 363-2635',
  linkedin: 'https://www.linkedin.com/in/daniel-nguyen-a495b720b/',
  github: 'https://github.com/dnguy634',
  resume: '#',
  location: 'Riverside, CA',
}

export const stats = [
  { label: 'CS + Business', value: 'Dual Focus', hint: 'UCR, Class of 2026' },
  { label: 'Program Management', value: 'Intern', hint: 'Safran Cabin' },
  { label: 'Shipped Projects', value: '6+', hint: 'Product & software' },
  { label: 'GPA', value: '3.6', hint: 'UC Riverside' },
]

export const experience = [
  {
    company: 'Safran Cabin',
    role: 'Program Management Intern',
    period: '2025 — Present',
    location: 'Anaheim, CA',
    summary:
      'Support program leads on commercial aircraft interior programs — tracking schedule risk, coordinating cross-functional deliverables, and translating engineering status into program-level reporting.',
    bullets: [
      'Built and maintained schedule trackers across engineering, supply chain, and quality workstreams for active aircraft cabin programs',
      'Ran weekly cross-functional syncs, surfacing schedule risks and owning action items to closure',
      'Created executive-ready status reporting that reduced ambiguity in program reviews',
    ],
    tags: ['Program Management', 'Stakeholder Comms', 'Risk Tracking'],
  },
  {
    company: 'Treevah',
    role: 'Product & Software Intern',
    period: '2024 — 2025',
    location: 'Remote',
    summary:
      'Worked across product and engineering on an early-stage startup — scoping features, writing requirements, and shipping front-end functionality used by real customers.',
    bullets: [
      'Defined feature requirements and acceptance criteria alongside founders, translating vague asks into shippable scope',
      'Built and shipped front-end features end-to-end, working directly with engineers on implementation',
      'Ran lightweight user feedback loops to prioritize the roadmap with limited resources',
    ],
    tags: ['Product Management', 'Roadmapping', 'Front-End'],
  },
  {
    company: "NASA L'SPACE",
    role: 'Project Coordinator',
    period: '2024',
    location: 'Remote · NASA-Sponsored',
    summary:
      "Coordinated a simulated aerospace concept-development project for NASA's L'Space Program, managing scope, timeline, and team deliverables under a mission-style review process.",
    bullets: [
      'Coordinated a distributed team through a full proposal lifecycle, from concept to formal NASA-style review',
      'Owned the project timeline and deliverable tracking across systems, science, and business workstreams',
      'Presented program status and technical tradeoffs to a panel of NASA-affiliated reviewers',
    ],
    tags: ['Systems Engineering', 'Project Coordination', 'Aerospace'],
  },
]

export const projects = [
  {
    name: 'HoopFinder',
    tagline: 'Find open courts and players nearby, in real time.',
    description:
      'A location-based web app that helps players discover nearby basketball courts and see who else is looking to run games — built to solve the everyday "is anyone playing right now" problem.',
    tags: ['React', 'Flask', 'Supabase', 'Geolocation'],
    metrics: ['Real-time presence', 'Map-based discovery'],
    links: { live: '#', code: '#' },
    accent: 'indigo',
  },
  {
    name: 'Trinket',
    tagline: 'A marketplace web app for buying, selling, and trading.',
    description:
      'Full-stack marketplace platform with listings, search/filtering, and user accounts — designed with a product mindset around trust, discovery, and transaction flow.',
    tags: ['React', 'Supabase', 'Tailwind', 'Auth'],
    metrics: ['End-to-end listing flow', 'Search & filtering'],
    links: { live: '#', code: '#' },
    accent: 'cyan',
  },
  {
    name: 'MajorMind',
    tagline: 'An academic planning engine built in C++.',
    description:
      'A C++ system that models degree requirements and course sequencing to help students plan a path to graduation — focused on clean data structures over prerequisite/requirement graphs.',
    tags: ['C++', 'Data Structures', 'Graph Algorithms'],
    metrics: ['Graph-based requirement modeling', 'Custom planning logic'],
    links: { live: '#', code: '#' },
    accent: 'violet',
  },
  {
    name: 'OS & Systems Labs',
    tagline: 'Threading, shortest paths, and file systems from scratch.',
    description:
      'A collection of systems-level projects: a multithreaded scheduler, a single-source shortest path (SSSP) implementation, and a simplified file system — built across low-level Linux lab coursework.',
    tags: ['C', 'Linux', 'Concurrency', 'Algorithms'],
    metrics: ['Multithreaded scheduler', 'Custom file system'],
    links: { live: '#', code: '#' },
    accent: 'amber',
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web',
    items: ['React', 'Flask', 'Supabase', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Jira', 'Power BI', 'Tableau'],
  },
  {
    title: 'PM / Product',
    items: ['Agile', 'Roadmapping', 'Requirements', 'Stakeholder Comms'],
  },
]
