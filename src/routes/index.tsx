import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import heroLawn from "@/assets/hero-lawn.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceHedge from "@/assets/service-hedge.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import servicePatio from "@/assets/service-patio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Longair's Lawn Care & Garden Services | Ayrshire's Trusted Gardeners",
      },
      {
        name: "description",
        content:
          "Professional lawn care, hedge trimming, and garden services across Newmilns, North, East & South Ayrshire and East Renfrewshire. 90% recommended. Get your free quote today.",
      },
      {
        name: "keywords",
        content:
          "lawn care Ayrshire, gardeners Newmilns, hedge trimming Kilmarnock, garden maintenance East Ayrshire, grass cutting North Ayrshire",
      },
      { property: "og:title", content: "Longair's Lawn Care & Garden Services" },
      {
        property: "og:description",
        content:
          "Ayrshire's trusted local gardeners. Lawn care, hedge trimming and garden transformations. 90% recommended.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroLawn },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Longair's Lawn Care & Garden Services",
          image: heroLawn,
          telephone: "+447541216111",
          email: "longairslawncare@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Newmilns",
            addressRegion: "East Ayrshire",
            addressCountry: "GB",
          },
          areaServed: [
            "Newmilns",
            "North Ayrshire",
            "East Ayrshire",
            "South Ayrshire",
            "East Renfrewshire",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
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
    desc: "Regular mowing, edging and striping for a pristine, healthy lawn all season.",
    image: serviceLawn,
  },
  {
    icon: Scissors,
    title: "Hedge Trimming & Shaping",
    desc: "Crisp lines, balanced shapes and tidy finishes — get your hedges winter-ready.",
    image: serviceHedge,
  },
  {
    icon: Leaf,
    title: "Garden Maintenance",
    desc: "Weeding, planting, mulching and seasonal tidy-ups to keep your garden flourishing.",
    image: serviceGarden,
  },
  {
    icon: Trees,
    title: "Patio & Hard Landscaping",
    desc: "Pressure washing, path clearance and full garden transformations from the ground up.",
    image: servicePatio,
  },
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
  { icon: ThumbsUp, label: "90% Recommended", sub: "From 17+ verified reviews" },
  { icon: Shield, label: "Fully Insured", sub: "Complete peace of mind" },
  { icon: Clock, label: "Reliable & Punctual", sub: "On time, every time" },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="w-9 h-9 rounded-full gradient-primary grid place-items-center shadow-glow">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-base sm:text-lg tracking-tight">Longair's</span>
          </a>
          <a
            href="tel:+447541216111"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-smooth"
          >
            <Phone className="w-4 h-4" /> 07541 216111
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-1.5 rounded-full gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
          >
            Free Quote <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
        <img
          src={heroLawn}
          alt="Pristine striped lawn maintained by Longair's Lawn Care in Ayrshire"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-md border border-cream/20 px-3 py-1.5 text-xs font-medium text-cream">
              <Star className="w-3.5 h-3.5 fill-cream" /> 90% Recommended in Ayrshire
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-cream text-balance">
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
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-4 text-base font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+447541216111"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-7 py-4 text-base font-medium hover:bg-cream/20 transition-smooth"
              >
                <Phone className="w-4 h-4" /> Call 07541 216111
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
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28 gradient-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            About Longair's
          </span>
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

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Everything your garden needs, in one trusted team.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-smooth"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary">
                      <s.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Also offering specialised work</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Scarifying · Moss treatment · Mare's tail eradication · Weed control · Seasonal clean-ups · Turfing
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth whitespace-nowrap"
            >
              Ask About Your Job <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 sm:py-28 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,oklch(0.62_0.16_142),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow">
                Why Longair's
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
                Local craft. Honest pricing. Stunning results.
              </h2>
              <p className="mt-5 text-cream/80 text-balance">
                We've built our reputation across Ayrshire one tidy garden at a
                time. Whether you need a one-off transformation or year-round
                maintenance, we treat every job with the same level of care.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Free, no-obligation quotes — straight to your inbox",
                "Family-run business, established and locally trusted",
                "Fully insured with professional, well-kept equipment",
                "Friendly, reliable team that turns up when we say we will",
                "Before & after photos with every major project",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-cream/5 border border-cream/10 p-4 backdrop-blur-sm"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full gradient-primary grid place-items-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-cream/95">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Service Areas
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
              Proudly serving Ayrshire & East Renfrewshire
            </h2>
            <p className="mt-5 text-muted-foreground">
              Based in Newmilns and covering towns and villages right across
              the region. If you're nearby, we can help.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {areas.map((a) => (
              <div
                key={a.name}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-smooth"
              >
                <MapPin className="w-4 h-4 text-primary mb-3" />
                <div className="font-semibold">{a.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.note}</div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Don't see your area? <a href="#quote" className="text-primary font-medium underline-offset-4 hover:underline">Get in touch</a> — chances are we cover it.
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-20 sm:py-28 gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Free Quote
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-balance">
                Let's get your garden looking its best.
              </h2>
              <p className="mt-5 text-muted-foreground text-balance">
                Tell us a little about the work you need and we'll get back to
                you with a friendly, no-obligation quote — usually within 24
                hours.
              </p>

              <div className="mt-8 space-y-4">
                <a href="tel:+447541216111" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">Call us</div>
                    <div className="font-semibold">07541 216111</div>
                  </div>
                </a>
                <a href="mailto:longairslawncare@gmail.com" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">Email us</div>
                    <div className="font-semibold break-all">longairslawncare@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">Based in</div>
                    <div className="font-semibold">Newmilns, Ayrshire</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-card shadow-elegant p-6 sm:p-10 border border-border"
              >
                {submitted ? (
                  <div className="py-16 text-center">
                    <span className="inline-grid place-items-center w-14 h-14 rounded-full gradient-primary mb-5">
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
                      <Field label="Your name" name="name" required placeholder="Jane Smith" />
                      <Field label="Phone" name="phone" type="tel" required placeholder="07…" />
                      <Field label="Email" name="email" type="email" required placeholder="you@example.com" className="sm:col-span-2" />
                      <Field label="Postcode / Town" name="postcode" required placeholder="KA16…" className="sm:col-span-2" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">
                        Service needed
                      </label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      >
                        <option value="" disabled>Select a service…</option>
                        <option>Lawn care / grass cutting</option>
                        <option>Hedge trimming</option>
                        <option>Garden maintenance</option>
                        <option>Patio / hard landscaping</option>
                        <option>Full garden transformation</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">
                        Tell us about the job
                      </label>
                      <textarea
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-deep text-cream/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full gradient-primary grid place-items-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </span>
            <div>
              <div className="font-semibold text-cream">Longair's Lawn Care & Garden Services</div>
              <div className="text-xs text-cream/60">Newmilns · Ayrshire · East Renfrewshire</div>
            </div>
          </div>
          <div className="text-xs text-cream/60">
            © {new Date().getFullYear()} Longair's Lawn Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
    </div>
  );
}
