<script lang="ts">
  import { siteConfig } from '$lib/config/site';

  const { cta } = siteConfig;
</script>

<section id="contact" class="section">
  <div class="container">
    <div class="card cta-card">
      <h2>{cta.title}</h2>
      <p>{cta.description}</p>
      <a class="button button-primary" href={cta.buttonHref}>{cta.buttonLabel}</a>
    </div>
  </div>
</section>

<style>
  .cta-card {
    padding: 2rem;
    text-align: center;
  }

  h2 {
    margin: 0 0 0.8rem;
    font-size: clamp(1.8rem, 3vw, 3rem);
  }

  p {
    margin: 0 auto 1.25rem;
    max-width: 680px;
    color: var(--text-muted);
    line-height: 1.7;
  }
</style>