"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/lib/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-background py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading index={4} title="Education & Certifications" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <h3 className="font-mono text-small uppercase tracking-widest text-textMuted mb-4">
                Degrees
              </h3>
              <div className="border border-border divide-y divide-border">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="px-5 py-5"
                  >
                    <p className="font-sans font-semibold text-textPrimary">{edu.institution}</p>
                    <p className="text-accent font-mono text-small mt-1">{edu.degree}</p>
                    <p className="text-textBody text-sm mt-1">{edu.field}</p>
                    <p className="text-textMuted font-mono text-micro mt-2 tracking-wide">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-mono text-small uppercase tracking-widest text-textMuted mb-4">
                Certifications
              </h3>
              <div className="border border-border divide-y divide-border">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="px-5 py-4 flex items-center justify-between"
                  >
                    <span className="text-textBody text-sm font-medium">{cert.name}</span>
                    {cert.status && (
                      <span className="font-mono text-micro tracking-wide text-accent border border-accent/40 px-2 py-0.5 rounded-badge">
                        {cert.status}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
