<script lang="ts">
  import MobileNav from './MobileNav.svelte';
  import { siteConfig } from '$lib/config/site';
</script>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#top">
      <span class="brand-mark">SS</span>
      <span class="brand-text">{siteConfig.siteName}</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary">
      {#each siteConfig.navItems as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>

    <div class="desktop-actions">
      <a class="button button-secondary" href={siteConfig.cvUrl} target="_blank" rel="noreferrer">
        CV
      </a>
    </div>

    <MobileNav />
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(14px);
    background: oklch(0.14 0.03 255 / 0.72);
    border-bottom: 1px solid var(--border);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 76px;
    gap: 1rem;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    min-width: 0;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: oklch(0.17 0.03 255);
    font-weight: 800;
  }

  .brand-text {
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .desktop-nav a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .desktop-nav a:hover {
    color: var(--text);
  }

  .desktop-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 860px) {
    .desktop-nav,
    .desktop-actions {
      display: none;
    }
  }
</style>