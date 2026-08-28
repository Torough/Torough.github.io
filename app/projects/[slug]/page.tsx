import { notFound } from "next/navigation";
import { fetchGithubRepos, fetchRepoBySlug, fetchRepoReadme } from "@/lib/github";
import { ArrowLeft, Star, GitFork, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const repos = await fetchGithubRepos();
  return repos.map((r) => ({ slug: r.name }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const repo = await fetchRepoBySlug(params.slug);
  if (!repo) return { title: "Project Not Found" };
  return {
    title: `${repo.name} | Gabriel Chichi`,
    description: repo.description ?? undefined,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const [repo, readme] = await Promise.all([
    fetchRepoBySlug(params.slug),
    fetchRepoReadme(params.slug),
  ]);

  if (!repo) notFound();

  const updatedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(repo.updated_at));

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Back */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors text-sm mb-8"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="border border-border rounded-card bg-white shadow-card p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-h2 font-bold text-textPrimary font-mono">{repo.name}</h1>
              {repo.description && (
                <p className="text-textBody mt-2 max-w-2xl">{repo.description}</p>
              )}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-card hover:bg-accentHover transition-colors shrink-0"
            >
              <ExternalLink size={14} />
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-6 text-textMuted text-small">
            {repo.language && (
              <span className="inline-block px-2.5 py-1 bg-accentLight text-accent font-mono font-medium rounded-badge border border-accent/10">
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Star size={13} />
              {repo.stargazers_count} stars
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork size={13} />
              {repo.forks_count} forks
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              Updated {updatedDate}
            </span>
          </div>

          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {repo.topics.map((t) => (
                <span
                  key={t}
                  className="text-accent text-small font-mono bg-accentLight px-2 py-0.5 rounded-badge"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* README */}
        {readme ? (
          <div className="border border-border rounded-card bg-white shadow-card p-8">
            <h2 className="text-h4 font-semibold text-textPrimary mb-6 pb-4 border-b border-border">
              README
            </h2>
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {readme}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="border border-border rounded-card bg-white shadow-card p-8 text-center text-textMuted">
            <p className="text-sm">No README available for this repository.</p>
          </div>
        )}
      </div>
    </main>
  );
}
