import { motion } from 'motion/react';

interface PageHeroBackdropProps {
  imageSrc: string;
}

export function PageHeroBackdrop({ imageSrc }: PageHeroBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-ivory dark:bg-obsidian"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
