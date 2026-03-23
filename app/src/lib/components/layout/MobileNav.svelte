<script lang="ts">
  import { siteConfig } from '$lib/config/site';

  let open = false;

  const closeMenu = () => {
    open = false;
  };
</script>

<div class="mobile-nav">
  <button
    class="menu-toggle"
    type="button"
    aria-label="Toggle menu"
    aria-expanded={open}
    on:click={() => (open = !open)}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  {#if open}
    <div class="mobile-panel card">
      <nav aria-label="Mobile">
        {#each siteConfig.navItems as item}
          <a href={item.href} on:click={closeMenu}>{item.label}</a>
        {/each}
      </nav>

      <a
        class="button button-primary mobile-cv"
        href={siteConfig.cvUrl}
        target="_blank"
        rel="noreferrer"
        on:click={closeMenu}
      >
        Download CV
      </a>
    </div>
  {/if}
</div>

<style>
  .mobile-nav {
    display: none;
    position: relative;
  }

  .menu-toggle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 46px;
    height: 46px;
    padding: 0;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: transparent;
    color: var(--text);
  }

  .menu-toggle span {
    width: 18px;
    height: 2px;
    margin: 0 auto;
    border-radius: 999px;
    background: currentColor;
  }

  .mobile-panel {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    width: min(280px, 88vw);
    padding: 1rem;
    background: var(--surface-strong);
  }

  .mobile-panel nav {
    display: grid;
    gap: 0.35rem;
  }

  .mobile-panel nav a {
    padding: 0.85rem 0.9rem;
    border-radius: 12px;
    color: var(--text-muted);
  }

  .mobile-panel nav a:hover {
    background: oklch(0.3 0.03 255 / 0.45);
    color: var(--text);
  }

  .mobile-cv {
    width: 100%;
    margin-top: 0.9rem;
  }

  @media (max-width: 860px) {
    .mobile-nav {
      display: block;
    }
  }
</style>