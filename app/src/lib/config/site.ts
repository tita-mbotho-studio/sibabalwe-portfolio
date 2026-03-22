import type { SiteConfig } from '$lib/types/site';

export const siteConfig: SiteConfig = {
  siteName: 'Template Studio',
  siteUrl: 'https://example.com',
  metaTitle: 'Template Studio | Modern SvelteKit Website Template',
  metaDescription:
    'A reusable SvelteKit template for landing pages, portfolios, and business showcase websites.',
  footerText: '© 2026 Sibabalwe Sinyaniso. All rights reserved.',
  navigation: [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    eyebrow: 'Reusable SvelteKit template',
    title: 'Build polished websites faster with a clean reusable starter.',
    description:
      'This template gives you a strong landing-page foundation with reusable sections, typed content config, and a clean file structure.',
    primaryCtaLabel: 'Get Started',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See Features',
    secondaryCtaHref: '#features'
  },
  features: [
    {
      title: 'Reusable sections',
      description: 'Swap content quickly without rebuilding page structure each time.'
    },
    {
      title: 'Typed site config',
      description: 'Manage major content from one place with helpful TypeScript support.'
    },
    {
      title: 'Clean starter structure',
      description: 'Start with sensible defaults instead of reinventing every project.'
    }
  ],
  info: [
    {
      title: 'Designed for flexibility',
      description:
        'The structure is general enough for business websites, portfolio pages, service brands, and showcase sites.'
    },
    {
      title: 'Easy to customise',
      description:
        'Replace text, images, colours, and section ordering without fighting the codebase.'
    }
  ],
  showcase: [
    { title: 'Brand showcase', subtitle: 'Replace with logos, portfolio items, or testimonials.' },
    { title: 'Client work', subtitle: 'Use this area for proof, trust, or featured projects.' },
    { title: 'Visual highlights', subtitle: 'Keep it flexible for your own use case.' }
  ],
  stats: [
    { value: 'Fast', label: 'Setup for new projects' },
    { value: 'Clean', label: 'Starter structure' },
    { value: 'Reusable', label: 'General-purpose sections' }
  ],
  cta: {
    title: 'Ready to launch your next site?',
    description:
      'Use this template as your standard starting point and customise it for each project.',
    buttonLabel: 'Start a Project',
    buttonHref: '#top'
  }
};