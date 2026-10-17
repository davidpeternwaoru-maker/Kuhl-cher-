import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero image="https://images.unsplash.com/photo-1754373695753-1069438691f8?w=2000&q=80" kicker="Gallery" lines={[<>The work, <em>in the room</em>.</>]} />
      <section className="section" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap"><GalleryGrid /></div>
      </section>
    </>
  );
}
