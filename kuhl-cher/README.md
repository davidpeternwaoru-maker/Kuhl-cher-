# Kuhl-Cher website

Next.js website for Kuhl-Cher, with smooth scrolling (Lenis), page transitions and scroll animations (Motion).

## Run it on your computer
1. Install Node.js 20 or newer from nodejs.org.
2. Open a terminal in this folder and run:
   npm install
   npm run dev
3. Open http://localhost:3000

## Put it live on Vercel (same project and link as before)
Option A: Vercel CLI (quickest)
   npm install -g vercel
   vercel link        (choose your existing Kuhl-Cher project when asked)
   vercel --prod

Option B: GitHub
   Push this folder to a GitHub repo, then in Vercel: your project > Settings > Git > connect the repo.
   Every push then deploys automatically. Framework preset: Next.js (auto-detected).

## Where to change things
- All text for pillars, values, interventions, stats, blog posts and gallery: lib/content.ts
- Phone number: lib/content.ts, CONTACT.phone (the phone row appears automatically once filled in)
- Photos: public/images (keep the same file names, or update the paths in lib/content.ts)
- Team portraits: app/team/page.tsx, the Portrait component (swap the initials for an <Image>)
- Colours and fonts: the top of app/globals.css

## Still to connect
- Contact form, newsletter and diagnostic waitlist show a thank-you message but do not send anywhere yet.
  Connect them to an email service (for example Formspree or Resend) in components/ContactForm.tsx,
  components/NewsletterBox.tsx, components/Footer.tsx and components/Waitlist.tsx.
