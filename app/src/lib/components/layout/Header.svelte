<script lang="ts">
  import { siteConfig } from '$lib/config/site';
  import MobileNav from './MobileNav.svelte';

  let isOpen = false;
</script>

<header class="header">
  <div class="container header-inner">
    <a class="brand" href="#top">{siteConfig.siteName}</a>

    <nav class="nav desktop-nav" aria-label="Primary navigation">
      {#each siteConfig.navigation as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>

    <button
      class="menu-button"
      type="button"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      on:click={() => (isOpen = !isOpen)}
    >
      Menu
    </button>
  </div>

  <MobileNav bind:isOpen />
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(14px);
    background: rgba(11, 16, 32, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
    gap: 1rem;
  }

  .brand {
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .nav a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .nav a:hover {
    color: var(--text);
  }

  .menu-button {
    display: none;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: transparent;
    color: var(--text);
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .menu-button {
      display: inline-flex;
    }
  }
</style>