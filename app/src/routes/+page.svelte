<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import FeatureSection from '$lib/components/sections/FeatureSection.svelte';
  import InfoSection from '$lib/components/sections/InfoSection.svelte';
  import ShowcaseSection from '$lib/components/sections/ShowcaseSection.svelte';
  import StatsSection from '$lib/components/sections/StatsSection.svelte';
  import CtaSection from '$lib/components/sections/CtaSection.svelte';

  import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
  <title>{siteConfig.metaTitle}</title>
  <meta name="description" content={siteConfig.metaDescription} />
</svelte:head>

<div id="top">
  <Header />
  <main>
    <HeroSection />
    <FeatureSection />
    <InfoSection />
    <ShowcaseSection />
    <StatsSection />
    <CtaSection />
  </main>
  <Footer />
</div>