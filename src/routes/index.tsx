import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Leaf,
  Scissors,
  Sprout,
  Trees,
  Phone,
  Mail,
  MapPin,
  Star,
  Check,
  ArrowRight,
  Clock,
  Shield,
  ThumbsUp,
  Menu,
  X,
  MessageCircle,
  Quote,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Award,
  Facebook,
} from "lucide-react";
import heroLawn from "@/assets/hero-lawn.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceHedge from "@/assets/service-hedge.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import servicePatio from "@/assets/service-patio.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import beforeLawn from "@/assets/before-lawn.png";
import afterLawn from "@/assets/after-lawn.png";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Longairs Lawn Care | Expert Gardener in Newmilns & Galston",
      },
      {
        name: "description",
        content:
          "Expert lawn care, grass cutting, weeding and garden maintenance in Newmilns, Galston and across Ayrshire. Family-run, fully insured. Free quotes within 24 hours — call [PHONE NUMBER].",
      },
      {
        name: "keywords",
        content:
          "lawn care Ayrshire, gardeners Newmilns, hedge trimming Kilmarnock, garden maintenance East Ayrshire, grass cutting North Ayrshire, gardener Ayr, scarifying, pressure washing Ayrshire",
      },
      { name: "theme-color", content: "#1d4d2b" },
      { property: "og:title", content: "Longair's Lawn Care & Garden Services" },
      {
        property: "og:description",
        content:
          "Ayrshire's trusted local gardeners. Lawn care, hedge trimming and full garden transformations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroLawn },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Longair's Lawn Care & Garden Services" },
      { name: "twitter:image", content: heroLawn },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroLawn, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "/#business",
          name: "Longair's Lawn Care & Garden Services",
          image: heroLawn,
          telephone: "[PHONE NUMBER]",
          email: "Email coming soon",
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Newmilns",
            addressRegion: "East Ayrshire",
            addressCountry: "GB",
          },
          areaServed: [
            "Newmilns",
            "Kilmarnock",
            "Galston",
            "Darvel",
            "Stewarton",
            "Irvine",
            "Kilwinning",
            "Ayr",
            "Prestwick",
            "Troon",
            "Newton Mearns",
            "Giffnock",
            "North Ayrshire",
            "East Ayrshire",
            "South Ayrshire",
            "East Renfrewshire",
          ],
          sameAs: ["#"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "17",
          },
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Sprout,
    title: "Lawn Care & Grass Cutting",
    desc: "Regular mowing, edging, feeds and treatments for a striped, healthy lawn that's the envy of the street.",
    image: serviceLawn,
    tags: ["Mowing", "Edging", "Feeds"],
  },
  {
    icon: Scissors,
    title: "Hedge Trimming & Pruning",
    desc: "Crisp lines, balanced shapes and tidy finishes — keep your hedges winter-ready and sharp year round.",
    image: serviceHedge,
    tags: ["Trimming", "Shaping", "Pruning"],
  },
  {
    icon: Leaf,
    title: "Garden Maintenance",
    desc: "Weeding, planting, mulching, leaf clearing and seasonal tidy-ups to keep every corner flourishing.",
    image: serviceGarden,
    tags: ["Weeding", "Planting", "Tidy-ups"],
  },
  {
    icon: Trees,
    title: "Patio & Transformations",
    desc: "Pressure washing, re-sanding and full garden makeovers — we'll turn the jungle back into a paradise.",
    image: servicePatio,
    tags: ["Pressure wash", "Re-sanding", "Makeovers"],
  },
];

const extras = [
  "Scarifying & Aerating",
  "Weed & Moss Control",
  "Mare's Tail Eradication",
  "Lawn Feeds & Treatments",
  "Leaf Clearing",
  "Pressure Washing",
  "Re-Sanding",
  "Turfing",
];

const areas = [
  { name: "Newmilns", note: "Our home base" },
  { name: "Kilmarnock", note: "East Ayrshire" },
  { name: "Galston", note: "East Ayrshire" },
  { name: "Darvel", note: "East Ayrshire" },
  { name: "Stewarton", note: "East Ayrshire" },
  { name: "Irvine", note: "North Ayrshire" },
  { name: "Kilwinning", note: "North Ayrshire" },
  { name: "Ayr", note: "South Ayrshire" },
  { name: "Prestwick", note: "South Ayrshire" },
  { name: "Troon", note: "South Ayrshire" },
  { name: "Newton Mearns", note: "East Renfrewshire" },
  { name: "Giffnock", note: "East Renfrewshire" },
];

