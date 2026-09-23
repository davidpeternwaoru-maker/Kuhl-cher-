import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero image="/images/seminar.webp" kicker="Gallery" lines={[<>The work, <em>in the room</em>.</>]} />
      <section className="section" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap"><GalleryGrid /></div>
      </section>
    </>
  );
}
