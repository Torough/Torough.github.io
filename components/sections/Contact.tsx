"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-sectionAlt py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            index={6}
            title="Get In Touch"
            subtitle="Open to roles, collaborations, and conversations in data & analytics engineering."
          />

          <div className="max-w-xl">
            <div className="border border-border bg-surface divide-y divide-border">
              <a
                href="mailto:gabrielchichi.t@gmail.com"
                className="flex items-center gap-4 px-6 py-5 group"
              >
                <Mail size={16} className="text-accent shrink-0" />
                <div>
                  <p className="font-mono text-micro uppercase tracking-widest text-textMuted">Email</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    gabrielchichi.t@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 group"
              >
                <Linkedin size={16} className="text-accent shrink-0" />
                <div>
                  <p className="font-mono text-micro uppercase tracking-widest text-textMuted">LinkedIn</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    gabriel-chichi-7594bb96
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Torough"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 group"
              >
                <Github size={16} className="text-accent shrink-0" />
                <div>
                  <p className="font-mono text-micro uppercase tracking-widest text-textMuted">GitHub</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    github.com/Torough
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 px-6 py-5">
                <MapPin size={16} className="text-accent shrink-0" />
                <div>
                  <p className="font-mono text-micro uppercase tracking-widest text-textMuted">Location</p>
                  <p className="text-textPrimary font-medium text-sm">Leeds, England</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:gabrielchichi.t@gmail.com"
              className="mt-5 flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-background font-mono text-small uppercase tracking-wide font-medium rounded-badge hover:bg-accentHover active:scale-[0.98] transition"
            >
              <Mail size={14} />
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
