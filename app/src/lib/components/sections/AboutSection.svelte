<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="about section" id="about" aria-label="About">
  <div class="container flex-centre">
    <div class="about-header">
      <h2 class="section-title">About Me</h2>
    </div>

    <div class="content">
      <div class="about-img">
        <img
          src="https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/about-img.webp"
          alt="Sibabalwe Sinyaniso working at a laptop"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="about-info">
        <div class="description">
          <h3>I'm Sibabalwe</h3>
          <h4>A <span>technical professional</span> based in <span>Pretoria, South Africa</span></h4>
          <p>
            I work across data systems, workflow automation, and web development, with a practical
            mindset shaped by real delivery work. I enjoy building things that are useful, reliable,
            and clear, whether that means improving a pipeline, refining a process, or presenting an
            idea well through a modern website.
          </p>
        </div>

        <div class="about-img-mobile">
          <img
            src="https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/about-img.webp"
            alt="Sibabalwe Sinyaniso working at a laptop"
            loading="lazy"
            decoding="async"
          />
        </div>

        <ul class="professional-list">
          <li class="list-item">
            <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
            <h3>3+</h3>
            <span>Years of<br />Hands-on Experience</span>
          </li>
        </ul>

        <div class="about-actions">
          <a
            href={`${base}/asserts/sibabalwe_sinyaniso_updated_cv.pdf`}
            class="btn"
            target="_blank"
            rel="noopener"
          >
            Download CV <i class="fa-solid fa-download" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>