<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section id="about" class="section">
  <div class="container">
    <h2 class="section-title">About</h2>
    <p class="section-copy">Use this area for story, mission, explanation, or detailed context.</p>

    <div class="grid info-grid">
      {#each siteConfig.info as block}
        <article class="card info-card">
          <h3>{block.title}</h3>
          <p>{block.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 2rem;
  }

  .info-card {
    padding: 1.5rem;
  }

  h3 {
    margin: 0 0 0.75rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>