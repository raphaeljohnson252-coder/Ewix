import { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import homeBackdrop from '../assets/images/bg_home_obsidian_1794871449160.jpg';
import { GlucoseTraceHeroVisual } from '../components/GlucoseTraceHeroVisual';
import {
  HeroEntrance,
  RevealBlock,
  StaggerGrid,
  StaggerItem,
} from '../components/LuxuryMotion';
import { PageHeroBackdrop } from '../components/PageHeroBackdrop';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { ProjectLightbox } from '../components/ProjectLightbox';
import {
  BUSINESS_NAME,
  REAL_TESTIMONIAL,
  RoutePath,
  WEBSITE_PROJECTS,
  WebsiteProject,
} from '../data/siteContent';
import { RouteLink, useRouter } from '../router';

const SERVICES = [
  {
    title: 'Websites',
    description: 'Clear, fast sites with booking or ordering buttons.',
    price: 'Starting from AUD $[price].',
    button: 'See website work',
    to: '/websites' as RoutePath,
  },
  {
    title: 'Flyers & Print',
    description: 'Flyers, posters and handouts that match your brand.',
    price: 'Starting from AUD $[price].',
    button: 'See flyer work',
    to: '/flyers-and-print' as RoutePath,
  },
  {
    title: 'AI Videos',
    description: 'Short explainers and social clips in plain language.',
    price: 'Starting from AUD $[price].',
    button: 'See video work',
    to: '/ai-videos' as RoutePath,
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Free mockup',
    text: 'You share your website or idea. I send a homepage mockup at no cost.',
  },
  {
    number: '02',
    title: 'Quote',
    text: 'After a short chat, I send a fixed quote for the whole project, so you know the cost before we begin.',
  },
  {
    number: '03',
    title: 'Build and review',
    text: "I design and build using your wording, photos and branding. You give feedback and I make changes until you're happy.",
  },
  {
    number: '04',
    title: 'Launch and support',
    text: 'I publish the work and stay available for updates.',
  },
];

export function HomePage() {
  const { navigate } = useRouter();
  const [selectedProject, setSelectedProject] =
    useState<WebsiteProject | null>(null);

  const featuredWebsite = WEBSITE_PROJECTS[0]; // Midtown Dental

  const scrollToFeatured = () => {
    const el = document.getElementById('featured-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PageHeroBackdrop imageSrc={homeBackdrop} />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-18 sm:px-6 sm:pt-22 sm:pb-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <HeroEntrance className="space-y-6 lg:col-span-6">
              <p className="text-sm font-medium tracking-wide text-champagne-deep dark:text-champagne-light">
                {BUSINESS_NAME} &middot; Lagos, Nigeria &middot; Serving health businesses in Australia
              </p>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-5xl sm:leading-[1.1] dark:text-[#F5F4F0]">
                Websites and videos for diabetes and health businesses
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg dark:text-[#C8C6BE]">
                I design clear, mobile-friendly websites, flyers and short AI videos that help patients and customers find you, understand what you offer and get in touch.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <RouteLink
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  Get a free mockup
                </RouteLink>
                <button
                  type="button"
                  onClick={scrollToFeatured}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-ivory-border bg-white/90 px-6 py-3 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-champagne hover:text-champagne-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border-strong dark:bg-obsidian-surface/85 dark:text-[#F5F4F0] dark:hover:border-champagne-light dark:hover:text-champagne-light"
                >
                  See my work
                </button>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-6">
              <GlucoseTraceHeroVisual />
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* What I make */}
      <section className="border-t border-ivory-border bg-white dark:border-obsidian-border dark:bg-obsidian-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RevealBlock className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance sm:text-3xl dark:text-[#F5F4F0]">
              What I make
            </h2>
          </RevealBlock>

          <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-ivory-border bg-ivory p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/60 sm:p-7 dark:border-obsidian-border dark:bg-obsidian dark:hover:border-champagne/55">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-ink dark:text-[#F5F4F0]">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                      {service.description}
                    </p>
                    <p className="pt-1 text-sm font-medium text-ink-muted dark:text-[#96948C]">
                      {service.price}
                    </p>
                  </div>

                  <div className="mt-8">
                    <RouteLink
                      to={service.to}
                      className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-champagne-deep whitespace-nowrap transition-colors duration-150 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne dark:text-champagne-light dark:hover:text-[#F5F4F0]"
                    >
                      <span>{service.button}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </RouteLink>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Featured work (one per service) */}
      <section
        id="featured-work"
        className="scroll-mt-20 border-t border-ivory-border bg-ivory dark:border-obsidian-border dark:bg-obsidian"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RevealBlock className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance sm:text-3xl dark:text-[#F5F4F0]">
              Featured work
            </h2>
            <p className="text-sm text-ink-muted dark:text-[#96948C]">
              Select a service tile to explore work and samples
            </p>
          </RevealBlock>

          <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Tile 1: Websites (uses real Midtown Dental screenshot) */}
            <StaggerItem>
              <button
                type="button"
                onClick={() => navigate('/websites')}
                className="group flex h-full w-full flex-col rounded-xl border border-ivory-border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border dark:bg-obsidian-surface dark:hover:border-champagne/65"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-ivory-border bg-obsidian dark:border-obsidian-border">
                  <img
                    src={featuredWebsite.imageSrc}
                    alt={featuredWebsite.imageAlt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 px-1">
                  <p className="text-base font-medium text-ink dark:text-[#F5F4F0]">
                    {featuredWebsite.clientName}, Websites
                  </p>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-champagne-deep dark:text-[#96948C] dark:group-hover:text-champagne-light"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </StaggerItem>

            {/* Tile 2: Flyers & Print */}
            <StaggerItem>
              <button
                type="button"
                onClick={() => navigate('/flyers-and-print')}
                className="group flex h-full w-full flex-col rounded-xl border border-ivory-border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border dark:bg-obsidian-surface dark:hover:border-champagne/65"
              >
                <PlaceholderFrame
                  kind="flyer"
                  label="Flyer placeholder"
                  aspectClass="aspect-[16/10]"
                />
                <div className="mt-4 flex items-center justify-between gap-2 px-1">
                  <p className="text-base font-medium text-ink dark:text-[#F5F4F0]">
                    [Client name], Flyers &amp; Print
                  </p>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-champagne-deep dark:text-[#96948C] dark:group-hover:text-champagne-light"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </StaggerItem>

            {/* Tile 3: AI Videos */}
            <StaggerItem>
              <button
                type="button"
                onClick={() => navigate('/ai-videos')}
                className="group flex h-full w-full flex-col rounded-xl border border-ivory-border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border dark:bg-obsidian-surface dark:hover:border-champagne/65"
              >
                <PlaceholderFrame
                  kind="video"
                  label="Video placeholder"
                  aspectClass="aspect-[16/10]"
                />
                <div className="mt-4 flex items-center justify-between gap-2 px-1">
                  <p className="text-base font-medium text-ink dark:text-[#F5F4F0]">
                    [Client name], AI Videos
                  </p>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-champagne-deep dark:text-[#96948C] dark:group-hover:text-champagne-light"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* Selected Website Designs Gallery (all 8 uploaded screenshots) */}
      <section className="border-t border-ivory-border bg-white dark:border-obsidian-border dark:bg-obsidian-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RevealBlock className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance sm:text-3xl dark:text-[#F5F4F0]">
                Website designs by {BUSINESS_NAME}
              </h2>
              <p className="max-w-2xl text-base text-ink-muted dark:text-[#C8C6BE]">
                Click any website to inspect the full-page design, layout structure, and problem solved.
              </p>
            </div>
            <RouteLink
              to="/websites"
              className="inline-flex items-center gap-2 text-sm font-medium text-champagne-deep whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-ink dark:text-champagne-light dark:hover:text-[#F5F4F0]"
            >
              <span>See all website case studies</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </RouteLink>
          </RevealBlock>

          <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WEBSITE_PROJECTS.map((project) => (
              <StaggerItem key={project.id}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-ivory-border bg-ivory text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border dark:bg-obsidian dark:hover:border-champagne/65"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-ivory-border bg-obsidian-surface dark:border-obsidian-border">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-champagne-light opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <p className="text-xs text-ink-muted dark:text-[#96948C]">
                        {project.category}
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold text-ink dark:text-[#F5F4F0]">
                        {project.clientName}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-ivory-border bg-ivory dark:border-obsidian-border dark:bg-obsidian">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RevealBlock>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance sm:text-3xl dark:text-[#F5F4F0]">
              How it works
            </h2>
          </RevealBlock>

          <StaggerGrid className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="space-y-3 border-t border-ivory-border pt-6 dark:border-obsidian-border">
                  <div className="font-mono-data text-sm font-medium text-champagne-deep dark:text-champagne-light">
                    {index + 1}.
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-[#F5F4F0]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* How pricing works + Trust */}
      <section className="border-t border-ivory-border bg-white dark:border-obsidian-border dark:bg-obsidian-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RevealBlock>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {/* How pricing works */}
              <div className="flex flex-col justify-between rounded-xl border border-ivory-border bg-ivory p-7 sm:p-9 dark:border-obsidian-border dark:bg-obsidian">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance dark:text-[#F5F4F0]">
                    Clear pricing, no surprises
                  </h2>
                  <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                    Each service has a starting price. After your free mockup and a short chat, I send you a fixed quote for the whole project, so you know the cost before we begin.
                  </p>
                </div>
                <div className="mt-8">
                  <RouteLink
                    to="/contact"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                  >
                    Get a quote
                  </RouteLink>
                </div>
              </div>

              {/* Trust */}
              <div className="flex flex-col justify-between rounded-xl border border-ivory-border bg-ivory p-7 sm:p-9 dark:border-obsidian-border dark:bg-obsidian">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink text-balance dark:text-[#F5F4F0]">
                    Designed with Australian health advertising rules in mind
                  </h2>
                  <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                    I use wording you supply and approve, and I avoid claims like &quot;cures&quot; or &quot;reverses&quot;. Please check final wording with your own compliance adviser.
                  </p>
                </div>

                {REAL_TESTIMONIAL && (
                  <blockquote className="mt-8 rounded-lg border border-ivory-border bg-white p-5 dark:border-obsidian-border dark:bg-obsidian-surface">
                    <p className="text-base italic leading-relaxed text-ink dark:text-[#F5F4F0]">
                      &ldquo;{REAL_TESTIMONIAL.quote}&rdquo;
                    </p>
                    <footer className="mt-3 text-sm text-ink-muted dark:text-[#96948C]">
                      &mdash; {REAL_TESTIMONIAL.clientName}, {REAL_TESTIMONIAL.business},{' '}
                      {REAL_TESTIMONIAL.city}
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
