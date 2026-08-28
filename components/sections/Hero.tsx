"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#DDE1EA 1px, transparent 1px), linear-gradient(90deg, #DDE1EA 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-accent font-mono text-small font-medium mb-4 tracking-widest uppercase">
            Analytics Engineer
          </p>

          <h1 className="text-hero font-bold text-textPrimary leading-tight mb-6">
            Gabriel{" "}
            <span className="text-accent">Chichi</span>
          </h1>

          <p className="text-textBody text-body leading-relaxed mb-8 max-w-2xl">
            Analytics Engineer at NHS England, specialising in reproducible analytical pipelines,
            PySpark, Palantir Foundry, and national healthcare data. I transform complex data into
            clear, decision-ready insights across the full data lifecycle.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-accent text-white font-medium rounded-card hover:bg-accentHover transition-colors text-sm"
            >
              View My Work
            </a>
            <a
              href="/Gabriel_Chichi_CV.pdf"
              download
              className="px-6 py-3 border border-border text-textPrimary font-medium rounded-card hover:border-accent hover:text-accent transition-colors text-sm flex items-center gap-2"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-textMuted hover:text-accent transition-colors text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <span className="text-border">|</span>
            <a
              href="https://github.com/Torough"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-textMuted hover:text-accent transition-colors text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-textMuted"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
