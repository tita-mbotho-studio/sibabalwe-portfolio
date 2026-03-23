<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="hero section">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="section-eyebrow">Portfolio • Data • Automation</span>
      <h1>{siteConfig.heroTitle}</h1>
      <p>{siteConfig.heroSubtitle}</p>

      <div class="hero-actions">
        <a class="button button-primary" href={siteConfig.heroPrimaryCta.href}>
          {siteConfig.heroPrimaryCta.label}
        </a>
        <a
          class="button button-secondary"
          href={siteConfig.heroSecondaryCta.href}
          target="_blank"
          rel="noreferrer"
        >
          {siteConfig.heroSecondaryCta.label}
        </a>
      </div>

      <div class="hero-stats">
        {#each siteConfig.stats as stat}
          <div class="stat card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="hero-visual">
      <div class="hero-image-wrap card">
        <img src="/img/images/main-img.png" alt="Main portfolio visual" />
      </div>
      <div class="hero-badge card">
        <span>Focused on Python, SQL, ETL, orchestration, and product-minded delivery.</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 3.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 2rem;
    align-items: center;
  }

  .hero-copy h1 {
    margin: 0;
    font-size: clamp(2.6rem, 5vw, 4.8rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
    max-width: 12ch;
  }

  .hero-copy p {
    margin: 1.25rem 0 0;
    max-width: 640px;
    color: var(--text-muted);
    font-size: 1.08rem;
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 1.6rem;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1.75rem;
  }

  .stat {
    padding: 1rem;
  }

  .stat strong {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 0.35rem;
  }

  .stat span {
    color: var(--text-muted);
    line-height: 1.5;
    font-size: 0.95rem;
  }

  .hero-visual {
    position: relative;
  }

  .hero-image-wrap {
    overflow: hidden;
    padding: 1rem;
  }

  .hero-image-wrap img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 18px;
  }

  .hero-badge {
    position: absolute;
    left: -1rem;
    bottom: 1rem;
    max-width: 260px;
    padding: 1rem;
    background: var(--surface-strong);
  }

  .hero-badge span {
    color: var(--text);
    line-height: 1.6;
    font-weight: 600;
  }

  @media (max-width: 960px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .hero-copy h1 {
      max-width: 100%;
    }

    .hero-stats {
      grid-template-columns: 1fr;
    }

    .hero-badge {
      position: static;
      margin-top: 1rem;
      max-width: none;
    }
  }
</style>