export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "torough";
const BASE_URL = "https://api.github.com";

export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return [];
    const data: GithubRepo[] = await res.json();
    return data;
  } catch {
    return [];
  }
}

export async function fetchRepoBySlug(slug: string): Promise<GithubRepo | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/repos/${GITHUB_USERNAME}/${slug}`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchRepoReadme(slug: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/repos/${GITHUB_USERNAME}/${slug}/readme`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.raw+json" },
      }
    );
    if (!res.ok) return null;
    return res.text();
  } catch {
    return null;
  }
}
