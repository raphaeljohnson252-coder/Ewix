import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export const APP_PAGE_VARIANTS = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.994,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: LUXURY_EASE,
      when: 'beforeChildren' as const,
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.996,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function RevealBlock({
  children,
  className = '',
  delay = 0,
  yOffset = 22,
}: RevealBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.62, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HeroEntranceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallaxOffset?: number;
}

export function HeroEntrance({
  children,
  className = '',
  delay = 0,
  parallaxOffset = -28,
}: HeroEntranceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const parallaxY = useTransform(
    smoothProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : parallaxOffset]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ y: parallaxY }}
      className={className}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.65,
              delay,
              ease: LUXURY_EASE,
              staggerChildren: 0.085,
              delayChildren: delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxText({ children, className = '' }: ParallaxTextProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: LUXURY_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className = '' }: StaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.075,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.52, ease: LUXURY_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
