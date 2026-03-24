<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  type Cleanup = () => void;

  const services = [
    {
      icon: 'fa-solid fa-database',
      title: 'Data Pipeline Development',
      description: 'Building scalable ETL and ELT pipelines that move data securely and efficiently between systems.',
      bullets: [
        'Custom pipeline design and automation',
        'Database integration and data flow optimisation',
        'Data quality checks and monitoring',
        'Performance tuning for high-volume data'
      ]
    },
    {
      icon: 'fa-solid fa-sitemap',
      title: 'Workflow Automation',
      description: 'Automating manual data processes to improve accuracy and save time.',
      bullets: [
        'Apache Airflow DAG design and scheduling',
        'Task orchestration and dependency handling',
        'Automated validation and alert systems',
        'Reduction of manual repetitive work'
      ]
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud Data Solutions',
      description: 'Designing and maintaining cloud-based data infrastructure.',
      bullets: [
        'AWS S3, EC2, and RDS setup',
        'Data migration and storage optimisation',
        'Backup and archiving strategies',
        'Cost-efficient data access solutions'
      ]
    },
    {
      icon: 'fa-brands fa-medium',
      title: 'Medium Content Writing',
      description: 'Writing engaging, insightful, and data-driven articles for Medium and other online audiences.',
      bullets: [
        'Data and tech-focused article writing',
        'SEO-friendly storytelling and formatting',
        'Consistent publishing and topic research',
        'Collaboration on thought-leadership content'
      ]
    }
  ];

  const portfolioItems = [
    {
      title: 'Web Design',
      subtitle: 'Personal portfolio',
      image: `${base}/img/images/port-webdesign.jpg`,
      modalTitle: 'Web Design – Portfolio Website',
      body:
        'Responsive single-page portfolio built with HTML, CSS, and JS (sections: Home, About, Skills, Services, Portfolio, Contact). Includes Font Awesome icons, scroll animations, and modular components for future projects.'
    },
    {
      title: 'Data Pipeline',
      subtitle: 'ETL / ELT',
      image: `${base}/img/images/port-data-pipeline.jpg`,
      modalTitle: 'Data Pipeline Development',
      body:
        'Designed and optimised ETL/ELT pipelines moving data from SFTP/AWS into warehouse layers. Included data validation, archiving patterns, and performance tuning for high-volume datasets.'
    },
    {
      title: 'Airflow Orchestration',
      subtitle: 'DAGs / Scheduling',
      image: `${base}/img/images/port-airflow.jpg`,
      modalTitle: 'Airflow DAG Orchestration',
      body:
        'Built and maintained multiple Apache Airflow DAGs (campaign monitoring, OSAS/CMS feeds, remote logging). Included external task sensors, conditional triggers, and environment-aware variables.'
    },
    {
      title: 'Cloud Data Solutions',
      subtitle: 'AWS / S3 / EC2',
      image: `${base}/img/images/port-cloud.jpg`,
      modalTitle: 'Cloud Data Solutions',
      body:
        'Provisioned and integrated AWS services (S3 access points, EC2, RDS) for data-engineering workloads. Focused on secure access, bucket structure, and cost-aware storage/archiving strategies.'
    },
    {
      title: 'Medium Writing',
      subtitle: 'Data / Engineering',
      image: `${base}/img/images/port-medium.jpg`,
      modalTitle: 'Medium Content Writing',
      body:
        'Long-form, technical-but-readable articles on data pipelines, Airflow tricks, and working with AWS in real client environments. Structured for SEO and developer audiences.'
    },
    {
      title: 'Branding & UI',
      subtitle: 'Support assets',
      image: `${base}/img/images/port-branding.jpg`,
      modalTitle: 'Branding & UI Support',
      body:
        'Support visuals and UI layouts for dashboards, portfolio sections, and service pages to keep the whole site consistent with any personal brand.'
    }
  ];

  let activeServiceModal: number | null = null;
  let activePortfolioModal: number | null = null;
  let navOpen = false;
  let isSticky = false;
  let showScrollTop = false;
  let activeSection = 'home';

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  function closeAllModals() {
    activeServiceModal = null;
    activePortfolioModal = null;
  }

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
      closeAllModals();
      navOpen = false;
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
      '.skills-description, .services-description, .contact-card, .contact-left h2',
      {
        delay: 700,
        origin: 'left'
      }
    );
    srWindow.ScrollReveal().reveal(
      '.skills-panel, .experience-card, .service-card, .portfolio .img-card',
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
  <title>Sibabalwe — Data Engineer Portfolio</title>
  <meta
    name="description"
    content="Remote Data Engineer in Pretoria, South Africa. Python, SQL, Airflow, AWS, ETL, ELT, workflow automation and portfolio projects."
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
          <h3>Remote Data Engineer — Pretoria, South Africa</h3>
        </div>
        <div class="home-copy-row">
          <p>
            I build scalable data pipelines and automation with Python, SQL, Airflow, and AWS—making
            data reliable and accessible across cloud and on-prem.
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
            alt="Sibabalwe — Data Engineer portrait"
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
            <h4>A <span>Data Engineer</span> based in <span>Pretoria, South Africa</span></h4>
            <p>
              I design and develop scalable data pipelines and automation solutions using Python,
              SQL, Apache Airflow, and AWS. My work focuses on improving data reliability,
              accuracy, and accessibility across cloud and on-premise environments. My passion is
              to simplify complex data systems through automation and thoughtful engineering. Check
              out my portfolio below.
            </p>
          </div>

          <ul class="professional-list">
            <li class="list-item">
              <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
              <h3>3+</h3>
              <span>Years of<br />Experience</span>
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
          <h3>Education, certifications, and core capabilities</h3>
          <p>
            I build reliable data workflows across Python, SQL, Airflow, and AWS, with a focus on
            maintainability, data quality, and production-ready delivery.
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
                <span class="skills-entry-year">2019 – 2023</span>
                <p class="skills-entry-title">Advanced Diploma in Information Technology</p>
                <p class="skills-entry-meta">Cape Peninsula University of Technology, Cape Town</p>
              </div>
            </div>
          </article>

          <article class="skills-panel">
            <div class="skills-panel-heading">
              <span class="skills-panel-label">Professional</span>
              <h4>Certifications</h4>
            </div>

            <div class="skills-panel-body">
              <div class="skills-entry">
                <span class="skills-entry-year">2025</span>
                <p class="skills-entry-title">AWS Partner: Accreditation (Technical)</p>
                <p class="skills-entry-meta">Amazon Web Services</p>
              </div>

              <div class="skills-entry">
                <span class="skills-entry-year">2025</span>
                <p class="skills-entry-title">Python Database Mastery: SQLAlchemy &amp; Alembic</p>
                <p class="skills-entry-meta">Udemy</p>
              </div>

              <div class="skills-entry">
                <span class="skills-entry-year">2024</span>
                <p class="skills-entry-title">ChatGPT Prompt Engineering for Developers</p>
                <p class="skills-entry-meta">DeepLearning.AI</p>
              </div>

              <div class="skills-entry">
                <span class="skills-entry-year">2022</span>
                <p class="skills-entry-title">Data Analysis with Python: Zero to Pandas</p>
                <p class="skills-entry-meta">Jovian</p>
              </div>
            </div>
          </article>

          <article class="skills-panel">
            <div class="skills-panel-heading">
              <span class="skills-panel-label">Execution</span>
              <h4>Core skills</h4>
            </div>

            <div class="skills-panel-body">
              <div class="skills-stack">
                <div class="skills-stack-row">
                  <span class="skills-stack-term">Languages</span>
                  <span class="skills-stack-desc">Python, SQL</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Data</span>
                  <span class="skills-stack-desc">ETL, ELT, workflow automation, data validation</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Orchestration</span>
                  <span class="skills-stack-desc">Apache Airflow, scheduled pipelines, monitoring</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Cloud</span>
                  <span class="skills-stack-desc">AWS S3, EC2, RDS</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Databases</span>
                  <span class="skills-stack-desc">MySQL, PostgreSQL, Vertica</span>
                </div>

                <div class="skills-stack-row">
                  <span class="skills-stack-term">Tools</span>
                  <span class="skills-stack-desc">Pandas, Excel, Git, GitHub</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="skills-description">
          <h3>Experience</h3>
          <p>
            Recent roles focused on delivery across ingestion, orchestration, optimisation, and
            cross-team support.
          </p>
        </div>

        <div class="experience-grid">
          <article class="experience-card">
            <div class="upper">
              <h3>Junior Data Engineer</h3>
              <h5>Full Time | Hybrid</h5>
              <span>February 2023 – Present</span>
            </div>

            <div class="hr"></div>

            <h4>Eighty20 Consulting, Cape Town</h4>

            <ul class="experience-list">
              <li>Designed and optimised 15+ ETL pipelines across AWS and SFTP-driven workflows.</li>
              <li>Built and maintained 25+ Airflow DAGs for scheduled data movement and monitoring.</li>
              <li>Automated recurring SQL reporting workflows, reducing manual effort by about 20 hours per week.</li>
              <li>Implemented validation checks that improved delivery quality and reduced downstream issues.</li>
              <li>Contributed to cross-team data initiatives and documented processes for smoother onboarding.</li>
            </ul>
          </article>

          <article class="experience-card">
            <div class="upper">
              <h3>Junior Developer</h3>
              <h5>Contract | Office</h5>
              <span>July 2022 – January 2023</span>
            </div>

            <div class="hr"></div>

            <h4>Eighty20 Consulting, Cape Town</h4>

            <ul class="experience-list">
              <li>Built ETL pipelines to process large daily survey datasets into MySQL-based delivery tables.</li>
              <li>Refactored legacy R workflows into Python to improve maintainability and execution speed.</li>
              <li>Improved processing efficiency using Pandas and SQL across repeated transformation steps.</li>
              <li>Worked within a small delivery team to support stable and reliable data operations.</li>
              <li>Helped standardise implementation patterns that made future pipeline work easier to extend.</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="services section" id="services" aria-label="Services">
    <div class="container flex-centre">
      <h2 class="section-title">Services</h2>

      <div class="content">
        <div class="services-description">
          <h3>What I provide</h3>
        </div>

        <ul class="service-list">
          {#each services as service, i}
            <li class="service-container">
              <div class="service-card">
                <i class={service.icon} aria-hidden="true"></i>
                <h3>{service.title}</h3>
                <div
                  class="learn-more-btn"
                  role="button"
                  tabindex="0"
                  on:click={() => (activeServiceModal = i)}
                  on:keydown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') activeServiceModal = i;
                  }}
                >
                  Learn More <i class="fa-solid fa-long-arrow-alt-right" aria-hidden="true"></i>
                </div>
              </div>

              <div
                class="service-modal flex-centre {activeServiceModal === i ? 'active' : ''}"
                aria-hidden={activeServiceModal === i ? 'false' : 'true'}
                on:click={(event) => {
                  if (event.currentTarget === event.target) activeServiceModal = null;
                }}
              >
                <div class="service-modal-body">
                  <i
                    class="fa-solid fa-times modal-close-btn"
                    aria-label="Close"
                    role="button"
                    tabindex="0"
                    on:click={() => (activeServiceModal = null)}
                    on:keydown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') activeServiceModal = null;
                    }}
                  ></i>
                  <h3>{service.title}</h3>
                  <h4>What is it?</h4>
                  <p>{service.description}</p>
                  <h4>What I provide</h4>
                  <ul>
                    {#each service.bullets as bullet}
                      <li>
                        <i class="fa-solid fa-check-circle" aria-hidden="true"></i> {bullet}
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="portfolio section" id="portfolio" aria-label="Portfolio">
    <div class="container flex-centre">
      <h2 class="section-title">Portfolio</h2>

      <div class="content">
        <div class="portfolio-list">
          {#each portfolioItems as item, i}
            <div class="img-card-container">
              <div
                class="img-card"
                role="button"
                tabindex="0"
                on:click={() => (activePortfolioModal = i)}
                on:keydown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') activePortfolioModal = i;
                }}
              >
                <div class="overlay"></div>
                <div class="info">
                  <h3>{item.title}</h3>
                  <span>{item.subtitle}</span>
                </div>
                <img src={item.image} alt={item.modalTitle} loading="lazy" decoding="async" />
              </div>

              <div
                class="portfolio-model flex-centre {activePortfolioModal === i ? 'active' : ''}"
                aria-hidden={activePortfolioModal === i ? 'false' : 'true'}
                on:click={(event) => {
                  if (event.currentTarget === event.target) activePortfolioModal = null;
                }}
              >
                <div class="portfolio-model-body">
                  <i
                    class="fa-solid fa-times portfolio-close-btn"
                    aria-label="Close"
                    role="button"
                    tabindex="0"
                    on:click={() => (activePortfolioModal = null)}
                    on:keydown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') activePortfolioModal = null;
                    }}
                  ></i>
                  <h3>{item.modalTitle}</h3>
                  <img src={item.image} alt={item.modalTitle} loading="lazy" decoding="async" />
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="get-in-touch sub-section">
      <div class="container">
        <div class="content flex-centre">
          <div class="contact-card flex-centre">
            <div class="title">
              <h4>Let's Talk</h4>
              <h3>About Your</h3>
              <h2>Next Project</h2>
            </div>
            <div class="contact-btn">
              <a href="#contact" class="btn">
                Get In Touch <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
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
            I'm always open to discussing <br />
            <span>data projects, workflow automation, collaborations, or creating websites.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="footer-container">
    <div class="about group">
      <h2>Sibabalwe</h2>
      <p>Front-end and Backend Developer</p>
      <a href="#about">About Me</a>
    </div>

    <div class="hr" aria-hidden="true"></div>

    <div class="info group">
      <h3>More</h3>
      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
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
            href="https://www.tiktok.com/"
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