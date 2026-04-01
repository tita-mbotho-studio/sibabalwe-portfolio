<script lang="ts">
  import type { Capability } from '$lib/config/site';

  export let capabilities: Capability[] = [];
</script>

<section class="services section" id="services" aria-label="Capabilities">
  <div class="container flex-centre">
    <h2 class="section-title">Capabilities</h2>

    <div class="content">
      <div class="services-description">
        <h3>What I build and improve</h3>
        <p>
          My work sits at the intersection of data, automation, web execution, and growing cloud
          systems, with a strong preference for practical solutions that are easier to operate and
          easier to trust.
        </p>
      </div>

      <div class="capabilities-grid">
        {#each capabilities as capability}
          <article class="capability-card">
            <div class="capability-accent" aria-hidden="true"></div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>

            <ul class="capability-list">
              {#each capability.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>