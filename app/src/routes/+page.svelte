<!-- app/src/routes/+page.svelte -->
<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { base } from '$app/paths';

  type Cleanup = () => void;

  const capabilities = [
    {
      title: 'Data Engineering',
      description:
        'Production-focused pipeline design and delivery across Python, SQL, Airflow, AWS, and warehouse environments.',
      bullets: [
        'ETL and ELT workflow design',
        'Data validation, reconciliation, and reliability',
        'Recurring high-volume pipeline optimisation'
      ]
    },
    {
      title: 'Workflow Automation',
      description:
        'Dependable orchestration for repeatable execution, cleaner operations, and less manual effort across data tasks.',
      bullets: [
        'DAG design and dependency management',
        'Monitoring, alerting, and production debugging',
        'Operational efficiency through automation'
      ]
    },
    {
      title: 'Cloud Systems',
      description:
        'Practical cloud integration for compute, storage, and database-backed workflows, with maintainability and access design in mind.',
      bullets: [
        'AWS S3, EC2, RDS, and Aurora exposure',
        'Secure movement of data between systems',
        'Cost-aware infrastructure thinking'
      ]
    },
    {
      title: 'Web Design & Development',
      description:
        'Modern website design and front-end implementation focused on clarity, structure, responsiveness, and polished presentation.',
      bullets: [
        'Responsive website design',
        'Clean visual hierarchy and layout',
        'Front-end implementation with maintainable structure'
      ]
    }
  ];

  const dataProjects = [
    {
      title: 'Aurora Cluster Resize DAG',
      summary:
        'Built an Airflow DAG to resize Aurora clusters on schedule, helping balance performance needs and infrastructure cost across recurring workloads.',
      highlights: [
        'Automated routine cluster scaling',
        'Supported cost-aware cloud operations',
        'Reduced repetitive manual intervention'
      ]
    },
    {
      title: 'Airflow Log Management System',
      summary:
        'Developed an automated maintenance workflow for Airflow logs, improving storage usage and helping keep the production environment cleaner and more stable.',
      highlights: [
        'Optimised storage footprint',
        'Improved operational housekeeping',
        'Supported healthier production performance'
      ]
    },
    {
      title: 'Database Archiving Solution',
      summary:
        'Implemented an in-database archiving process that improved query responsiveness while reducing unnecessary storage pressure on active systems.',
      highlights: [
        'Improved database performance',
        'Reduced storage overhead',
        'Strengthened long-term data handling'
      ]
    },
    {
      title: 'S3 Data Migration Pipeline',
      summary:
        'Designed and executed a pipeline to move large archived datasets into S3, improving long-term access and supporting more scalable storage strategy.',
      highlights: [
        'Migrated large historical datasets',
        'Improved access to archived records',
        'Supported lower-cost storage patterns'
      ]
    }
  ];

  const currentFocus = [
    {
      title: 'Data systems',
      description:
        'Improving pipeline design, orchestration quality, and reliability across practical production-style workflows.'
    },
    {
      title: 'Web skills',
      description:
        'Sharpening modern front-end execution, cleaner interface structure, and stronger presentation across responsive websites.'
    },
    {
      title: 'Cloud growth',
      description:
        'Expanding cloud capability across AWS services and infrastructure patterns that support scalable, maintainable systems.'
    }
  ];

  const clientSlides = [
    {
      name: 'BOSS B',
      image:
        'https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/bossb-logo.webp',
      alt: 'Boss B brand logo',
      quote: 'Clean, modern, and professional from start to finish.'
    },
    {
      name: 'CTRA GROUP',
      image:
        'https://ik.imagekit.io/kw8awoqvwi/personal-portfolio/ctra-logo.webp',
      alt: 'CTRA Group brand logo',
      quote: 'The final website felt polished and much stronger visually.'
    }
  ];

  const carouselSlides = [
    clientSlides[clientSlides.length - 1],
    ...clientSlides,
    clientSlides[0]
  ];

  let navOpen = false;
  let isSticky = false;
  let showScrollTop = false;
  let activeSection = 'home';

  let carouselIndex = 1;
  let carouselAnimate = true;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Capabilities' },
    { id: 'work', label: 'Work' },
    { id: 'focus', label: 'Current Focus' },
    { id: 'contact', label: 'Contact' }
  ];

  $: activeClientIndex =
    carouselIndex === 0
      ? clientSlides.length - 1
      : carouselIndex === carouselSlides.length - 1
        ? 0
        : carouselIndex - 1;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function syncScrollState() {
    const scrollY = window.scrollY;
    isSticky = scrollY > 0;
    showScrollTop = scrollY > 500;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

    for (const section of sections) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const id = section.getAttribute('id') ?? '';

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeSection = id;
      }
    }
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      navOpen = false;
    }
  }

  function nextClient() {
    carouselIndex += 1;
  }

  function prevClient() {
    carouselIndex -= 1;
  }

  function goToClient(index: number) {
    carouselIndex = index + 1;
  }

  async function handleCarouselTransitionEnd() {
    if (carouselIndex === 0) {
      carouselAnimate = false;
      carouselIndex = clientSlides.length;
      await tick();
      requestAnimationFrame(() => {
        carouselAnimate = true;
      });
    }

    if (carouselIndex === carouselSlides.length - 1) {
      carouselAnimate = false;
      carouselIndex = 1;
      await tick();
      requestAnimationFrame(() => {
        carouselAnimate = true;
      });
    }
  }

  function loadScrollReveal(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }

      if ((window as Window & { ScrollReveal?: unknown }).ScrollReveal) {
        resolve();
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>('script[data-scrollreveal="true"]');
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => resolve(), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/scrollreveal';
      script.defer = true;
      script.dataset.scrollreveal = 'true';
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.head.appendChild(script);
    });
  }

  function initScrollReveal() {
    const srWindow = window as Window & {
      ScrollReveal?: (options?: Record<string, unknown>) => {
        reveal: (selector: string, options?: Record<string, unknown>) => void;
      };
    };

    if (!srWindow.ScrollReveal) return;

    srWindow.ScrollReveal({
      reset: false,
      distance: '24px',
      duration: 800,
      delay: 0
    });

    srWindow.ScrollReveal().reveal('.home-copy h1, .section-title', {
      delay: 500,
      origin: 'left'
    });
    srWindow.ScrollReveal().reveal('.home-copy h3, .home-copy p', {
      delay: 600,
      origin: 'right'
    });
    srWindow.ScrollReveal().reveal('.home-actions', {
      delay: 700,
      origin: 'bottom'
    });
    srWindow.ScrollReveal().reveal('.media-icons a, .contact-left li', {
      delay: 500,
      origin: 'left',
      interval: 150
    });
    srWindow.ScrollReveal().reveal('.home-image-wrap, .about-img', {
      delay: 500,
      origin: 'bottom'
    });
    srWindow.ScrollReveal().reveal('.about .description, .contact-right', {
      delay: 600,
      origin: 'right'
    });
    srWindow.ScrollReveal().reveal('.about .professional-list li, .about-actions', {
      delay: 500,
      origin: 'right',
      interval: 200
    });
    srWindow.ScrollReveal().reveal(
      '.skills-description, .services-description, .work-description, .focus-description, .contact-left h2',
      {
        delay: 700,
        origin: 'left'
      }
    );
    srWindow.ScrollReveal().reveal(
      '.skills-panel, .capability-card, .data-project-card, .carousel, .focus-card, .focus-quote, .contact-cta',
      {
        delay: 800,
        origin: 'bottom',
        interval: 150
      }
    );
    srWindow.ScrollReveal().reveal('footer .group', {
      delay: 500,
      origin: 'top',
      interval: 200
    });
  }

  onMount(() => {
    const cleanupFns: Cleanup[] = [];

    syncScrollState();

    const onScroll = () => syncScrollState();
    const onKeydown = (event: KeyboardEvent) => closeOnEscape(event);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeydown);

    cleanupFns.push(() => window.removeEventListener('scroll', onScroll));
    cleanupFns.push(() => window.removeEventListener('keydown', onKeydown));

    loadScrollReveal().then(() => {
      initScrollReveal();
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  });
</script>

<svelte:head>
  <title>Sibabalwe | Professional Brand</title>
  <meta
    name="description"
    content="Sibabalwe Sinyaniso builds across data systems, workflow automation, web development, and growing cloud capability."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  />
</svelte:head>

<a href="#home" class="visually-hidden">Skip to content</a>

<div
  class="scrollToTop-btn flex-centre {showScrollTop ? 'active' : ''}"
  aria-hidden="true"
  on:click={scrollToTop}
>
  <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
</div>

<header class:sticky={isSticky}>
  <div class="nav-bar">
    <a href="#home" class="logo">Sibabalwe</a>

    <nav class="navigation {navOpen ? 'active' : ''}" aria-label="Primary">
      <div class="nav-items" id="primary-menu">
        <button
          type="button"
          class="nav-close-btn"
          aria-label="Close menu"
          on:click={() => (navOpen = false)}
        ></button>

        {#each navLinks as link}
          <a
            href={`#${link.id}`}
            class:active={activeSection === link.id}
            on:click={() => (navOpen = false)}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </nav>

    <button
      type="button"
      class="nav-menu-btn"
      aria-label="Open menu"
      on:click={() => (navOpen = true)}
    ></button>
  </div>
</header>

<main>
  <section class="home flex-centre" id="home" aria-label="Home">
    <div class="home-container">
      <div class="media-icons">
        <a
          href="https://www.facebook.com/share/19MJHuJnRk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.tiktok.com/@sibabalwe_sinyaniso?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <i class="fab fa-tiktok" aria-hidden="true"></i>
        </a>
        <a
          href="https://medium.com/@sibabalwesinyaniso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <i class="fab fa-medium" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sibabalwe-sinyaniso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>

      <div class="home-copy">
        <div class="home-copy-row">
          <h1>Hi, I am Sibabalwe</h1>
        </div>
        <div class="home-copy-row">
          <h3>Building across data systems, web development, and cloud growth</h3>
        </div>
        <div class="home-copy-row">
          <p>
            I build reliable data workflows, thoughtful automation, and modern websites with a clean,
            practical approach. My focus is on improving both data and web skills while continuing to
            grow deeper cloud capability.
          </p>
        </div>
        <div class="home-copy-row home-actions">
          <a href="#contact" class="btn">
            Contact Me <i class="fa-solid fa-arrow-circle-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div class="home-image-wrap">
        <div class="home-img">
          <img
            src={`${base}/img/images/main-img.png`}
            alt="Sibabalwe portrait"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <a href="#about" class="scroll-down">
      Scroll Down <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
    </a>
  </section>

  <section class="about section" id="about" aria-label="About">
    <div class="container flex-centre">
      <div class="about-header">
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="content">
        <div class="about-img">
          <img
            src={`${base}/img/images/about-img.png`}
            alt="Working at a laptop"
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

  <section class="skills section" id="skills" aria-label="Skills">
    <div class="container flex-centre">
      <h2 class="section-title">Skills</h2>

      <div class="content">
        <div class="skills-description">
          <h3>Technical range with practical depth</h3>
          <p>
            My toolkit sits across data engineering, web development, automation, and growing cloud
            capability, with an emphasis on clarity, maintainability, and real-world usefulness.
          </p>
        </div>

        <div class="skills-summary-grid">
          <article class="skills-panel">
            <div class="skills-panel-heading">
              <span class="skills-panel-label">Foundation</span>
              <h4>Education</h4>
            </div>

            <div class="skills-panel-body">
              <div class="skills-entry">
                <span class="skills-entry-year">2019 - 2023</span>
                <p class="skills-entry-title">Advanced Diploma in Information Technology</p>
                <p class="skills-entry-meta">Cape Peninsula University of Technology, Cape Town</p>
              </div>
            </div>
          </article>

          <article class="skills-panel">
            <div class="skills-panel-heading">
              <span class="skills-panel-label">Range</span>
              <h4>Technical areas</h4>
            </div>

            <div class="skills-panel-body">
              <div class="skills-stack">
                <div class="skills-stack-row">
                  <span class="skills-stack-term">Data</span>
                  <span class="skills-stack-desc">ETL, ELT, validation, data movement, workflow automation</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Web</span>
                  <span class="skills-stack-desc">Responsive design, front-end structure, UI clarity, implementation</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Cloud</span>
                  <span class="skills-stack-desc">AWS exposure across storage, compute, databases, and infrastructure patterns</span>
                </div>
              </div>
            </div>
          </article>

          <article class="skills-panel">
            <div class="skills-panel-heading">
              <span class="skills-panel-label">Toolkit</span>
              <h4>Core stack</h4>
            </div>

            <div class="skills-panel-body">
              <div class="skills-stack">
                <div class="skills-stack-row">
                  <span class="skills-stack-term">Languages</span>
                  <span class="skills-stack-desc">Python, SQL</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Orchestration</span>
                  <span class="skills-stack-desc">Apache Airflow, scheduled workflows, monitoring</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Databases</span>
                  <span class="skills-stack-desc">MySQL, PostgreSQL, Vertica, Aurora exposure</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Tools</span>
                  <span class="skills-stack-desc">Pandas, Excel, Git, GitHub</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

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
            <p>Selected data and automation projects focused on reliability, efficiency, and scale.</p>
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
            <p>Selected client-facing web work presented through a clean visual showcase.</p>
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
                    <img src={client.image} class="d-block w-100" alt={client.alt} />
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

        <blockquote class="focus-quote">
          <p>
            "The happiest people spend much time in a state of flow - the state in which people are
            so involved in an activity that nothing else seems to matter; the experience itself is so
            enjoyable that people will do it even at great cost, for the sheer sake of doing it."
          </p>
          <footer>Mihaly Csikszentmihalyi</footer>
        </blockquote>
      </div>
    </div>
  </section>

  <section class="contact section" id="contact" aria-label="Contact">
    <div class="container flex-centre">
      <h2 class="section-title">Contact Me</h2>

      <div class="content">
        <div class="contact-left">
          <h2>Let's discuss your project</h2>
          <ul class="contact-list">
            <li>
              <h3 class="item-title"><i class="fa-solid fa-phone" aria-hidden="true"></i> Phone</h3>
              <span>+27 72 211 7731</span>
            </li>
            <li>
              <h3 class="item-title">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i> Email Address
              </h3>
              <span><a href="mailto:s.sibabalwee1@gmail.com">s.sibabalwee1@gmail.com</a></span>
            </li>
            <li>
              <h3 class="item-title">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i> Location
              </h3>
              <span>Pretoria, South Africa</span>
            </li>
          </ul>
        </div>

        <div class="contact-right">
          <p>
            I'm open to conversations around <br />
            <span>data systems, workflow automation, web projects, and professional collaborations.</span>
          </p>

          <div class="contact-cta">
            <a href="mailto:s.sibabalwee1@gmail.com" class="btn">
              Get In Touch <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="footer-container">
    <div class="about group">
      <h2>Sibabalwe</h2>
      <p>Data, web, and cloud-focused technical professional</p>
      <a href="#about">About Me</a>
    </div>

    <div class="hr" aria-hidden="true"></div>

    <div class="info group">
      <h3>More</h3>
      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Capabilities</a></li>
        <li><a href="#work">Selected Work</a></li>
        <li><a href="#focus">Current Focus</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="hr" aria-hidden="true"></div>

    <div class="follow group">
      <h3>Follow</h3>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/share/19MJHuJnRk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@sibabalwe_sinyaniso?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@sibabalwesinyaniso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <i class="fab fa-medium"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sibabalwe-sinyaniso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer-copyright group">
    <p>© 2026 by Sibabalwe Sinyaniso. All rights reserved.</p>
  </div>
</footer>