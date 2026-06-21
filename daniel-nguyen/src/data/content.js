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
  location: 'Anaheim, CA',
}

export const stats = [
  { label: 'CS + Business', value: 'Dual Focus', hint: 'UCR, Class of 2026' },
  { label: 'Project Coordinator', value: "NASA L'Space", hint: 'Jan — April 2026' },
  { label: 'Selected Projects', value: '3', hint: 'Product & software' },
  { label: 'GPA', value: '3.5', hint: 'UC Riverside' },
]

export const experience = [
  {
    company: "NASA L'Space Program",
    role: 'Project Coordinator',
    period: 'Jan 2026 — April 2026',
    location: 'Remote · NASA-Sponsored',
    summary:
      "Coordinated a cross-functional team of engineers through the full proposal lifecycle for a simulated NASA mission concept, keeping deliverables on track and aligned with NASA engineering standards.",
    bullets: [
      'Led a cross-functional team of engineers through the full proposal lifecycle, tracking deliverables, resolving blockers, and maintaining alignment with NASA engineering standards',
      'Improved team efficiency by ~20% by applying the three pillars of project management — scope, schedule, and resource allocation — through agile sprint cycles and strength-based task delegation',
      'Contributed to research, data analysis, and technical documentation across proposal phases, ensuring traceability and compliance with program requirements',
    ],
    tags: ['Project Coordination', 'Agile', 'Aerospace'],
  },
  {
    company: 'BeReal',
    role: 'Product Management — PM Externship',
    period: 'Oct 2025 — Dec 2025',
    location: 'Remote',
    summary:
      'Worked on product strategy for a consumer social app, mapping user journeys and benchmarking against competitors to surface opportunities for the product team.',
    bullets: [
      'Mapped end-to-end user journeys across 6+ onboarding and engagement touchpoints, identifying friction points and flagging them for the product team to prioritize',
      'Conducted competitive analysis across 3 leading social platforms to identify feature gaps and engagement strategies BeReal could leverage',
      'Coordinated delivery of a feature concept through requirements documentation and user flow diagrams, managing timelines across all phases',
    ],
    tags: ['Product Management', 'User Research', 'Competitive Analysis'],
  },
  {
    company: 'RobbinBooks',
    role: 'Co-Founder / Data Analyst',
    period: 'Jun 2025 — Jun 2026',
    location: 'Remote',
    summary:
      'Co-founded a subscription analytics service applying data-driven, +EV methodology to sports betting markets for paying community members.',
    bullets: [
      'Co-founded and scaled a subscription analytics service delivering data-driven analytics to paying community members',
      'Analyzed implied odds across sportsbooks and DFS platforms, systematically identifying positive expected value (+EV) opportunities with a measurable edge',
      'Generated six figures in net profit through +EV strategies, with all performance tracked and verified via Pikkit',
    ],
    tags: ['Data Analysis', '+EV Methodology', 'Co-Founder'],
  },
  {
    company: 'Artificial Intelligence Student Collective @ UCR',
    role: 'Organizational Member',
    period: 'Sep 2024 — May 2025',
    location: 'UC Riverside',
    summary:
      'Applied machine learning methods to real-world datasets and built data pipelines to support research projects within the collective.',
    bullets: [
      'Applied KNN and other ML methods to real-world datasets, translating model outputs into actionable insights presented to a broader team',
      'Built data pipelines and visualizations in Python (Pandas, Matplotlib) to surface patterns and support data-driven decision-making across research projects',
    ],
    tags: ['Machine Learning', 'Python', 'Data Visualization'],
  },
]

export const projects = [
  {
    name: 'Healthy Habits',
    tagline: 'AI-powered fitness coaching, built from scratch.',
    description:
      'A fitness coaching web app that generates personalized weekly meal plans and workout routines based on user goals (bulk, cut, or maintain), powered by a context-aware live chat feature using the Anthropic Claude API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Claude API'],
    metrics: ['Personalized meal & workout plans', 'No frameworks — built end-to-end in vanilla JS'],
    links: { live: 'https://dnguy634.github.io/Healthy-Habits/', code: 'https://github.com/dnguy634' },
    accent: 'indigo',
  },
  {
    name: 'Todo List',
    tagline: 'A clean, responsive task manager.',
    description:
      'A simple, fast todo list app for organizing and tracking daily tasks — focused on a clean interface and responsive behavior across devices.',
    tags: ['JavaScript', 'Responsive Design'],
    metrics: ['Deployed on Netlify', 'Cross-device responsive'],
    links: { live: 'https://todo-list-dnguy634.netlify.app/', code: 'https://github.com/dnguy634' },
    accent: 'cyan',
  },
  {
    name: 'MajorMind',
    tagline: 'An academic planning engine built in C++.',
    description:
      'A C++ system that models degree requirements and course sequencing to help students plan a path to graduation — focused on clean data structures over prerequisite/requirement graphs.',
    tags: ['C++', 'Data Structures', 'Graph Algorithms'],
    metrics: ['Graph-based requirement modeling', 'Custom planning logic'],
    links: { live: 'https://github.com/dnguy634', code: 'https://github.com/dnguy634' },
    accent: 'violet',
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Tools/Frameworks',
    items: ['Git','Github','Jira', 'Linear'],
  },
  {
    title: 'PM Skills',
    items: ['Agile', 'Roadmap Planning', 'Competative Analysis', 'Technical Documentation'],
  },
]
