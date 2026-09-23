import type { Metadata } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WaitlistProvider from "@/components/Waitlist";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Transition from "@/components/Transition";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  title: { default: "Kuhl-Cher | Boutique Culture Consulting", template: "%s | Kuhl-Cher" },
  description:
    "Kuhl-Cher helps organizations build cultures strong enough to withstand disruption and sustain performance over the long term.",
  openGraph: {
    title: "Kuhl-Cher | Boutique Culture Consulting",
    description: "Every business faces disruption. Culture decides who survives it.",
    images: ["/images/hero-lagos.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <WaitlistProvider>
            <Loader />
            <Transition />
            <Header />
            <main>{children}</main>
            <Footer />
          </WaitlistProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
