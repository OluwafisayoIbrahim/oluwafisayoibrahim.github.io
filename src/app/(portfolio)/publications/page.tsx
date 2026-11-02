import type { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {"title": "Publications and writing", "description": "Research writing and the SSRN preprint on solar power prediction using artificial neural networks by Oluwafisayo Ibrahim.", "url": "/publications/", "type": "website"},
  title: "Publications and writing",
  description: "Research writing and the SSRN preprint on solar power prediction using artificial neural networks by Oluwafisayo Ibrahim.",
  keywords: ["SSRN preprint", "Solar power", "Artificial neural networks", "Research writing"],
  alternates: { canonical: "/publications/" },
};
import { PublicationsPage } from "@/features/publications/publications-page";

export default function Page() {
  return <PublicationsPage />;
}
