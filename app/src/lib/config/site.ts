export type NavLink = {
  id: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

export type ContactItem = {
  title: string;
  icon: string;
  text: string;
  href?: string;
};

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type DataProject = {
  title: string;
  summary: string;
  highlights: string[];
};

export type FocusItem = {
  title: string;
  description: string;
};

export type ClientSlide = {
  name: string;
  image: string;
  alt: string;
  quote: string;
};

export const externalRel = 'noopener noreferrer';

export const pageTitle =
  'Sibabalwe Sinyaniso | Technical Professional in Pretoria, South Africa';

export const metaDescription =
  'Sibabalwe Sinyaniso is a technical professional in Pretoria, South Africa building across data systems, workflow automation, web development, and cloud growth.';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Capabilities' },
  { id: 'work', label: 'Work' },
  { id: 'focus', label: 'Current Focus' },
  { id: 'contact', label: 'Contact' }
];

export const footerExploreLinks: NavLink[] = navLinks.filter((link) =>
  ['skills', 'services', 'work', 'focus', 'contact'].includes(link.id)
);

export const socialLinks: SocialLink[] = [
  {
    href: 'https://wa.me/27722117731',
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp'
  },
  {
    href: 'https://www.linkedin.com/in/sibabalwe-sinyaniso',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin'
  },
  {
    href: 'https://medium.com/@sibabalwesinyaniso',
    label: 'Medium',
    icon: 'fa-brands fa-medium'
  },
  {
    href: 'https://www.tiktok.com/@sibabalwe_sinyaniso?is_from_webapp=1&sender_device=pc',
    label: 'TikTok',
    icon: 'fa-brands fa-tiktok'
  },
  {
    href: 'https://www.facebook.com/share/19MJHuJnRk/',
    label: 'Facebook',
    icon: 'fa-brands fa-facebook-f'
  }
];

export const contactItems: ContactItem[] = [
  {
    title: 'Phone',
    icon: 'fa-solid fa-phone',
    text: '+27 72 211 7731',
    href: 'tel:+27722117731'
  },
  {
    title: 'Email Address',
    icon: 'fa-solid fa-envelope',
    text: 's.sibabalwee1@gmail.com',
    href: 'mailto:s.sibabalwee1@gmail.com'
  },
  {
    title: 'Location',
    icon: 'fa-solid fa-location-dot',
    text: 'Pretoria, South Africa'
  }
];

export const capabilities: Capability[] = [
  {
    title: 'Data Engineering',
    description:
      'Production-focused pipeline design and delivery across Python, SQL, Airflow, AWS, and warehouse environments.',
    bullets: [
      'ETL and ELT workflow design',
      'Data validation, reconciliation, and reliability',
      'Recurring high-volume pipeline optimisation'
    ]
  },
  {
    title: 'Workflow Automation',
    description:
      'Dependable orchestration for repeatable execution, cleaner operations, and less manual effort across data tasks.',
    bullets: [
      'DAG design and dependency management',
      'Monitoring, alerting, and production debugging',
      'Operational efficiency through automation'
    ]
  },
  {
    title: 'Cloud Systems',
    description:
      'Practical cloud integration for compute, storage, and database-backed workflows, with maintainability and access design in mind.',
    bullets: [
      'AWS S3, EC2, RDS, and Aurora exposure',
      'Secure movement of data between systems',
      'Cost-aware infrastructure thinking'
    ]
  },
  {
    title: 'Web Design & Development',
    description:
      'Modern website design and front-end implementation focused on clarity, structure, responsiveness, and polished presentation.',
    bullets: [
      'Responsive website design',
      'Clean visual hierarchy and layout',
      'Front-end implementation with maintainable structure'
    ]
  }
];

export const dataProjects: DataProject[] = [
  {
    title: 'Aurora Cluster Resize DAG',
    summary:
      'Built an Airflow DAG to resize Aurora clusters on schedule, helping balance performance needs and infrastructure cost across recurring workloads.',
    highlights: [
      'Automated routine cluster scaling',
      'Supported cost-aware cloud operations',
      'Reduced repetitive manual intervention'
    ]
  },
  {
    title: 'Airflow Log Management System',
    summary:
      'Developed an automated maintenance workflow for Airflow logs, improving storage usage and helping keep the production environment cleaner and more stable.',
    highlights: [
      'Optimised storage footprint',
      'Improved operational housekeeping',
      'Supported healthier production performance'
    ]
  },
  {
    title: 'Database Archiving Solution',
    summary:
      'Implemented an in-database archiving process that improved query responsiveness while reducing unnecessary storage pressure on active systems.',
    highlights: [
      'Improved database performance',
      'Reduced storage overhead',
      'Strengthened long-term data handling'
    ]
  },
  {
    title: 'S3 Data Migration Pipeline',
    summary:
      'Designed and executed a pipeline to move large archived datasets into S3, improving long-term access and supporting more scalable storage strategy.',
    highlights: [
      'Migrated large historical datasets',
      'Improved access to archived records',
      'Supported lower-cost storage patterns'
    ]
  }
];

export const currentFocus: FocusItem[] = [
  {
    title: 'Data systems',
    description:
      'Improving pipeline design, orchestration quality, and reliability across practical production-style workflows.'
  },
  {
    title: 'Web skills',
    description:
      'Sharpening modern front-end execution, cleaner interface structure, and stronger presentation across responsive websites.'
  },
  {
    title: 'Cloud growth',
    description:
      'Expanding cloud capability across AWS services and infrastructure patterns that support scalable, maintainable systems.'
  }
];

export const clientSlides: ClientSlide[] = [
  {
    name: 'BOSS B',
    image: 'https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/bossb-logo.webp',
    alt: 'Boss B brand logo',
    quote: 'Clean, modern, and professional from start to finish.'
  },
  {
    name: 'CTRA GROUP',
    image: 'https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/ctra-logo.webp',
    alt: 'CTRA Group brand logo',
    quote: 'The final website felt polished and much stronger visually.'
  }
];

export const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sibabalwe Sinyaniso',
  description: metaDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pretoria',
    addressCountry: 'South Africa'
  },
  sameAs: socialLinks.map((social) => social.href),
  knowsAbout: [
    'Data Systems',
    'Workflow Automation',
    'Python',
    'SQL',
    'Cloud Systems',
    'Web Development'
  ]
});