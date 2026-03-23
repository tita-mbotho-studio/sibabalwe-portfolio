<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<footer class="site-footer" id="contact">
  <div class="container footer-grid">
    <div class="footer-brand">
      <div class="footer-mark">SS</div>
      <div>
        <h2>{siteConfig.siteName}</h2>
        <p>
          Data engineer focused on practical automation, analytics delivery, and dependable digital
          systems.
        </p>
      </div>
    </div>

    <div>
      <h3>Navigation</h3>
      <div class="footer-links">
        {#each siteConfig.navItems as item}
          <a href={item.href}>{item.label}</a>
        {/each}
      </div>
    </div>

    <div>
      <h3>Resources</h3>
      <div class="footer-links">
        <a href={siteConfig.cvUrl} target="_blank" rel="noreferrer">Download CV</a>
        {#each siteConfig.socialLinks as link}
          <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
        {/each}
      </div>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>© 2026 {siteConfig.siteName}. All rights reserved.</p>
    <a href="#top">Back to top</a>
  </div>
</footer>

<style>
  .site-footer {
    padding: 4rem 0 2rem;
    border-top: 1px solid var(--border);
    background: oklch(0.12 0.02 255 / 0.8);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .footer-brand {
    display: flex;
    gap: 1rem;
  }

  .footer-mark {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: oklch(0.17 0.03 255);
    font-weight: 800;
    flex-shrink: 0;
  }

  .footer-brand h2,
  .site-footer h3 {
    margin: 0 0 0.75rem;
  }

  .footer-brand p,
  .footer-bottom p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .footer-links {
    display: grid;
    gap: 0.7rem;
  }

  .footer-links a {
    color: var(--text-muted);
  }

  .footer-links a:hover,
  .footer-bottom a:hover {
    color: var(--text);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  @media (max-width: 860px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }

    .footer-bottom {
      flex-direction: column;
    }
  }
</style>