<script lang="ts">
  import type { FocusItem } from '$lib/config/site';

  export let currentFocus: FocusItem[] = [];
</script>

<section class="focus section" id="focus" aria-label="Current Focus">
  <div class="container flex-centre">
    <h2 class="section-title">Current Focus</h2>

    <div class="content">
      <div class="focus-description">
        <h3>Growing with intention</h3>
        <p>
          Right now I am deliberately improving across the areas that matter most to my long-term
          professional growth: stronger data systems, better web execution, and deeper cloud
          understanding.
        </p>
      </div>

      <div class="focus-grid">
        {#each currentFocus as item}
          <article class="focus-card">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>