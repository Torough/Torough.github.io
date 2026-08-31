"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-sectionAlt py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading index={1} title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-7 space-y-5 text-textBody text-body leading-relaxed">
              <p>
                I am an experienced data professional skilled in transforming complex data into
                actionable insights that drive strategic and operational success. Currently working
                as an Analytical Engineer at NHS England, I architect and maintain data pipelines
                within the NHS Federated Data Platform, using{" "}
                <span className="font-mono text-accent text-small bg-accentSoft px-1.5 py-0.5 rounded-badge">
                  reproducible analytical pipelines (RAP)
                </span>
                {" "}to keep national healthcare reporting automated, transparent, and reproducible.
              </p>
              <p>
                My background spans the full data lifecycle: ETL pipeline engineering and database
                management, statistical modelling, machine learning, and executive dashboard
                development. I have delivered impactful work across healthcare, fintech, and
                humanitarian sectors, with tools including{" "}
                <span className="font-mono text-accent text-small bg-accentSoft px-1.5 py-0.5 rounded-badge">
                  PySpark
                </span>
                ,{" "}
                <span className="font-mono text-accent text-small bg-accentSoft px-1.5 py-0.5 rounded-badge">
                  Palantir Foundry
                </span>
                ,{" "}
                <span className="font-mono text-accent text-small bg-accentSoft px-1.5 py-0.5 rounded-badge">
                  Python
                </span>
                , and{" "}
                <span className="font-mono text-accent text-small bg-accentSoft px-1.5 py-0.5 rounded-badge">
                  AWS
                </span>
                .
              </p>
              <p>
                I bring expertise across data analysis, engineering, and machine learning to deliver
                impactful, data-driven solutions, and I am passionate about using data responsibly
                to improve public services and outcomes at scale.
              </p>

              <div className="flex flex-wrap gap-5 pt-2 font-mono text-small text-textMuted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent" />
                  Leeds, England
                </span>
                <a
                  href="mailto:gabrielchichi.t@gmail.com"
                  className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <Mail size={14} className="text-accent" />
                  gabrielchichi.t@gmail.com
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs border border-border bg-surface">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/profile.jpg"
                    alt="Gabriel Chichi"
                    fill
                    sizes="(max-width: 1024px) 320px, 320px"
                    className="object-cover grayscale-[15%]"
                    priority
                  />
                </div>
                <div className="border-t border-border px-4 py-3 font-mono text-micro uppercase tracking-widest text-textMuted space-y-1">
                  <p>
                    <span className="text-accent">operator:</span> gabriel_chichi
                  </p>
                  <p>
                    <span className="text-accent">role:</span> analytics_engineer
                  </p>
                  <p>
                    <span className="text-accent">base:</span> leeds_uk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
