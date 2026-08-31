"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-sans font-bold text-textPrimary text-base tracking-tight hover:text-accent transition-colors flex items-center gap-1.5"
        >
          <span className="font-mono text-accent">$</span>
          Gabriel Chichi
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1.5 font-mono text-micro uppercase tracking-widest transition-colors ${
                  isActive ? "text-accent" : "text-textMuted hover:text-textPrimary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-[1px] h-px bg-accent transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="/Gabriel_Chichi_CV.pdf"
            download
            className="px-4 py-1.5 bg-accent text-background rounded-badge font-mono text-micro uppercase tracking-widest font-medium hover:bg-accentHover active:scale-[0.97] transition"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-textBody"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden bg-background border-t border-border px-6 pb-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-2.5 font-mono text-small uppercase tracking-widest text-textMuted hover:text-accent active:scale-[0.97] transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Gabriel_Chichi_CV.pdf"
              download
              className="block mt-2 py-2.5 font-mono text-small uppercase tracking-widest text-accent active:scale-[0.97] transition-transform"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
