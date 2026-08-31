"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import PipelineDiagram from "@/components/ui/PipelineDiagram";

const BOOT_LINES = [
  "role: analytics-engineer",
  "org: nhs-england",
  "focus: reproducible-analytical-pipelines",
  "loc: leeds, uk",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-grid"
        style={{ backgroundSize: "48px 48px", opacity: 0.5 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-28 pb-20 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-small text-textMuted mb-6 space-y-1"
          >
            {BOOT_LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
              >
                <span className="text-accent">{">"}</span> {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="text-hero font-sans text-textPrimary mb-6"
          >
            Gabriel
            <br />
            <span className="text-accent">Chichi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-textBody text-body leading-relaxed mb-9 max-w-lg"
          >
            I build the pipelines that turn national healthcare data into decisions:
            PySpark, Palantir Foundry, and reproducible analytics at NHS England scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-accent text-background font-mono text-small uppercase tracking-wide font-medium rounded-badge hover:bg-accentHover active:scale-[0.97] transition"
            >
              View My Work
            </a>
            <a
              href="/Gabriel_Chichi_CV.pdf"
              download
              className="px-6 py-3 border border-border text-textPrimary font-mono text-small uppercase tracking-wide font-medium rounded-badge hover:border-accent hover:text-accent active:scale-[0.97] transition"
            >
              <Download size={14} />
              Download CV
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-textMuted hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Torough"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-textMuted hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <PipelineDiagram />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-6 md:left-10 text-textMuted flex items-center gap-2 font-mono text-micro uppercase tracking-widest"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={13} />
        Scroll
      </motion.div>
    </section>
  );
}
