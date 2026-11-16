import { useState } from 'react';

interface TracePoint {
  x: number;
  y: number;
  time: string;
  mmol: string;
}

const TRACE_POINTS: TracePoint[] = [
  { x: 52, y: 146, time: '08:00', mmol: '6.4 mmol/L' },
  { x: 134, y: 124, time: '10:30', mmol: '7.8 mmol/L' },
  { x: 222, y: 152, time: '13:00', mmol: '6.0 mmol/L' },
  { x: 316, y: 112, time: '15:30', mmol: '8.5 mmol/L' },
  { x: 412, y: 142, time: '18:00', mmol: '6.7 mmol/L' },
  { x: 526, y: 124, time: '20:00', mmol: '7.8 mmol/L' },
];

export function GlucoseTraceHeroVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePoint =
    activeIndex !== null ? TRACE_POINTS[activeIndex] : TRACE_POINTS[5];

  return (
    <div
      className="w-full rounded-xl border border-ivory-border bg-white/95 p-6 backdrop-blur-md sm:p-7 dark:border-obsidian-border dark:bg-obsidian-surface/90"
      aria-label="Illustration of a steady glucose trace line staying inside a green target band"
      role="img"
    >
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-ivory-border pb-3 dark:border-obsidian-border">
        <span className="font-mono-data text-xs text-ink-muted dark:text-[#C8C6BE]">
          {activePoint.time} &middot; {activePoint.mmol}
        </span>
        <span className="font-mono-data text-xs text-[#157A45] dark:text-[#34D399]">
          Target band 3.9–10.0
        </span>
      </div>

      <svg
        viewBox="0 0 560 280"
        className="h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="targetBandGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Horizontal faint reference grid lines */}
        <line
          x1="44"
          y1="42"
          x2="536"
          y2="42"
          className="stroke-ivory-border dark:stroke-obsidian-border"
          strokeWidth="1"
        />
        <line
          x1="44"
          y1="232"
          x2="536"
          y2="232"
          className="stroke-ivory-border dark:stroke-obsidian-border"
          strokeWidth="1"
        />

        {/* Green target band */}
        <rect
          x="44"
          y="88"
          width="492"
          height="98"
          rx="4"
          fill="url(#targetBandGrad)"
        />
        <line
          x1="44"
          y1="88"
          x2="536"
          y2="88"
          className="stroke-[#16A34A]/45 dark:stroke-[#34D399]/40"
          strokeWidth="1.25"
          strokeDasharray="4 4"
        />
        <line
          x1="44"
          y1="186"
          x2="536"
          y2="186"
          className="stroke-[#16A34A]/45 dark:stroke-[#34D399]/40"
          strokeWidth="1.25"
          strokeDasharray="4 4"
        />

        {/* Australian mmol/L scale markers */}
        <text
          x="36"
          y="92"
          textAnchor="end"
          className="fill-[#157A45] dark:fill-[#34D399] font-mono-data text-[11px]"
        >
          10.0
        </text>
        <text
          x="36"
          y="141"
          textAnchor="end"
          className="fill-ink-muted dark:fill-[#96948C] font-mono-data text-[11px]"
        >
          7.0
        </text>
        <text
          x="36"
          y="190"
          textAnchor="end"
          className="fill-[#157A45] dark:fill-[#34D399] font-mono-data text-[11px]"
        >
          3.9
        </text>

        {/* Smooth glucose trace curve staying comfortably inside the green target band */}
        <path
          d="M 52 146 C 84 146, 102 126, 134 124 C 166 122, 186 150, 222 152 C 258 154, 278 114, 316 112 C 354 110, 376 144, 412 142 C 446 140, 472 118, 526 124"
          className="glucose-trace-path stroke-champagne-deep dark:stroke-champagne-light"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ['--trace-length' as string]: '560' }}
        />

        {/* Interactive hover checkpoints along the trace */}
        {TRACE_POINTS.map((point, idx) => (
          <g key={point.time}>
            {activeIndex === idx && (
              <line
                x1={point.x}
                y1="42"
                x2={point.x}
                y2="232"
                className="stroke-champagne-deep/35 dark:stroke-champagne-light/35"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            )}
            <circle
              cx={point.x}
              cy={point.y}
              r={idx === 5 || activeIndex === idx ? 5 : 3.5}
              className={`${
                idx === 5 ? 'glucose-trace-endpoint' : ''
              } fill-champagne-deep transition-transform duration-150 dark:fill-champagne-light`}
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="18"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </g>
        ))}

        {/* Endpoint halo */}
        <circle
          cx="526"
          cy="124"
          r="9"
          className="glucose-trace-endpoint pointer-events-none stroke-champagne-deep/35 dark:stroke-champagne-light/40"
          strokeWidth="2"
        />

        {/* Time axis labels */}
        <text
          x="52"
          y="256"
          className="fill-ink-muted dark:fill-[#96948C] font-mono-data text-[11px]"
        >
          08:00
        </text>
        <text
          x="208"
          y="256"
          className="fill-ink-muted dark:fill-[#96948C] font-mono-data text-[11px]"
        >
          12:00
        </text>
        <text
          x="364"
          y="256"
          className="fill-ink-muted dark:fill-[#96948C] font-mono-data text-[11px]"
        >
          16:00
        </text>
        <text
          x="526"
          y="256"
          textAnchor="end"
          className="fill-ink-muted dark:fill-[#96948C] font-mono-data text-[11px]"
        >
          20:00
        </text>
      </svg>

      <div className="mt-3 flex items-center justify-between text-xs text-ink-muted dark:text-[#96948C]">
        <span>mmol/L range</span>
        <span>Clear, steady communication for patients</span>
      </div>
    </div>
  );
}
