"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Work Experience"
            subtitle="A track record of delivering data-driven solutions across healthcare, fintech, and humanitarian sectors."
          />

          <div className="max-w-3xl">
            {experience.map((role, i) => (
              <ExperienceCard key={role.id} role={role} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
