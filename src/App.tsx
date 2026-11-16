/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Header } from './components/Header';
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
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
