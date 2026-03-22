<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section id="features" class="section">
  <div class="container">
    <h2 class="section-title">Features</h2>
    <p class="section-copy">Use this section for benefits, services, or product features.</p>

    <div class="grid feature-grid">
      {#each siteConfig.features as item}
        <article class="card feature-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .feature-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2rem;
  }

  .feature-card {
    padding: 1.4rem;
  }

  h3 {
    margin: 0 0 0.6rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
</style>