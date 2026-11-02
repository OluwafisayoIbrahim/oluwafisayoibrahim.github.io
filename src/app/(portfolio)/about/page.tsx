import type { Metadata } from "next";
import { AboutPage } from "@/features/about/about-page";
export const metadata: Metadata = {
  openGraph: {"title": "About", "description": "A little about Oluwafisayo (Ayomide) Ibrahim: chess, football, basketball, Liverpool FC, and the Golden State Warriors.", "url": "/about/", "type": "website"},
  alternates: { canonical: "/about/" },
  keywords: ["Oluwafisayo Ibrahim", "About", "Chess", "Football", "Basketball"],
  title: "About",
  description:
    "A little about Oluwafisayo (Ayomide) Ibrahim: chess, football, basketball, Liverpool FC, and the Golden State Warriors.",
};
export default function Page() {
  return <AboutPage />;
}
