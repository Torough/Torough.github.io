"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillGroups } from "@/lib/data/skills";
import { Code2, BarChart3, PieChart } from "lucide-react";

const groupIcons = [Code2, BarChart3, PieChart];

export default function Skills() {
  return (
    <section id="skills" className="bg-sectionAlt py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => {
              const Icon = groupIcons[i];
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                  className="bg-white border border-border rounded-card p-6 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accentLight flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-textPrimary text-h4">{group.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
