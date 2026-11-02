import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchProjects } from "@/content/research";
import { publications } from "@/content/publications";
import { ResearchDetailsPage } from "@/features/research/research-details-page";
import { createStaticParams, EMPTY_CONTENT_SLUG } from "@/lib/static-params";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const research = researchProjects.find(item => item.slug === slug);
  if (!research) return { title: "Research not found", robots: { index: false } };
  return {
    title: research.title,
    description: research.summary,
    keywords: [research.title, ...research.topics, ...research.tools],
    alternates: { canonical: `/research/${slug}/` },
    openGraph: { title: research.title, description: research.summary, url: `/research/${slug}/`, type: "website" },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return createStaticParams(researchProjects);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const research = researchProjects.find((item) => item.slug === slug);
  if (slug === EMPTY_CONTENT_SLUG || !research) notFound();

  const relatedPublications = publications.filter((publication) =>
    research.publicationIds.includes(publication.id),
  );
  return (
    <ResearchDetailsPage
      research={research}
      publications={relatedPublications}
    />
  );
}
