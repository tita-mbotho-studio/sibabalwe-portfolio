<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section id="showcase" class="section">
  <div class="container">
    <h2 class="section-title">Showcase</h2>
    <p class="section-copy">
      Use this section for clients, portfolio items, logos, testimonials, or featured work.
    </p>

    <div class="grid showcase-grid">
      {#each siteConfig.showcase as item}
        <article class="card showcase-card">
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .showcase-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2rem;
  }

  .showcase-card {
    padding: 1.5rem;
    min-height: 180px;
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
    .showcase-grid {
      grid-template-columns: 1fr;
    }
  }
</style>