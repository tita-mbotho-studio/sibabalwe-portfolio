import type { SiteConfig } from '$lib/types/site';

export const siteConfig: SiteConfig = {
  siteName: 'Sibabalwe Sinyaniso',
  siteUrl: '/',
  metaTitle: 'Sibabalwe Sinyaniso | Data Engineer Portfolio',
  metaDescription:
    'Portfolio website for Sibabalwe Sinyaniso, showcasing data engineering, analytics, automation, cloud, and digital project work.',
  heroTitle: 'Data Engineer building reliable systems and modern digital experiences.',
  heroSubtitle:
    'I design data pipelines, automate reporting workflows, and build practical web experiences that are clean, useful, and production-minded.',
  heroPrimaryCta: {
    label: 'View Projects',
    href: '#projects'
  },
  heroSecondaryCta: {
    label: 'Download CV',
    href: '/asserts/sibabalwe_sinyaniso_updated_cv.pdf'
  },
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ],
  stats: [
    { value: '4+', label: 'Years in data workflows' },
    { value: 'ETL', label: 'Automation and delivery focus' },
    { value: 'SQL + Python', label: 'Core engineering toolkit' }
  ],
  features: [
    {
      title: 'Data Engineering',
      description:
        'Designing clean ingestion, transformation, and delivery workflows for production and reporting use cases.'
    },
    {
      title: 'Automation',
      description:
        'Reducing manual work through scheduled pipelines, reproducible processes, and dependable operational logic.'
    },
    {
      title: 'Analytics Delivery',
      description:
        'Turning raw datasets into structured outputs that are easier for teams and clients to consume.'
    }
  ],
  showcase: [
    {
      title: 'Pipeline Automation',
      category: 'Data Engineering',
      description:
        'Workflow-oriented solutions for repeatable data movement, transformation, and export processes.',
      image: '/img/images/port-data-pipeline.jpg'
    },
    {
      title: 'Airflow Operations',
      category: 'Orchestration',
      description:
        'Managing task orchestration, job dependencies, and reliable scheduling for production data workloads.',
      image: '/img/images/port-airflow.jpg'
    },
    {
      title: 'Cloud and Infrastructure',
      category: 'Platform',
      description:
        'Supporting practical deployment and infrastructure choices for apps, services, and backend workflows.',
      image: '/img/images/port-cloud.jpg'
    },
    {
      title: 'Web and Product Delivery',
      category: 'Frontend / Product',
      description:
        'Building clean, presentable web experiences that communicate work clearly and professionally.',
      image: '/img/images/port-webdesign.jpg'
    }
  ],
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' }
  ],
  cvUrl: '/asserts/sibabalwe_sinyaniso_updated_cv.pdf'
};