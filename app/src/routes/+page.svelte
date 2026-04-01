<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  import HomeSection from '$lib/components/sections/HomeSection.svelte';
  import AboutSection from '$lib/components/sections/AboutSection.svelte';
  import SkillsSection from '$lib/components/sections/SkillsSection.svelte';
  import CapabilitiesSection from '$lib/components/sections/CapabilitiesSection.svelte';
  import WorkSection from '$lib/components/sections/WorkSection.svelte';
  import FocusSection from '$lib/components/sections/FocusSection.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';

  import {
    pageTitle,
    metaDescription,
    structuredData,
    navLinks,
    footerExploreLinks,
    socialLinks,
    contactItems,
    capabilities,
    dataProjects,
    currentFocus,
    clientSlides,
    externalRel
  } from '$lib/config/site';

  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="Sibabalwe Sinyaniso" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#141414" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:site_name" content="Sibabalwe Sinyaniso" />
  <meta property="og:locale" content="en_ZA" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={metaDescription} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  />

  <script type="application/ld+json">
    {structuredData}
  </script>
</svelte:head>

<a href="#main-content" class="visually-hidden">Skip to main content</a>

<Header {navLinks} />

<main id="main-content">
  <HomeSection {socialLinks} {externalRel} />
  <AboutSection />
  <SkillsSection />
  <CapabilitiesSection {capabilities} />
  <WorkSection {dataProjects} {clientSlides} />
  <FocusSection {currentFocus} />
  <ContactSection {contactItems} {externalRel} />
</main>

<Footer
  {currentYear}
  {socialLinks}
  {footerExploreLinks}
  {externalRel}
/>