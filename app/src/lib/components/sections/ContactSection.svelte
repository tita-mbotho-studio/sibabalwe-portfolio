<script lang="ts">
  import type { ContactItem } from '$lib/config/site';

  export let contactItems: ContactItem[] = [];
  export let externalRel = 'noopener noreferrer';
</script>

<section class="contact section" id="contact" aria-label="Contact">
  <div class="container flex-centre">
    <h2 class="section-title">Contact Me</h2>

    <div class="content">
      <div class="contact-left">
        <h2>Let's discuss your project</h2>
        <ul class="contact-list">
          {#each contactItems as item}
            <li>
              <h3 class="item-title">
                <i class={item.icon} aria-hidden="true"></i> {item.title}
              </h3>

              <span>
                {#if item.href}
                  <a href={item.href}>{item.text}</a>
                {:else}
                  {item.text}
                {/if}
              </span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="contact-right">
        <p>
          I'm open to conversations around <br />
          <span>data systems, workflow automation, web projects, and professional collaborations.</span>
        </p>

        <div class="contact-cta">
          <a
            href="https://wa.me/27722117731"
            target="_blank"
            rel={externalRel}
            class="btn"
          >
            Get In Touch <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>