<script lang="ts">
  import { siteConfig } from '$lib/config/site';

  const { hero } = siteConfig;
</script>

<section class="hero section">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">{hero.eyebrow}</p>
      <h1>{hero.title}</h1>
      <p class="copy">{hero.description}</p>

      <div class="actions">
        <a class="button button-primary" href={hero.primaryCtaHref}>{hero.primaryCtaLabel}</a>
        <a class="button button-secondary" href={hero.secondaryCtaHref}>{hero.secondaryCtaLabel}</a>
      </div>
    </div>

    <div class="card hero-panel">
      <div class="hero-placeholder">Replace with an image, illustration, or mockup.</div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: var(--primary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.78rem;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: clamp(2.4rem, 5vw, 4.75rem);
    line-height: 0.98;
  }

  .copy {
    margin: 0;
    max-width: 640px;
    color: var(--text-muted);
    line-height: 1.75;
    font-size: 1.05rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 1.5rem;
  }

  .hero-panel {
    padding: 1rem;
  }

  .hero-placeholder {
    min-height: 360px;
    display: grid;
    place-items: center;
    border: 1px dashed var(--border);
    border-radius: calc(var(--radius) - 6px);
    color: var(--text-muted);
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
  }
</style>