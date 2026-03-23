<section class="section">
  <div class="container">
    <div class="stats-panel card">
      <div>
        <span class="section-eyebrow">Why this layout works</span>
        <h2 class="section-title">Clean structure, valid asset paths, and a presentable landing page.</h2>
      </div>

      <div class="stats-grid">
        <div class="mini-stat">
          <strong>Static friendly</strong>
          <span>Works well with prerendered SvelteKit deployment.</span>
        </div>
        <div class="mini-stat">
          <strong>Asset aligned</strong>
          <span>Uses files that exist in your current `static` tree.</span>
        </div>
        <div class="mini-stat">
          <strong>Easy to extend</strong>
          <span>You can swap content later without changing the structure.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .stats-panel {
    padding: 1.5rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .mini-stat {
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: oklch(0.28 0.03 255 / 0.38);
  }

  .mini-stat strong {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 1rem;
  }

  .mini-stat span {
    color: var(--text-muted);
    line-height: 1.65;
  }

  @media (max-width: 860px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>