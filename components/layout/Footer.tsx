import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-micro tracking-wide text-textMuted">
          © {new Date().getFullYear()} Gabriel Chichi. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-textMuted hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Torough"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-textMuted hover:text-accent transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:gabrielchichi.t@gmail.com"
            aria-label="Email"
            className="text-textMuted hover:text-accent transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
