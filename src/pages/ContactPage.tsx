import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import contactBackdrop from '../assets/images/bg_contact_obsidian_1794871451107.jpg';
import { HeroEntrance, ParallaxText } from '../components/LuxuryMotion';
import { PageHeroBackdrop } from '../components/PageHeroBackdrop';
import {
  buildWhatsAppUrl,
  BUSINESS_NAME,
  CONTACT_EMAIL,
  DESIGNER_NAME,
  EMAIL_HREF,
  LOCATION_TEXT,
  WHATSAPP_BASE,
} from '../data/siteContent';
import { useRouter } from '../router';

const SERVICE_OPTIONS = ['Websites', 'Flyers & Print', 'AI Videos', 'Not sure'];

export function ContactPage() {
  const { preselectedService } = useRouter();

  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [service, setService] = useState(
    SERVICE_OPTIONS.includes(preselectedService)
      ? preselectedService
      : 'Websites'
  );
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService)) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!message.trim()) {
      setError('Please add a short message about what you need.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const composedWhatsAppUrl = (() => {
    const parts = [
      `Hi ${DESIGNER_NAME}, my name is ${name.trim() || 'a business owner'}`,
      businessName.trim() ? `from ${businessName.trim()}` : '',
      `(${service}).`,
      websiteLink.trim() ? `Website: ${websiteLink.trim()}.` : '',
      message.trim(),
    ]
      .filter(Boolean)
      .join(' ');
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(parts).replace(/'/g, '%27')}`;
  })();

  const composedEmailHref = (() => {
    const subject = encodeURIComponent(
      `Portfolio enquiry (${service}) — ${businessName.trim() || name.trim()}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        businessName.trim() ? `Business name: ${businessName.trim()}` : '',
        websiteLink.trim() ? `Website link: ${websiteLink.trim()}` : '',
        `Which service: ${service}`,
        '',
        message.trim(),
      ]
        .filter((line) => line !== undefined)
        .join('\n')
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  })();

  return (
    <div>
      <section className="relative overflow-hidden">
        <PageHeroBackdrop imageSrc={contactBackdrop} />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-18 sm:px-6 sm:pt-22 sm:pb-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left column: Headline, text, direct buttons */}
            <HeroEntrance className="space-y-6 lg:col-span-5">
              <ParallaxText>
                <p className="text-sm font-medium tracking-wide text-champagne-deep dark:text-champagne-light">
                  {BUSINESS_NAME} &middot; {DESIGNER_NAME}
                </p>
              </ParallaxText>
              <ParallaxText>
                <h1 className="font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-5xl sm:leading-[1.1] dark:text-[#F5F4F0]">
                  Let&apos;s look at your website
                </h1>
              </ParallaxText>
              <ParallaxText>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg dark:text-[#C8C6BE]">
                  Send me your website link and I&apos;ll reply with one specific improvement and a free homepage mockup. No obligation.
                </p>
              </ParallaxText>

              <ParallaxText>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                  >
                    Message on WhatsApp
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-ivory-border bg-white/90 px-6 py-3 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-champagne hover:text-champagne-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne dark:border-obsidian-border-strong dark:bg-obsidian-surface/85 dark:text-[#F5F4F0] dark:hover:border-champagne-light dark:hover:text-champagne-light"
                  >
                    Email me ({CONTACT_EMAIL})
                  </a>
                </div>
              </ParallaxText>

              <ParallaxText>
                <p className="pt-4 text-sm leading-relaxed text-ink-muted dark:text-[#96948C]">
                  Based in {LOCATION_TEXT}, working with clients in Australia. I usually reply within 24 hours.
                </p>
              </ParallaxText>
            </HeroEntrance>

            {/* Right column: Simple form */}
            <HeroEntrance delay={0.14} parallaxOffset={-14} className="lg:col-span-7">
              <div className="rounded-xl border border-ivory-border bg-white/95 p-6 backdrop-blur-md sm:p-8 dark:border-obsidian-border dark:bg-obsidian-surface/90">
                {submitted ? (
                  <div className="space-y-5 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-6 w-6 shrink-0 text-[#157A45] dark:text-[#34D399]"
                        aria-hidden="true"
                      />
                      <div className="space-y-2">
                        <h2 className="font-display text-xl font-semibold text-ink dark:text-[#F5F4F0]">
                          Message prepared for {DESIGNER_NAME} ({BUSINESS_NAME})
                        </h2>
                        <p className="text-base leading-relaxed text-ink-muted dark:text-[#C8C6BE]">
                          Send your details straight to WhatsApp or email to get your free homepage mockup and quote.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-ivory-border bg-ivory p-4 text-sm text-ink-muted dark:border-obsidian-border dark:bg-obsidian dark:text-[#C8C6BE]">
                      <p>
                        <strong className="text-ink dark:text-[#F5F4F0]">
                          Name:
                        </strong>{' '}
                        {name}
                      </p>
                      {businessName && (
                        <p className="mt-1">
                          <strong className="text-ink dark:text-[#F5F4F0]">
                            Business name:
                          </strong>{' '}
                          {businessName}
                        </p>
                      )}
                      {websiteLink && (
                        <p className="mt-1">
                          <strong className="text-ink dark:text-[#F5F4F0]">
                            Website link:
                          </strong>{' '}
                          {websiteLink}
                        </p>
                      )}
                      <p className="mt-1">
                        <strong className="text-ink dark:text-[#F5F4F0]">
                          Which service:
                        </strong>{' '}
                        {service}
                      </p>
                      <p className="mt-1">
                        <strong className="text-ink dark:text-[#F5F4F0]">
                          Message:
                        </strong>{' '}
                        {message}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={composedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-champagne-light active:scale-[0.98]"
                      >
                        Send via WhatsApp
                      </a>
                      <a
                        href={composedEmailHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-ivory-border bg-white px-5 py-3 text-sm font-medium text-ink whitespace-nowrap transition-colors duration-150 hover:border-champagne hover:text-champagne-deep dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:hover:border-champagne-light dark:hover:text-champagne-light"
                      >
                        Send via Email
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-ink-muted whitespace-nowrap transition-colors duration-150 hover:text-ink dark:text-[#96948C] dark:hover:text-[#F5F4F0]"
                      >
                        Edit message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-ink dark:text-[#F5F4F0]"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1.5 block w-full rounded-lg border border-ivory-border bg-ivory px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/60 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/25 dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:placeholder:text-[#78766E] dark:focus:border-champagne-light"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-business"
                          className="block text-sm font-medium text-ink dark:text-[#F5F4F0]"
                        >
                          Business name
                        </label>
                        <input
                          id="contact-business"
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="mt-1.5 block w-full rounded-lg border border-ivory-border bg-ivory px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/60 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/25 dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:placeholder:text-[#78766E] dark:focus:border-champagne-light"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-website"
                          className="block text-sm font-medium text-ink dark:text-[#F5F4F0]"
                        >
                          Website link
                        </label>
                        <input
                          id="contact-website"
                          type="url"
                          placeholder="https://"
                          value={websiteLink}
                          onChange={(e) => setWebsiteLink(e.target.value)}
                          className="mt-1.5 block w-full rounded-lg border border-ivory-border bg-ivory px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/60 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/25 dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:placeholder:text-[#78766E] dark:focus:border-champagne-light"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-medium text-ink dark:text-[#F5F4F0]"
                        >
                          Which service
                        </label>
                        <select
                          id="contact-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="mt-1.5 block w-full rounded-lg border border-ivory-border bg-ivory px-3.5 py-2.5 text-base text-ink focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/25 dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:focus:border-champagne-light"
                        >
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-ink dark:text-[#F5F4F0]"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1.5 block w-full rounded-lg border border-ivory-border bg-ivory px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/60 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/25 dark:border-obsidian-border-strong dark:bg-obsidian dark:text-[#F5F4F0] dark:placeholder:text-[#78766E] dark:focus:border-champagne-light"
                      />
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="text-sm font-medium text-[#B91C1C] dark:text-[#FCA5A5]"
                      >
                        {error}
                      </p>
                    )}

                    <div>
                      <button
                        type="submit"
                        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-champagne px-6 py-3 text-sm font-semibold text-obsidian whitespace-nowrap transition-all duration-150 hover:bg-champagne-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>
    </div>
  );
}
