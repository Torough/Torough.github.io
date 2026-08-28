"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/lib/data/education";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-background py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Education & Certifications" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-accentLight flex items-center justify-center">
                  <GraduationCap size={16} className="text-accent" />
                </div>
                <h3 className="font-semibold text-textPrimary text-h4">Degrees</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white border border-border rounded-card p-5 shadow-card"
                  >
                    <p className="font-semibold text-textPrimary">{edu.institution}</p>
                    <p className="text-accent text-sm font-medium mt-0.5">{edu.degree}</p>
                    <p className="text-textBody text-sm mt-1">{edu.field}</p>
                    <p className="text-textMuted text-small font-mono mt-2">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-accentLight flex items-center justify-center">
                  <Award size={16} className="text-accent" />
                </div>
                <h3 className="font-semibold text-textPrimary text-h4">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white border border-border rounded-card p-4 shadow-card flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-textBody text-sm font-medium">{cert.name}</span>
                    </div>
                    {cert.status && (
                      <span className="text-small font-mono text-textMuted bg-sectionAlt px-2 py-0.5 rounded-badge border border-border">
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
