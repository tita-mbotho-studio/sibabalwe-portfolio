<section class="section anchor-offset" id="about">
  <div class="container info-grid">
    <div class="info-visual card">
      <img src="/img/images/about-img.png" alt="About portfolio visual" />
    </div>

    <div class="info-copy">
      <span class="section-eyebrow">About me</span>
      <h2 class="section-title">I care about useful systems, not just impressive tools.</h2>
      <p class="section-copy">
        My work sits at the intersection of data engineering, reporting automation, and practical
        problem solving. I enjoy building solutions that are understandable, maintainable, and
        ready for real use.
      </p>

      <div class="info-points">
        <div class="card point">
          <strong>Reliable delivery</strong>
          <span>Clear structure, repeatable workflows, and production-minded decisions.</span>
        </div>
        <div class="card point">
          <strong>Modern stack mindset</strong>
          <span>Comfortable moving across SQL, Python, orchestration, infrastructure, and UI.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .info-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 2rem;
    align-items: center;
  }

  .info-visual {
    overflow: hidden;
    padding: 1rem;
  }

  .info-visual img {
    width: 100%;
    aspect-ratio: 4 / 4.5;
    object-fit: cover;
    border-radius: 18px;
  }

  .info-points {
    display: grid;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .point {
    padding: 1rem 1.1rem;
  }

  .point strong {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 1rem;
  }

  .point span {
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>