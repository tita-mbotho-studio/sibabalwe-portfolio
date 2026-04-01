<script lang="ts">
  import { tick } from 'svelte';
  import type { ClientSlide, DataProject } from '$lib/config/site';

  export let dataProjects: DataProject[] = [];
  export let clientSlides: ClientSlide[] = [];

  $: carouselSlides =
    clientSlides.length > 0
      ? [clientSlides[clientSlides.length - 1], ...clientSlides, clientSlides[0]]
      : [];

  const firstCarouselIndex = 1;
  $: lastCarouselIndex = clientSlides.length;

  let carouselIndex = firstCarouselIndex;
  let carouselAnimate = true;

  $: activeClientIndex =
    clientSlides.length > 0
      ? ((carouselIndex - firstCarouselIndex + clientSlides.length) % clientSlides.length +
          clientSlides.length) %
        clientSlides.length
      : 0;

  function nextClient() {
    if (clientSlides.length > 0) carouselIndex += 1;
  }

  function prevClient() {
    if (clientSlides.length > 0) carouselIndex -= 1;
  }

  function goToClient(index: number) {
    carouselIndex = index + firstCarouselIndex;
  }

  async function resetCarouselPosition(index: number) {
    carouselAnimate = false;
    carouselIndex = index;
    await tick();
    requestAnimationFrame(() => {
      carouselAnimate = true;
    });
  }

  async function handleCarouselTransitionEnd() {
    if (clientSlides.length === 0) return;

    if (carouselIndex === 0) {
      await resetCarouselPosition(lastCarouselIndex);
      return;
    }

    if (carouselIndex === carouselSlides.length - 1) {
      await resetCarouselPosition(firstCarouselIndex);
    }
  }
</script>

<section class="work section" id="work" aria-label="Selected Work">
  <div class="container flex-centre">
    <h2 class="section-title">Selected Work</h2>

    <div class="content">
      <div class="work-description">
        <h3>Balanced proof across data systems and web clients</h3>
        <p>
          A curated view of the kind of work I enjoy most: practical data systems, workflow
          automation, and polished web delivery.
        </p>
      </div>

      <div class="work-block">
        <div class="work-block-header">
          <h3>Data Systems</h3>
          <p>Data projects focused on building reliable, practical systems that solve real problems.</p>
        </div>

        <div class="data-project-grid">
          {#each dataProjects as project}
            <article class="data-project-card">
              <div class="data-project-accent" aria-hidden="true"></div>
              <h4>{project.title}</h4>
              <p>{project.summary}</p>

              <ul class="data-project-list">
                {#each project.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            </article>
          {/each}
        </div>
      </div>

      <div class="work-block web-work-block">
        <div class="work-block-header">
          <h3>Web Clients</h3>
          <p>Web projects focused on clean design, structure, and strong visual presentation.</p>
        </div>

        <div id="clientsCarousel" class="carousel slide">
          <div class="carousel-indicators">
            {#each clientSlides as _, index}
              <button
                type="button"
                class:active={activeClientIndex === index}
                aria-label={`Slide ${index + 1}`}
                aria-current={activeClientIndex === index ? 'true' : undefined}
                on:click={() => goToClient(index)}
              ></button>
            {/each}
          </div>

          <div class="carousel-inner">
            <div
              class="carousel-track"
              style={`transform: translateX(-${carouselIndex * 100}%); transition: ${carouselAnimate ? 'transform 0.55s ease' : 'none'};`}
              on:transitionend={handleCarouselTransitionEnd}
            >
              {#each carouselSlides as client}
                <div class="carousel-item">
                  <img
                    src={client.image}
                    class="d-block w-100"
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div class="carousel-caption">
                    <h5>{client.name}</h5>
                    <p>{client.quote}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            aria-label="Previous slide"
            on:click={prevClient}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            aria-label="Next slide"
            on:click={nextClient}
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>