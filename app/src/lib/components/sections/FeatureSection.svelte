<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="section anchor-offset" id="services">
  <div class="container">
    <span class="section-eyebrow">What I do</span>
    <h2 class="section-title">Practical skills that support real delivery.</h2>
    <p class="section-copy">
      I focus on work that improves reliability, clarity, and speed across data and digital
      projects.
    </p>

    <div class="feature-grid">
      {#each siteConfig.features as feature}
        <article class="card feature-card">
          <div class="feature-icon"></div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .feature-card {
    padding: 1.4rem;
  }

  .feature-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
  }

  .feature-card h3 {
    margin: 0 0 0.7rem;
    font-size: 1.2rem;
  }

  .feature-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.75;
  }

  @media (max-width: 860px) {
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
</style>