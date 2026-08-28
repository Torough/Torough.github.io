"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Get In Touch"
            subtitle="Open to roles, collaborations, and conversations in data & analytics engineering."
          />

          <div className="max-w-xl">
            <div className="bg-white border border-border rounded-card p-8 shadow-card space-y-5">
              <a
                href="mailto:gabrielchichi.t@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accentLight flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Mail size={18} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-textMuted">Email</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    gabrielchichi.t@gmail.com
                  </p>
                </div>
              </a>

              <div className="border-t border-border" />

              <a
                href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accentLight flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Linkedin size={18} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-textMuted">LinkedIn</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    gabriel-chichi-7594bb96
                  </p>
                </div>
              </a>

              <div className="border-t border-border" />

              <a
                href="https://github.com/Torough"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accentLight flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Github size={18} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-textMuted">GitHub</p>
                  <p className="text-textPrimary font-medium text-sm group-hover:text-accent transition-colors">
                    github.com/Torough
                  </p>
                </div>
              </a>

              <div className="border-t border-border" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accentLight flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-small text-textMuted">Location</p>
                  <p className="text-textPrimary font-medium text-sm">Leeds, England</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:gabrielchichi.t@gmail.com"
              className="mt-5 flex items-center justify-center gap-2 w-full py-3 bg-accent text-white font-medium rounded-card hover:bg-accentHover transition-colors text-sm"
            >
              <Mail size={15} />
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
