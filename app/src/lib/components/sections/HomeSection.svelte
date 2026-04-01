<script lang="ts">
  import { onMount } from 'svelte';
  import type { SocialLink } from '$lib/config/site';

  export let socialLinks: SocialLink[] = [];
  export let externalRel = 'noopener noreferrer';

  let showScrollTop = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function syncScrollButton() {
    showScrollTop = window.scrollY > 500;
  }

  onMount(() => {
    syncScrollButton();

    const onScroll = () => syncScrollButton();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<div
  class="scrollToTop-btn flex-centre {showScrollTop ? 'active' : ''}"
  aria-hidden="true"
  on:click={scrollToTop}
>
  <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
</div>

<section class="home flex-centre" id="home" aria-label="Home">
  <div class="home-container">
    <div class="media-icons">
      {#each socialLinks as social}
        <a
          href={social.href}
          target="_blank"
          rel={externalRel}
          aria-label={social.label}
        >
          <i class={social.icon} aria-hidden="true"></i>
        </a>
      {/each}
    </div>

    <div class="home-copy">
      <div class="home-copy-row">
        <h1>Hi, I am Sibabalwe</h1>
      </div>
      <div class="home-copy-row">
        <h3>Building across data systems, web development, and cloud growth</h3>
      </div>
      <div class="home-copy-row">
        <p>
          I build reliable data workflows, thoughtful automation, and modern websites with a clean,
          practical approach. My focus is on improving both data and web skills while continuing to
          grow deeper cloud capability.
        </p>
      </div>
      <div class="home-copy-row home-actions">
        <a href="#contact" class="btn">
          Contact Me <i class="fa-solid fa-arrow-circle-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="home-image-wrap">
      <div class="home-img">
        <img
          src="https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/main-img.webp"
          alt="Portrait of Sibabalwe Sinyaniso"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>

  <a href="#about" class="scroll-down">
    Scroll Down <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
  </a>
</section>