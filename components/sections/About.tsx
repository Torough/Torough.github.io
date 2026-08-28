"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-sectionAlt py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-3 space-y-5 text-textBody text-body leading-relaxed">
              <p>
                I am an experienced data professional skilled in transforming complex data into
                actionable insights that drive strategic and operational success. Currently working
                as a Higher Information Analyst at NHS England, I lead the migration of data
                processing workflows from SAS to Python using{" "}
                <span className="font-mono text-accent text-small bg-accentLight px-1.5 py-0.5 rounded">
                  reproducible analytical pipelines (RAP)
                </span>
                , enhancing automation, transparency, and reproducibility across national
                healthcare publications.
              </p>
              <p>
                My background spans the full data lifecycle — from ETL pipeline engineering and
                database management to statistical modelling, machine learning, and executive
                dashboard development. I have delivered impactful work across healthcare, fintech,
                and humanitarian sectors, with tools including{" "}
                <span className="font-mono text-accent text-small bg-accentLight px-1.5 py-0.5 rounded">
                  PySpark
                </span>
                ,{" "}
                <span className="font-mono text-accent text-small bg-accentLight px-1.5 py-0.5 rounded">
                  Palantir Foundry
                </span>
                ,{" "}
                <span className="font-mono text-accent text-small bg-accentLight px-1.5 py-0.5 rounded">
                  Python
                </span>
                , and{" "}
                <span className="font-mono text-accent text-small bg-accentLight px-1.5 py-0.5 rounded">
                  AWS
                </span>
                .
              </p>
              <p>
                I bring expertise across data analysis, engineering, and machine learning to deliver
                impactful, data-driven solutions — and I am passionate about using data responsibly
                to improve public services and outcomes at scale.
              </p>

              <div className="flex flex-wrap gap-5 pt-2 text-sm text-textMuted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-accent" />
                  Leeds, England
                </span>
                <a
                  href="mailto:gabrielchichi.t@gmail.com"
                  className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <Mail size={15} className="text-accent" />
                  gabrielchichi.t@gmail.com
                </a>
              </div>
            </div>

            {/* Profile photo placeholder */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-card border border-border bg-white flex items-center justify-center overflow-hidden shadow-card">
                <img
                  src="/assets/img/profile.jpg"
                  alt="Gabriel Chichi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden flex-col items-center justify-center text-textMuted gap-2">
                  <div className="w-16 h-16 rounded-full bg-accentLight flex items-center justify-center">
                    <span className="text-accent font-bold text-2xl">GC</span>
                  </div>
                  <span className="text-small">Photo coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
