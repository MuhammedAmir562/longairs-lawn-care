## Plan: Photo Gallery + Google Reviews Link-Out

Scope is intentionally small — no CMS, no backend, no auth. Content stays in code for now (easy to swap to a CMS later).

### 1. New "Our Work" gallery section

- Add a new section to `src/routes/index.tsx` between Services and Testimonials.
- Layout: responsive masonry-style grid (2 cols mobile, 3 cols tablet, 4 cols desktop) with subtle hover zoom + caption overlay (job type + location).
- Click a photo → lightbox modal (using existing `Dialog` shadcn component) with prev/next arrows and swipe support on mobile.
- 8 starter images generated via imagegen showing real-looking before/after lawn, hedge, garden, and patio work in Scottish residential settings.
- Lazy-loaded (`loading="lazy"`) + `decoding="async"` to protect LCP.
- Reveal-on-scroll animation reusing the existing `use-reveal` hook.
- Add a "Gallery" link to desktop nav + mobile menu, plus to the sitemap.

### 2. Reviews section — Google link-out

- Keep the existing handwritten testimonials (they're great social proof).
- Add a prominent CTA card at the bottom of the Testimonials section:
  - Google "G" logo + average star rating + review count
  - Two buttons: **"Read all reviews on Google"** (opens GBP listing) and **"Leave us a review"** (opens Google review prompt link)
- Both links open in a new tab with `rel="noopener"`.
- Update the JSON-LD `aggregateRating` to match the displayed numbers so SEO stays consistent.

### 3. Future-proofing (no work now, just noted)

- Gallery images and review URLs live in two small arrays at the top of `index.tsx` so swapping to Lovable Cloud later is a 10-minute job.

### Files touched

- `src/routes/index.tsx` — add gallery section, gallery nav link, update reviews CTA, update JSON-LD
- `src/styles.css` — small additions: lightbox transitions, gallery hover utility
- `src/assets/gallery-*.jpg` × 8 — new generated images
- `src/routes/sitemap[.]xml.ts` — add `#gallery` anchor (or skip if anchor-only)

### What I need from you

Two things to confirm before I build:

1. **Your Google Business Profile URL** (the link to your reviews page) — looks like `https://g.page/r/...` or `https://www.google.com/maps/place/...`. If you don't have it handy I'll use a placeholder you can swap in later.
2. **Real photos vs AI-generated**: I'll generate 8 realistic placeholder images now. You can drop real job photos in via chat anytime and I'll swap them. Sound good?
