import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-10">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Gabriel Chichi. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/gabriel-chichi-7594bb96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Torough"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:gabrielchichi.t@gmail.com"
            aria-label="Email"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
