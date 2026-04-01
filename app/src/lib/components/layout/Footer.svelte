<script lang="ts">
  import type { NavLink, SocialLink } from '$lib/config/site';

  export let currentYear: number;
  export let socialLinks: SocialLink[] = [];
  export let footerExploreLinks: NavLink[] = [];
  export let externalRel = 'noopener noreferrer';
</script>

<footer>
  <div class="footer-container">
    <div class="about group">
      <h2>Sibabalwe</h2>
      <p>Data, web, and cloud-focused technical professional</p>
      <a href="#about">About Me</a>
    </div>

    <div class="hr" aria-hidden="true"></div>

    <div class="info group">
      <h3>Explore</h3>
      <ul>
        {#each footerExploreLinks as link}
          <li><a href={`#${link.id}`}>{link.label}</a></li>
        {/each}
      </ul>
    </div>

    <div class="hr" aria-hidden="true"></div>

    <div class="follow group">
      <h3>Connect</h3>
      <ul>
        {#each socialLinks as social}
          <li>
            <a
              href={social.href}
              target="_blank"
              rel={externalRel}
              aria-label={social.label}
            >
              <i class={social.icon}></i>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="footer-copyright group">
    <p>© {currentYear} by Sibabalwe Sinyaniso. All rights reserved.</p>
  </div>
</footer>