<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="section">
  <div class="container">
    <div class="cta-panel card">
      <div>
        <span class="section-eyebrow">Next step</span>
        <h2>Want this portfolio refined further for your exact brand and content?</h2>
        <p>
          This version is stable and should render with your current project structure. From here,
          you can swap in your real bio, links, project details, and final branding.
        </p>
      </div>

      <div class="cta-actions">
        <a class="button button-primary" href="#top">Back to top</a>
        <a class="button button-secondary" href={siteConfig.cvUrl} target="_blank" rel="noreferrer">
          Open CV
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-panel {
    display: grid;
    grid-template-columns: 1.2fr auto;
    gap: 1.25rem;
    align-items: center;
    padding: 1.5rem;
  }

  .cta-panel h2 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    line-height: 1.1;
  }

  .cta-panel p {
    margin: 0;
    max-width: 720px;
    color: var(--text-muted);
    line-height: 1.75;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: flex-end;
  }

  @media (max-width: 860px) {
    .cta-panel {
      grid-template-columns: 1fr;
    }

    .cta-actions {
      justify-content: flex-start;
    }
  }
</style>