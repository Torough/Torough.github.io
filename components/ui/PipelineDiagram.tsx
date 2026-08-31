"use client";

import { motion } from "framer-motion";

const STAGES = [
  { label: "RAW DATA", meta: "source: sas / csv / api", y: 20 },
  { label: "PYSPARK ETL", meta: "reproducible pipeline", y: 116 },
  { label: "FOUNDRY MODEL", meta: "national trust-level", y: 212 },
  { label: "EXECUTIVE INSIGHT", meta: "status: delivered", y: 308, active: true },
];

export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 320 360"
      className="w-full h-auto max-w-md"
      role="img"
      aria-label="Diagram of a data pipeline flowing from raw data through PySpark ETL and a Foundry model to executive insight"
    >
      <motion.line
        x1="24"
        y1="44"
        x2="24"
        y2="332"
        stroke="oklch(0.32 0.016 70)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      {STAGES.map((stage, i) => (
        <motion.g
          key={stage.label}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.18 }}
        >
          <circle
            cx="24"
            cy={stage.y + 24}
            r="4"
            fill={stage.active ? "oklch(0.78 0.15 75)" : "oklch(0.32 0.016 70)"}
          />
          <rect
            x="48"
            y={stage.y}
            width="256"
            height="48"
            rx="2"
            fill={stage.active ? "oklch(0.26 0.06 72)" : "transparent"}
            stroke={stage.active ? "oklch(0.78 0.15 75)" : "oklch(0.32 0.016 70)"}
            strokeWidth="1"
          />
          <text
            x="64"
            y={stage.y + 21}
            fontFamily="var(--font-fragment-mono)"
            fontSize="12"
            letterSpacing="0.05em"
            fill={stage.active ? "oklch(0.78 0.15 75)" : "oklch(0.96 0.008 70)"}
          >
            {stage.label}
          </text>
          <text
            x="64"
            y={stage.y + 37}
            fontFamily="var(--font-fragment-mono)"
            fontSize="10"
            fill="oklch(0.56 0.014 70)"
          >
            {stage.meta}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
