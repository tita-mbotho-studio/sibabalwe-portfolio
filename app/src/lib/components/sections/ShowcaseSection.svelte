<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="section anchor-offset" id="projects">
  <div class="container">
    <span class="section-eyebrow">Selected work</span>
    <h2 class="section-title">Projects and directions I can confidently present.</h2>
    <p class="section-copy">
      These showcase cards are aligned to the image files you already have in
      `static/img/images`, so they will render without path errors.
    </p>

    <div class="showcase-grid">
      {#each siteConfig.showcase as item}
        <article class="card showcase-card">
          <div class="showcase-media">
            <img src={item.image} alt={item.title} />
          </div>

          <div class="showcase-content">
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .showcase-card {
    overflow: hidden;
  }

  .showcase-media {
    aspect-ratio: 16 / 10;
    overflow: hidden;
  }

  .showcase-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .showcase-content {
    padding: 1.2rem;
  }

  .showcase-content span {
    display: inline-block;
    margin-bottom: 0.65rem;
    color: var(--accent);
    font-size: 0.92rem;
    font-weight: 700;
  }

  .showcase-content h3 {
    margin: 0 0 0.6rem;
    font-size: 1.2rem;
  }

  .showcase-content p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.75;
  }

  @media (max-width: 860px) {
    .showcase-grid {
      grid-template-columns: 1fr;
    }
  }
</style>