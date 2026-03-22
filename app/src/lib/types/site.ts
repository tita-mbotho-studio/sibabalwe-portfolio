export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type InfoBlock = {
  title: string;
  description: string;
};

export type ShowcaseItem = {
  title: string;
  subtitle: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  metaTitle: string;
  metaDescription: string;
  footerText: string;
  navigation: NavItem[];
  hero: HeroContent;
  features: FeatureItem[];
  info: InfoBlock[];
  showcase: ShowcaseItem[];
  stats: StatItem[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};