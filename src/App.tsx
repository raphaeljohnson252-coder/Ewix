/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'motion/react';
import { Header } from './components/Header';
import {
  APP_PAGE_VARIANTS,
  LUXURY_EASE,
  ScrollProgressBar,
} from './components/LuxuryMotion';
import { SharedCtaAndFooter } from './components/SharedCtaAndFooter';
import { RoutePath } from './data/siteContent';
import { AiVideosPage } from './pages/AiVideosPage';
import { ContactPage } from './pages/ContactPage';
import { FlyersPage } from './pages/FlyersPage';
import { HomePage } from './pages/HomePage';
import { WebsitesPage } from './pages/WebsitesPage';
import { RouterProvider, useRouter } from './router';

const PAGE_TITLES: Record<RoutePath, string> = {
  '/': 'Ewixstudio — Websites, Flyers & AI Videos by Raphael',
  '/websites': 'Websites for Diabetes & Health Businesses — Ewixstudio',
  '/flyers-and-print': 'Flyers & Print for Health Businesses — Ewixstudio',
  '/ai-videos': 'AI Videos for Diabetes & Health Businesses — Ewixstudio',
  '/contact': 'Contact Raphael (Ewixstudio) — Request a Free Homepage Mockup',
};

function AppShell() {
  const { path } = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    document.title = PAGE_TITLES[path] || PAGE_TITLES['/'];
  }, [path]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        try {
          localStorage.setItem('ewixstudio-theme', 'dark');
        } catch {
          // ignore storage errors
        }
      } else {
        document.documentElement.classList.remove('dark');
        try {
          localStorage.setItem('ewixstudio-theme', 'light');
        } catch {
          // ignore storage errors
        }
      }
      return next;
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-ink dark:bg-obsidian dark:text-[#F5F4F0]">
      <ScrollProgressBar />
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Cinematic Obsidian curtain wipe & gold hairline route-reveal shimmer */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            key={`curtain-${path}`}
            aria-hidden="true"
            initial={{ scaleY: 1, opacity: 0.95 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.58, ease: LUXURY_EASE }}
            className="pointer-events-none fixed inset-0 top-16 z-30 origin-top bg-ivory dark:bg-obsidian"
          />
          <motion.div
            key={`shimmer-${path}`}
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0.95 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="pointer-events-none fixed inset-x-0 top-16 z-30 h-[2px] origin-left bg-gradient-to-r from-transparent via-champagne to-transparent"
          />
        </>
      )}

      <main className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            variants={
              shouldReduceMotion
                ? {
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { duration: 0.15 } },
                    exit: { opacity: 0, transition: { duration: 0.1 } },
                  }
                : APP_PAGE_VARIANTS
            }
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {path === '/' && <HomePage />}
            {path === '/websites' && <WebsitesPage />}
            {path === '/flyers-and-print' && <FlyersPage />}
            {path === '/ai-videos' && <AiVideosPage />}
            {path === '/contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <SharedCtaAndFooter />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <AppShell />
      </RouterProvider>
    </MotionConfig>
  );
}
