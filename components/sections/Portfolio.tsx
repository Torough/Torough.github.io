import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { fetchGithubRepos } from "@/lib/github";
import { Github } from "lucide-react";

export default async function Portfolio() {
  const repos = await fetchGithubRepos();

  return (
    <section id="portfolio" className="bg-sectionAlt py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionHeading
          index={5}
          title="Projects"
          subtitle="Open-source work and personal projects — fetched live from GitHub."
        />

        {repos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-textMuted gap-3 border border-border bg-surface">
            <Github size={32} className="opacity-40" />
            <p className="text-sm">Unable to load projects right now. Check back soon.</p>
            <a
              href="https://github.com/Torough"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm hover:underline"
            >
              View GitHub profile directly
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
