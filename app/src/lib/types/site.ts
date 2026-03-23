export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ShowcaseItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: {
    label: string;
    href: string;
  };
  heroSecondaryCta: {
    label: string;
    href: string;
  };
  navItems: NavItem[];
  stats: StatItem[];
  features: FeatureItem[];
  showcase: ShowcaseItem[];
  socialLinks: {
    label: string;
    href: string;
  }[];
  cvUrl: string;
};