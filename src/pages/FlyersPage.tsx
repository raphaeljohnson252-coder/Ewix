import { Check } from 'lucide-react';
import flyersBackdrop from '../assets/images/bg_flyers_obsidian_1794871450441.jpg';
import { FaqItem, FaqList } from '../components/FaqList';
import {
  HeroEntrance,
  RevealBlock,
  StaggerGrid,
  StaggerItem,
} from '../components/LuxuryMotion';
import { PageHeroBackdrop } from '../components/PageHeroBackdrop';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { buildWhatsAppUrl, FLYER_SAMPLES } from '../data/siteContent';
import { RouteLink } from '../router';

const INCLUDED = [
  'Print-ready files and a digital version for social media',
  'Sizes such as A4, A5 and social posts: [confirm sizes]',
  'Colours, fonts and logo matched to your brand',
  'Wording you supply and approve',
];

const QUESTIONS: FaqItem[] = [
  {
    question: 'How much does it cost?',
    answer:
      "Projects start from AUD $[price]. The final price depends on the size and number of designs, and I'll send you a clear quote after your free mockup. No obligation.",
  },
  {
    question: 'Do you handle printing?',
    answer:
      '[Answer honestly: e.g. "I supply print-ready files and you choose the printer."]',
  },
  {
    question: 'Can the flyer match my existing website?',
    answer: 'Yes.',
  },
];

export function FlyersPage() {
  const whatsappUrl = buildWhatsAppUrl('flyers');

  const scrollToSamples = () => {
    const el = document.getElementById('samples');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PageHeroBackdrop imageSrc={flyersBackdrop} />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-18 sm:px-6 sm:pt-22 sm:pb-24 lg:px-8">
          <HeroEntrance className="max-w-3xl space-y-6">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-5xl sm:leading-[1.1] dark:text-[#F5F4F0]">
              Flyers and print that match your brand
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg dark:text-[#C8C6BE]">
              Flyers, posters and handouts that look like your website, so patients recognise you everywhere.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <RouteLink
                to="/contact"
                service="Flyers & Print"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                Get a free mockup
              </RouteLink>
              <button
                type="button"
                onClick={scrollToSamples}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-ivory-border bg-white/90 px-6 py-3 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-champagne hover:text-champagne-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border-strong dark:bg-obsidian-surface/85 dark:text-[#F5F4F0] dark:hover:border-champagne-light dark:hover:text-champagne-light"
              >
                See samples
              </button>
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-ivory-border bg-white dark:border-obsidian-border dark:bg-obsidian-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <RevealBlock>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-[#F5F4F0]">
                  What&apos;s included
                </h2>
                <ul className="mt-6 space-y-4">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-ink-muted dark:text-[#C8C6BE]"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-champagne-deep dark:text-champagne-light"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-ivory-border bg-ivory p-7 lg:col-span-5 dark:border-obsidian-border dark:bg-obsidian">
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-[#F5F4F0]">
                    Pricing &amp; turnaround
                  </h3>
                  <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                    Starting from AUD $[price]. Every project is quoted after a free mockup and a short chat, so you only pay for what you need.
                  </p>
                  <p className="text-sm font-medium text-ink-muted dark:text-[#96948C]">
                    Turnaround: [time].
                  </p>
                </div>
                <div className="mt-8">
                  <RouteLink
                    to="/contact"
                    service="Flyers & Print"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                  >
                    Get a quote
                  </RouteLink>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Samples and past work */}
      <section
        id="samples"
        className="scroll-mt-20 border-t border-ivory-border bg-ivory dark:border-obsidian-border dark:bg-obsidian"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <RevealBlock className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-[#F5F4F0]">
              Samples and past work
            </h2>
            <p className="text-sm text-ink-muted dark:text-[#96948C]">
              Placeholder sample blocks — ready for flyer designs
            </p>
          </RevealBlock>

          <StaggerGrid className="mt-10 grid gap-8 md:grid-cols-3">
            {FLYER_SAMPLES.map((sample) => (
              <StaggerItem key={sample.id}>
                <article className="flex h-full flex-col justify-between rounded-xl border border-ivory-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne/60 sm:p-6 dark:border-obsidian-border dark:bg-obsidian-surface dark:hover:border-champagne/55">
                  <div>
                    <PlaceholderFrame kind="flyer" label={sample.label} />
                    <h3 className="mt-5 font-display text-base font-semibold text-ink dark:text-[#F5F4F0]">
                      {sample.clientName}, {sample.flyerType}
                    </h3>
                    <dl className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                      <div>
                        <dt className="font-semibold text-ink dark:text-[#F5F4F0]">
                          Where it was used:
                        </dt>
                        <dd>{sample.whereUsed}</dd>
                      </div>
                      {sample.result && (
                        <div>
                          <dt className="font-semibold text-ink dark:text-[#F5F4F0]">
                            Result or comment:
                          </dt>
                          <dd>{sample.result}</dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div className="mt-6 border-t border-ivory-border pt-4 dark:border-obsidian-border">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center rounded-lg border border-ivory-border bg-ivory px-4 py-2 text-sm font-medium text-ink whitespace-nowrap transition-colors duration-150 hover:border-champagne hover:text-champagne-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:hover:border-champagne-light dark:hover:text-champagne-light"
                    >
                      Want something like this? Message me
                    </a>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Questions & Cross-links */}
      <section className="border-t border-ivory-border bg-white dark:border-obsidian-border dark:bg-obsidian-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <RevealBlock className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-[#F5F4F0]">
              Questions
            </h2>
            <div className="mt-8">
              <FaqList items={QUESTIONS} />
            </div>
            <p className="mt-10 text-base text-ink-muted dark:text-[#C8C6BE]">
              Also see:{' '}
              <RouteLink
                to="/websites"
                className="font-medium text-champagne-deep underline decoration-ivory-border underline-offset-4 transition-colors duration-150 hover:text-ink dark:text-champagne-light dark:decoration-obsidian-border-strong dark:hover:text-[#F5F4F0]"
              >
                Websites
              </RouteLink>{' '}
              <span aria-hidden="true" className="mx-2 text-ink-muted dark:text-[#96948C]">
                |
              </span>{' '}
              <RouteLink
                to="/ai-videos"
                className="font-medium text-champagne-deep underline decoration-ivory-border underline-offset-4 transition-colors duration-150 hover:text-ink dark:text-champagne-light dark:decoration-obsidian-border-strong dark:hover:text-[#F5F4F0]"
              >
                AI Videos
              </RouteLink>
            </p>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
}
