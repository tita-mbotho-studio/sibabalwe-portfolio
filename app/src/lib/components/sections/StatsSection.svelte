<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section id="stats" class="section">
  <div class="container">
    <h2 class="section-title">Stats</h2>
    <p class="section-copy">Use this for metrics, achievements, proof points, or highlights.</p>

    <div class="grid stats-grid">
      {#each siteConfig.stats as item}
        <article class="card stat-card">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .stats-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2rem;
  }

  .stat-card {
    padding: 1.5rem;
    text-align: center;
  }

  strong {
    display: block;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    margin-bottom: 0.5rem;
  }

  span {
    color: var(--text-muted);
  }

  @media (max-width: 900px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>