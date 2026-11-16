import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { LUXURY_EASE } from './LuxuryMotion';

interface PageHeroBackdropProps {
  imageSrc: string;
}

export function PageHeroBackdrop({ imageSrc }: PageHeroBackdropProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: backdropRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const parallaxY = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', shouldReduceMotion ? '0%' : '12%']
  );

  return (
    <div
      ref={backdropRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-ivory dark:bg-obsidian"
    >
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.95, ease: LUXURY_EASE }}
        className="h-full w-full"
      >
        <img
          src={imageSrc}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-25 dark:opacity-50"
        />
      </motion.div>

      {/* Measured contrast scrim for both light ivory and obsidian black modes */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/85 to-ivory dark:from-obsidian/55 dark:via-obsidian/70 dark:to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.10),transparent_58%)]" />
    </div>
  );
}