const trustPoints = [
  { icon: ThumbsUp, label: "90% Recommended", sub: "Verified reviews" },
  { icon: Shield, label: "Fully Insured", sub: "Peace of mind" },
  { icon: Clock, label: "Reliable", sub: "On time, every time" },
];

const stats = [
  { value: "10+", label: "Years caring for gardens" },
  { value: "500+", label: "Happy Ayrshire homes" },
  { value: "4.9★", label: "Average client rating" },
  { value: "24h", label: "Quote turnaround" },
];

const process = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Get in touch",
    desc: "Drop us a message, call or fill in the quote form — whichever's easiest for you.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Free site visit",
    desc: "We'll pop round at a time that suits, walk the garden with you and write up an honest quote.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Beautiful results",
    desc: "Our friendly team gets to work — leaving your garden looking better than ever before.",
  },
];

const testimonials = [
  {
    name: "Yvie Holland",
    date: "26 Jul 2024",
    text: "Can't say enough good things about Longairs! Communication is fantastic, pricing is reasonable and transparent, the quality of work is top class…and they are genuinely lovely helpful people to deal with! So chuffed to have found such a reliable, hard working company to take care of my garden.",
  },
  {
    name: "James O'Neil",
    date: "15 Aug 2022",
    text: "Five other gardeners had let me down previously and the garden was like a jungle (literally). Sandra was great at keeping me updated. They did a fantastic job and I highly recommend anyone in the East Ayrshire region to make Longair's their first point of contact.",
  },
  {
    name: "Jill Newbigging",
    date: "2 May 2024",
    text: "Fantastic customer service. Highly recommend Arthur and his team. Competitive pricing and great attention to detail.",
  },
  {
    name: "Lynn Brown",
    date: "20 Jun 2024",
    text: "Great job done and great communication from Sandra. Will definitely use them again.",
  },
];

const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We're based in Newmilns and cover the whole of East, North & South Ayrshire and East Renfrewshire — including Kilmarnock, Galston, Darvel, Stewarton, Irvine, Ayr, Troon, Newton Mearns and Giffnock. Just ask if you're nearby.",
  },
  {
    q: "How much does it cost?",
    a: "Every garden is different, so we always offer free, no-obligation quotes after a quick visit. Our pricing is fair, transparent and there are no surprises.",
  },
  {
    q: "Are you insured?",
    a: "Yes — we're fully insured and DBS-conscious, so you can have complete peace of mind whenever we're on your property.",
  },
  {
    q: "Do you offer one-off jobs or just regular maintenance?",
    a: "Both. From a single tidy-up or full transformation through to weekly / fortnightly / monthly maintenance plans — we'll work to a schedule that suits you.",
  },
  {
    q: "How quickly can you start?",
    a: "We typically reply to enquiries within 24 hours and can often book a free site visit within the same week, depending on the season.",
  },
];

/* ---------- Google reviews ---------- */
// Swap these two URLs once you have your Google Business Profile link.
// Find them here: https://www.google.com/business → "Get more reviews"
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Longair%27s+Lawn+Care+%26+Garden+Services+Newmilns";
const GOOGLE_LEAVE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

const gallery = [
  { src: gallery1, alt: "Freshly mowed striped lawn in an Ayrshire back garden", caption: "Lawn care · Newmilns", span: "" },
  { src: gallery2, alt: "Tall conifer hedge trimmed to crisp lines", caption: "Hedge trimming · Kilmarnock", span: "row-span-2" },
  { src: gallery3, alt: "Pressure washed sandstone patio next to a tidy lawn", caption: "Patio restoration · Galston", span: "" },
  { src: gallery4, alt: "Restored cottage garden with mulched borders and flower beds", caption: "Garden transformation · Darvel", span: "row-span-2" },
  { src: gallery5, alt: "Gardener mowing a large lush green lawn", caption: "Weekly maintenance · Stewarton", span: "" },
  { src: gallery6, alt: "Sculpted topiary in a Scottish stone house front garden", caption: "Topiary & shaping · Newton Mearns", span: "" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <LogoStrip />
      <About />
      <Services />
      <Gallery />
      <Stats />
      <WhyUs />
      <Process />
      <Testimonials />
      <Areas />
      <Faq />
      <QuoteSection />
      <Footer />
      <FloatingCTA />
      <DemoBadge />
      <FirstTimePopup />
      <StickyMobileCTA />
    </div>
  );
}

function FirstTimePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("vexbase-demo-seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem("vexbase-demo-seen", "true");
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-smooth duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={dismiss} />
      <div
        className={`relative w-full max-w-md bg-background border border-border p-6 sm:p-8 rounded-[2rem] shadow-elegant transition-all duration-500 delay-100 ${
          open ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        }`}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary text-foreground grid place-items-center hover:bg-secondary/80 transition-smooth"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center text-center mb-6">
          <span className="w-16 h-16 rounded-2xl gradient-primary grid place-items-center mb-4 shadow-glow">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </span>
          <h3 className="font-semibold text-2xl text-balance">Welcome to the Prototype</h3>
        </div>
        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            Please note that the photos and text used here are just placeholders for this mockup.
          </p>
          <p>
            You might spot a few minor bugs or layout issues right now—these will all be completely polished and fixed in the final version!
          </p>
          <p className="text-foreground font-medium">
            Remember: Almost everything you see is changeable. We can easily tweak the colors, layout, and style until it's absolutely perfect for you.
          </p>
        </div>
        <button
          onClick={dismiss}
          className="mt-8 w-full rounded-full gradient-primary text-primary-foreground py-4 text-base font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
        >
          Got it, let's explore
        </button>
      </div>
    </div>
  );
}

function DemoBadge() {
  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-50 animate-fade-up pointer-events-none origin-bottom-left scale-85 sm:scale-100">
      <div className="bg-background/85 backdrop-blur-md border border-border p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-elegant max-w-[180px] sm:max-w-[220px] pointer-events-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 font-semibold text-primary mb-1 text-[13px] sm:text-base">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Mockup Demo
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
          This is a demonstration website built by <strong className="text-foreground">Muhammed Amir</strong> at <strong className="text-foreground">Vexbase</strong>.
        </p>
      </div>
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Our Work" },
    { href: "#why", label: "Why us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#areas", label: "Areas" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled
            ? "backdrop-blur-xl bg-background/85 border-b border-border/60 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-semibold group">
            <span className="w-9 h-9 rounded-xl gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-smooth">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </span>
            <span
              className={`text-base sm:text-lg tracking-tight transition-smooth flex items-center gap-2 ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Longair's
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-bold shadow-soft">
                Demo
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-smooth ${
                  scrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-secondary"
                    : "text-cream/85 hover:text-cream hover:bg-cream/10"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
              className={`hidden sm:inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full transition-smooth ${
                scrolled ? "text-foreground hover:text-primary" : "text-cream hover:bg-cream/10"
              }`}
              aria-label="Call Longair's Lawn Care"
            >
              <Phone className="w-4 h-4" /> [PHONE NUMBER]
            </a>
            <a
              href="#quote"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
            >
              Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden grid place-items-center w-11 h-11 rounded-full transition-smooth ${
                scrolled
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "bg-cream/15 text-cream hover:bg-cream/25 backdrop-blur-md"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-smooth ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-background shadow-elegant flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-2.5 font-semibold">
              <span className="w-9 h-9 rounded-xl gradient-primary grid place-items-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </span>
              Longair's
            </div>
            <button
              onClick={() => setOpen(false)}
              className="grid place-items-center w-11 h-11 rounded-full bg-secondary hover:bg-secondary/70 transition-smooth"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-medium hover:bg-secondary transition-smooth ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                } duration-500`}
              >
                {l.label}
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            ))}
          </nav>
          <div className="p-5 border-t border-border space-y-3">
            <a
              href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-secondary text-foreground px-6 py-4 font-medium hover:bg-secondary/70 transition-smooth"
            >
              <Phone className="w-4 h-4" /> [PHONE NUMBER]
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-full gradient-primary text-primary-foreground px-6 py-4 font-medium shadow-elegant"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
      <img
        src={heroLawn}
        alt="Pristine striped lawn maintained by Longair's Lawn Care in Ayrshire"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold shadow-soft">
              <Sparkles className="w-3.5 h-3.5" /> Concept Mockup
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 px-3 py-1.5 text-xs font-medium text-cream">
              <Star className="w-3.5 h-3.5 fill-cream" /> 90% Recommended · Ayrshire
            </span>
          </div>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold text-cream text-balance">
            Beautiful gardens,{" "}
            <span className="italic text-primary-glow">expertly cared for.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-cream/85 max-w-xl text-balance">
            From a single grass cut to a full garden transformation, Longair's
            Lawn Care & Garden Services is your trusted local team across
            Newmilns and all of Ayrshire.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-4 text-base font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-7 py-4 text-base font-medium hover:bg-cream/20 transition-smooth"
            >
              <Phone className="w-4 h-4" /> [PHONE NUMBER]
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {trustPoints.map((t) => (
              <div key={t.label} className="text-cream">
                <t.icon className="w-5 h-5 text-primary-glow mb-2" />
                <div className="text-sm font-semibold leading-tight">{t.label}</div>
                <div className="text-xs text-cream/70 mt-0.5 hidden sm:block">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 float-slow hidden sm:flex flex-col items-center gap-1.5">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}

function LogoStrip() {
  const items = [
    "Newmilns",
    "Kilmarnock",
    "Galston",
    "Darvel",
    "Stewarton",
    "Irvine",
    "Ayr",
    "Troon",
    "Prestwick",
    "Newton Mearns",
    "Giffnock",
  ];
  const doubled = [...items, ...items];
  return (
    <section
      className="py-6 border-y border-border bg-secondary/40 overflow-hidden"
      aria-label="Areas served"
    >
      <div className="flex whitespace-nowrap marquee">
        {doubled.map((i, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium">{i}</span>
            <span className="text-primary/40">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Reveal>
      <section className="py-20 sm:py-28 gradient-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Eyebrow>About Longair's</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
            Ayrshire's local gardening team — proudly family-run.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
            Based in Newmilns, we look after gardens of every size right across
            North, East & South Ayrshire and East Renfrewshire. From routine
            grass cutting and hedge trimming through to specialised jobs like
            scarifying, mare's tail eradication and full garden makeovers — we
            do it all, with the care your garden deserves.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Everything your garden needs, in one trusted team.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Pick a one-off job or a regular maintenance plan — we'll tailor it to your garden.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-[1200ms]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                      <s.icon className="w-5 h-5" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Also offering specialised work</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {extras.map((e) => (
                  <span key={e} className="text-xs font-medium px-3 py-1.5 rounded-full bg-background border border-border text-foreground/80">
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth whitespace-nowrap"
            >
              Ask About Your Job <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <Reveal>
      <section className="py-16 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,oklch(0.62_0.16_142),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-semibold text-primary-glow tracking-tight">{s.value}</div>
              <div className="mt-1.5 text-xs sm:text-sm text-cream/70 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <Eyebrow>Why Longair's</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
                Local craft. Honest pricing. Stunning results.
              </h2>
              <p className="mt-5 text-muted-foreground text-balance">
                We've built our reputation across Ayrshire one tidy garden at a
                time. Whether you need a one-off transformation or year-round
                maintenance, we treat every job with the same level of care.
              </p>
              <a
                href="#quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
              >
                Start with a free quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
          <ul className="space-y-3">
            {[
              "Free, no-obligation quotes — straight to your inbox",
              "Family-run business, established and locally trusted",
              "Fully insured with professional, well-kept equipment",
              "Friendly, reliable team that turns up when we say we will",
              "Before & after photos with every major project",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 70}>
                <li className="flex items-start gap-3 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-soft transition-smooth">
                  <span className="shrink-0 w-6 h-6 rounded-full gradient-primary grid place-items-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 sm:py-28 gradient-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Easy from first call to final cut.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="relative h-full rounded-3xl bg-card border border-border p-7 hover:border-primary/40 hover:-translate-y-1 hover:shadow-elegant transition-smooth">
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center font-semibold text-sm shadow-glow">
                  {p.step}
                </div>
                <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <Eyebrow>Kind words</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance max-w-xl">
                Loved by gardens (and their owners) across Ayrshire.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9 / 5</span>
              <span>· 17 reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative h-full rounded-3xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col">
                <Quote className="w-7 h-7 text-primary-glow mb-3" />
                <blockquote className="text-sm text-foreground/85 leading-relaxed flex-1">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.date}</div>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary-glow text-primary-glow" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4 flex-1">
              <span className="shrink-0 w-14 h-14 rounded-2xl bg-secondary grid place-items-center">
                <GoogleG className="w-7 h-7" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary-glow text-primary-glow" />
                    ))}
                  </div>
                  <span className="font-semibold text-sm">4.9 on Google</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Real reviews from real customers across Ayrshire.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground px-5 py-3 text-sm font-medium hover:bg-secondary/70 transition-smooth"
              >
                Read all on Google <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={GOOGLE_LEAVE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
              >
                Leave a review <Star className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28 gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Service Areas</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Proudly serving Ayrshire & East Renfrewshire
            </h2>
            <p className="mt-5 text-muted-foreground">
              Based in Newmilns and covering towns and villages right across the region.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {areas.map((a, i) => (
            <Reveal key={a.name} delay={i * 35}>
              <div className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-smooth h-full">
                <MapPin className="w-4 h-4 text-primary mb-3 group-hover:scale-125 transition-smooth" />
                <div className="font-semibold">{a.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don't see your area?{" "}
          <a href="#quote" className="text-primary font-medium underline-offset-4 hover:underline">
            Get in touch
          </a>{" "}
          — chances are we cover it.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Questions, answered.
            </h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-smooth">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 font-medium"
                >
                  <span className="text-base sm:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-primary transition-smooth ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="quote" className="py-20 sm:py-28 bg-forest-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,oklch(0.62_0.16_142),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow">Free Quote</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Let's get your garden looking its best.
            </h2>
            <p className="mt-4 text-cream/75">
              Fill in the form and we'll reply with a friendly, no-obligation quote — usually within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_580px] gap-8 items-start">
          {/* Left — contact info + trust */}
          <Reveal>
            <div className="space-y-4">
              <div className="rounded-3xl bg-cream/5 border border-cream/10 p-7 space-y-4">
                <div className="text-sm font-semibold text-cream/50 uppercase tracking-widest">Prefer to call?</div>
                <ContactRow icon={Phone} label="Call us" value="[PHONE NUMBER]" href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }} />
                <ContactRow icon={Mail} label="Email us" value="Email coming soon" href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }} />
                <ContactRow icon={MapPin} label="Based in" value="Newmilns, Ayrshire" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Fully Insured", sub: "Peace of mind" },
                  { icon: Clock, label: "24h Response", sub: "Usually same day" },
                  { icon: ThumbsUp, label: "90% Recommended", sub: "Verified reviews" },
                  { icon: Award, label: "Family Run", sub: "Est. in Ayrshire" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="rounded-2xl bg-cream/5 border border-cream/10 p-4 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl gradient-primary grid place-items-center shrink-0">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-cream leading-tight">{label}</div>
                      <div className="text-[11px] text-cream/50 mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-background text-foreground shadow-elegant p-7 sm:p-10 border border-border"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <span className="inline-grid place-items-center w-14 h-14 rounded-full gradient-primary mb-5 shadow-glow">
                    <Check className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <h3 className="text-2xl font-semibold">Thank you!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We've received your enquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" required placeholder="Jane Smith" autoComplete="name" />
                    <Field label="Phone" name="phone" type="tel" required placeholder="07…" autoComplete="tel" inputMode="tel" />
                    <Field label="Email" name="email" type="email" required placeholder="you@example.com" className="sm:col-span-2" autoComplete="email" />
                    <Field label="Postcode / Town" name="postcode" required placeholder="KA16…" className="sm:col-span-2" autoComplete="postal-code" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="service">Service needed</label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option>Lawn care / grass cutting</option>
                      <option>Hedge trimming</option>
                      <option>Garden maintenance</option>
                      <option>Patio / pressure washing</option>
                      <option>Full garden transformation</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Tell us about the job</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="A few details about your garden and what you'd like done…"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-4 text-base font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
                  >
                    Request My Free Quote <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground text-center">
                    No spam, ever. We typically reply within 24 hours.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? 0 : (a + 1) % gallery.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? 0 : (a - 1 + gallery.length) % gallery.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-forest-deep text-cream pt-20">
      {/* Before & After Hero Section */}
      <div className="pb-20 sm:pb-28 px-4 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow>Transformation</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance text-cream">
              The difference is night and day.
            </h2>
            <p className="mt-4 text-cream/70">
              Slide to see a real garden transformation we completed. We take overgrown, untidy spaces and return them to pristine condition.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <BeforeAfterSlider 
            beforeImage={beforeLawn} 
            afterImage={afterLawn} 
            beforeLabel="Before" 
            afterLabel="After"
          />
        </Reveal>
      </div>

      <div className="py-20 sm:py-28 bg-secondary/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <Eyebrow className="text-primary-glow">Our Work</Eyebrow>
                <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance text-cream">
                  Recent Projects
                </h2>
                <p className="mt-4 text-cream/70 max-w-md">
                  A selection of gardens we've recently cared for across Ayrshire. Click any image to view full size.
                </p>
              </div>
              <a
                href="#quote"
                className="btn-press hidden sm:inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft whitespace-nowrap"
              >
                Get your free quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 auto-rows-[160px] sm:auto-rows-[240px]">
            {gallery.map((img, i) => {
              // Asymmetric bento sizing
              const isLarge = i === 0 || i === 3;
              const spanClass = isLarge ? "col-span-2 row-span-2" : "col-span-2 md:col-span-1 row-span-1 md:row-span-2";
              
              return (
                <Reveal key={i} delay={i * 50}>
                  <button
                    onClick={() => setActive(i)}
                    aria-label={`View full image: ${img.caption}`}
                    className={`btn-press group relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-forest-deep ${spanClass}`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] cubic-bezier(0.23,1,0.32,1) group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-glow block mb-1.5">
                        Tap to expand
                      </span>
                      <p className="text-sm sm:text-lg font-semibold text-white leading-tight">
                        {img.caption}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[80] bg-forest-deep/98 backdrop-blur-xl animate-fade-up flex items-center justify-center"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery viewer"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
            className="btn-press absolute top-4 right-4 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth"
          >
            <X className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a - 1 + gallery.length) % gallery.length)); }}
            aria-label="Previous"
            className="btn-press absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a + 1) % gallery.length)); }}
            aria-label="Next"
            className="btn-press absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="w-full max-w-6xl p-4 sm:p-12 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="w-full max-h-[75svh] object-contain rounded-2xl shadow-glow"
            />
            <div className="mt-6 text-center animate-fade-up" style={{ animationDelay: '150ms' }}>
              <p className="text-lg sm:text-xl font-semibold text-white">
                {gallery[active].caption}
              </p>
              <p className="text-sm text-white/50 mt-2">
                Image {active + 1} of {gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C41.4 35.3 44 30.1 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-semibold mb-3">
              <span className="w-9 h-9 rounded-xl gradient-primary grid place-items-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </span>
              Longair's Lawn Care & Garden Services
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Ayrshire's trusted local gardeners. Based in Newmilns and covering
              the whole region — from quick tidy-ups to full garden transformations.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 grid place-items-center rounded-full bg-secondary hover:gradient-primary hover:text-primary-foreground transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
                aria-label="Email"
                className="w-10 h-10 grid place-items-center rounded-full bg-secondary hover:gradient-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-smooth">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-smooth">Our Work</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a></li>
              <li><a href="#areas" className="hover:text-primary transition-smooth">Service Areas</a></li>
              <li><a href="#faq" className="hover:text-primary transition-smooth">FAQ</a></li>
              <li><a href="#quote" className="hover:text-primary transition-smooth">Free Quote</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }} className="hover:text-primary transition-smooth">[PHONE NUMBER]</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }} className="hover:text-primary transition-smooth break-all">Email coming soon</a></li>
              <li>Newmilns, Ayrshire</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs text-muted-foreground">
          <div className="flex flex-col gap-1.5">
            <span>© {new Date().getFullYear()} Longair's Lawn Care & Garden Services. All rights reserved.</span>
            <span className="text-primary font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Design & Development Mockup by Muhammed Amir @ Vexbase
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-primary" /> 90% recommended in Ayrshire
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-elegant grid place-items-center hover:scale-110 hover:shadow-glow transition-smooth float-slow"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function StickyMobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-safe bg-background/95 backdrop-blur-xl border-t border-border shadow-elegant">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="#" onClick={(e) => { e.preventDefault(); alert("This is a mockup. Links will be active in the final version."); }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground px-4 py-3 text-sm font-medium cursor-pointer hover:bg-secondary/80 transition-smooth"
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <a
          href="#quote"
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-4 py-3 text-sm font-medium shadow-soft cursor-pointer hover:shadow-glow transition-smooth"
        >
          Free Quote <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------- Primitives ---------- */

function Eyebrow({ children, className = "text-primary" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>
      {children}
    </span>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="w-11 h-11 rounded-2xl bg-cream/10 border border-cream/15 grid place-items-center text-primary-glow group-hover:bg-cream/20 transition-smooth">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <div className="text-xs text-cream/60">{label}</div>
        <div className="font-semibold break-all text-cream">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 group">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
    </div>
  );
}