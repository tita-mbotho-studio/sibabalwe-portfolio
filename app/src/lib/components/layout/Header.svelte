<script lang="ts">
  import { onMount } from 'svelte';
  import type { NavLink } from '$lib/config/site';

  export let navLinks: NavLink[] = [];

  const anchorOffsetAdjustment = 48;
  const activeOffsetAdjustment = 24;

  let navOpen = false;
  let isSticky = false;
  let activeSection = 'home';
  let sectionOffset = 0;
  let activeSectionOffset = 0;

  function closeNav() {
    navOpen = false;
  }

  function toggleNav() {
    navOpen = !navOpen;
  }

  function updateHeaderOffsets() {
    const navBar = document.querySelector<HTMLElement>('.nav-bar');
    const measuredHeight = navBar?.offsetHeight ?? 72;

    sectionOffset = Math.max(measuredHeight - anchorOffsetAdjustment, 0);
    activeSectionOffset = Math.max(measuredHeight - activeOffsetAdjustment, 0);

    document.documentElement.style.setProperty('--header-offset', `${sectionOffset}px`);
  }

  function syncScrollState() {
    const scrollY = window.scrollY;
    isSticky = scrollY > 0;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const currentScroll = scrollY + activeSectionOffset + 1;

    for (const section of sections) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (id && currentScroll >= top && currentScroll < bottom) {
        activeSection = id;
      }
    }
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeNav();
    }
  }

  onMount(() => {
    updateHeaderOffsets();
    syncScrollState();

    const onScroll = () => syncScrollState();
    const onResize = () => {
      updateHeaderOffsets();
      syncScrollState();
    };
    const onKeydown = (event: KeyboardEvent) => closeOnEscape(event);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeydown);
    };
  });
</script>

<header class:sticky={isSticky}>
  <div class="nav-bar">
    <a href="#home" class="logo">Sibabalwe</a>

    <nav class="navigation {navOpen ? 'active' : ''}" aria-label="Primary" aria-hidden={!navOpen}>
      <div class="nav-items" id="primary-menu">
        {#each navLinks as link}
          <a
            href={`#${link.id}`}
            class:active={activeSection === link.id}
            on:click={closeNav}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </nav>

    <button
      type="button"
      class="nav-menu-btn {navOpen ? 'active' : ''}"
      aria-label={navOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={navOpen}
      aria-controls="primary-menu"
      on:click={toggleNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>