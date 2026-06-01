import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { h as heroLawn } from "./router-B6hOcD6E.mjs";
import { L as Leaf, P as Phone, A as ArrowRight, M as Menu, X, S as Star, T as ThumbsUp, a as Shield, C as Clock, b as ChevronDown, c as MapPin, d as Sprout, e as Scissors, f as Trees, g as ChevronLeft, h as ChevronRight, i as Check, j as MessageCircle, k as Calendar, l as Sparkles, Q as Quote, m as Mail, n as Award, F as Facebook, o as ArrowLeftRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/vercel__analytics.mjs";
const serviceLawn = "/assets/service-lawn-DUNJy25D.jpg";
const serviceHedge = "/assets/service-hedge-BlzJqfB6.jpg";
const serviceGarden = "/assets/service-garden-CGX7OsnP.jpg";
const servicePatio = "/assets/service-patio-CdafQuaH.jpg";
const gallery1 = "/assets/gallery-1-CRGoYons.jpg";
const gallery2 = "/assets/gallery-2-CKmeVAcR.jpg";
const gallery3 = "/assets/gallery-3-CQWZlpez.jpg";
const gallery4 = "/assets/gallery-4-vdHVd6Hg.jpg";
const gallery5 = "/assets/gallery-5-DHT3ZMJD.jpg";
const gallery6 = "/assets/gallery-6-BROl4jvN.jpg";
const beforeLawn = "/assets/before-lawn-5TIaDZcX.png";
const afterLawn = "/assets/after-lawn-5l4u-mXa.png";
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}) {
  const [sliderPosition, setSliderPosition] = reactExports.useState(50);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min(x / width * 100, 100));
    setSliderPosition(percent);
  };
  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  reactExports.useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative w-full aspect-square sm:aspect-video lg:aspect-[21/9] overflow-hidden rounded-3xl select-none group cursor-ew-resize shadow-elegant",
      onMouseMove,
      onTouchMove,
      onMouseDown: () => setIsDragging(true),
      onTouchStart: () => setIsDragging(true),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: afterImage, alt: "After", className: "absolute inset-0 w-full h-full object-cover pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 w-full h-full overflow-hidden",
            style: { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beforeImage, alt: "Before", className: "absolute inset-0 w-full h-full object-cover pointer-events-none" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10",
            style: { left: `${sliderPosition}%`, transform: "translateX(-50%)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full grid place-items-center shadow-lg border border-gray-200 text-gray-700 hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-5 h-5" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase pointer-events-none transition-opacity duration-300", style: { opacity: sliderPosition > 15 ? 1 : 0 }, children: beforeLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase pointer-events-none transition-opacity duration-300", style: { opacity: sliderPosition < 85 ? 1 : 0 }, children: afterLabel })
      ]
    }
  );
}
function useReveal(options = { threshold: 0.05, rootMargin: "80px 0px 0px 0px" }) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      });
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
const services = [{
  icon: Sprout,
  title: "Lawn Care & Grass Cutting",
  desc: "Regular mowing, edging, feeds and treatments for a striped, healthy lawn that's the envy of the street.",
  image: serviceLawn,
  tags: ["Mowing", "Edging", "Feeds"]
}, {
  icon: Scissors,
  title: "Hedge Trimming & Pruning",
  desc: "Crisp lines, balanced shapes and tidy finishes — keep your hedges winter-ready and sharp year round.",
  image: serviceHedge,
  tags: ["Trimming", "Shaping", "Pruning"]
}, {
  icon: Leaf,
  title: "Garden Maintenance",
  desc: "Weeding, planting, mulching, leaf clearing and seasonal tidy-ups to keep every corner flourishing.",
  image: serviceGarden,
  tags: ["Weeding", "Planting", "Tidy-ups"]
}, {
  icon: Trees,
  title: "Patio & Transformations",
  desc: "Pressure washing, re-sanding and full garden makeovers — we'll turn the jungle back into a paradise.",
  image: servicePatio,
  tags: ["Pressure wash", "Re-sanding", "Makeovers"]
}];
const extras = ["Scarifying & Aerating", "Weed & Moss Control", "Mare's Tail Eradication", "Lawn Feeds & Treatments", "Leaf Clearing", "Pressure Washing", "Re-Sanding", "Turfing"];
const areas = [{
  name: "Newmilns",
  note: "Our home base"
}, {
  name: "Kilmarnock",
  note: "East Ayrshire"
}, {
  name: "Galston",
  note: "East Ayrshire"
}, {
  name: "Darvel",
  note: "East Ayrshire"
}, {
  name: "Stewarton",
  note: "East Ayrshire"
}, {
  name: "Irvine",
  note: "North Ayrshire"
}, {
  name: "Kilwinning",
  note: "North Ayrshire"
}, {
  name: "Ayr",
  note: "South Ayrshire"
}, {
  name: "Prestwick",
  note: "South Ayrshire"
}, {
  name: "Troon",
  note: "South Ayrshire"
}, {
  name: "Newton Mearns",
  note: "East Renfrewshire"
}, {
  name: "Giffnock",
  note: "East Renfrewshire"
}];
const trustPoints = [{
  icon: ThumbsUp,
  label: "90% Recommended",
  sub: "Verified reviews"
}, {
  icon: Shield,
  label: "Fully Insured",
  sub: "Peace of mind"
}, {
  icon: Clock,
  label: "Reliable",
  sub: "On time, every time"
}];
const stats = [{
  value: "10+",
  label: "Years caring for gardens"
}, {
  value: "500+",
  label: "Happy Ayrshire homes"
}, {
  value: "4.9★",
  label: "Average client rating"
}, {
  value: "24h",
  label: "Quote turnaround"
}];
const process = [{
  step: "01",
  icon: MessageCircle,
  title: "Get in touch",
  desc: "Drop us a message, call or fill in the quote form — whichever's easiest for you."
}, {
  step: "02",
  icon: Calendar,
  title: "Free site visit",
  desc: "We'll pop round at a time that suits, walk the garden with you and write up an honest quote."
}, {
  step: "03",
  icon: Sparkles,
  title: "Beautiful results",
  desc: "Our friendly team gets to work — leaving your garden looking better than ever before."
}];
const testimonials = [{
  name: "Yvie Holland",
  date: "26 Jul 2024",
  text: "Can't say enough good things about Longairs! Communication is fantastic, pricing is reasonable and transparent, the quality of work is top class…and they are genuinely lovely helpful people to deal with! So chuffed to have found such a reliable, hard working company to take care of my garden."
}, {
  name: "James O'Neil",
  date: "15 Aug 2022",
  text: "Five other gardeners had let me down previously and the garden was like a jungle (literally). Sandra was great at keeping me updated. They did a fantastic job and I highly recommend anyone in the East Ayrshire region to make Longair's their first point of contact."
}, {
  name: "Jill Newbigging",
  date: "2 May 2024",
  text: "Fantastic customer service. Highly recommend Arthur and his team. Competitive pricing and great attention to detail."
}, {
  name: "Lynn Brown",
  date: "20 Jun 2024",
  text: "Great job done and great communication from Sandra. Will definitely use them again."
}];
const faqs = [{
  q: "Which areas do you cover?",
  a: "We're based in Newmilns and cover the whole of East, North & South Ayrshire and East Renfrewshire — including Kilmarnock, Galston, Darvel, Stewarton, Irvine, Ayr, Troon, Newton Mearns and Giffnock. Just ask if you're nearby."
}, {
  q: "How much does it cost?",
  a: "Every garden is different, so we always offer free, no-obligation quotes after a quick visit. Our pricing is fair, transparent and there are no surprises."
}, {
  q: "Are you insured?",
  a: "Yes — we're fully insured and DBS-conscious, so you can have complete peace of mind whenever we're on your property."
}, {
  q: "Do you offer one-off jobs or just regular maintenance?",
  a: "Both. From a single tidy-up or full transformation through to weekly / fortnightly / monthly maintenance plans — we'll work to a schedule that suits you."
}, {
  q: "How quickly can you start?",
  a: "We typically reply to enquiries within 24 hours and can often book a free site visit within the same week, depending on the season."
}];
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Longair%27s+Lawn+Care+%26+Garden+Services+Newmilns";
const GOOGLE_LEAVE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";
const gallery = [{
  src: gallery1,
  alt: "Freshly mowed striped lawn in an Ayrshire back garden",
  caption: "Lawn care · Newmilns",
  span: ""
}, {
  src: gallery2,
  alt: "Tall conifer hedge trimmed to crisp lines",
  caption: "Hedge trimming · Kilmarnock",
  span: "row-span-2"
}, {
  src: gallery3,
  alt: "Pressure washed sandstone patio next to a tidy lawn",
  caption: "Patio restoration · Galston",
  span: ""
}, {
  src: gallery4,
  alt: "Restored cottage garden with mulched borders and flower beds",
  caption: "Garden transformation · Darvel",
  span: "row-span-2"
}, {
  src: gallery5,
  alt: "Gardener mowing a large lush green lawn",
  caption: "Weekly maintenance · Stewarton",
  span: ""
}, {
  src: gallery6,
  alt: "Sculpted topiary in a Scottish stone house front garden",
  caption: "Topiary & shaping · Newton Mearns",
  span: ""
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Areas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, {})
  ] });
}
function Nav() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const links = [{
    href: "#services",
    label: "Services"
  }, {
    href: "#gallery",
    label: "Our Work"
  }, {
    href: "#why",
    label: "Why us"
  }, {
    href: "#reviews",
    label: "Reviews"
  }, {
    href: "#areas",
    label: "Areas"
  }, {
    href: "#faq",
    label: "FAQ"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "backdrop-blur-xl bg-background/85 border-b border-border/60 shadow-soft" : "bg-transparent"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 font-semibold group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-xl gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-base sm:text-lg tracking-tight transition-smooth ${scrolled ? "text-foreground" : "text-cream"}`, children: "Longair's" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: `px-4 py-2 text-sm font-medium rounded-full transition-smooth ${scrolled ? "text-foreground/80 hover:text-primary hover:bg-secondary" : "text-cream/85 hover:text-cream hover:bg-cream/10"}`, children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+447541216111", className: `hidden sm:inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full transition-smooth ${scrolled ? "text-foreground hover:text-primary" : "text-cream hover:bg-cream/10"}`, "aria-label": "Call Longair's Lawn Care", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
          " 07541 216111"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "hidden sm:inline-flex items-center gap-1.5 rounded-full gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth", children: [
          "Free Quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(true), className: `lg:hidden grid place-items-center w-11 h-11 rounded-full transition-smooth ${scrolled ? "bg-secondary text-foreground hover:bg-secondary/80" : "bg-cream/15 text-cream hover:bg-cream/25 backdrop-blur-md"}`, "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-0 z-[60] lg:hidden transition-smooth ${open ? "pointer-events-auto" : "pointer-events-none"}`, "aria-hidden": !open, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setOpen(false), className: `absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `absolute top-0 right-0 h-full w-[88%] max-w-sm bg-background shadow-elegant flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary-foreground" }) }),
            "Longair's"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "grid place-items-center w-11 h-11 rounded-full bg-secondary hover:bg-secondary/70 transition-smooth", "aria-label": "Close menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto p-5 space-y-1", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: l.href, onClick: () => setOpen(false), style: {
          transitionDelay: `${i * 40}ms`
        }, className: `flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-medium hover:bg-secondary transition-smooth ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} duration-500`, children: [
          l.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-primary" })
        ] }, l.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-border space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+447541216111", className: "flex items-center justify-center gap-2 w-full rounded-full bg-secondary text-foreground px-6 py-4 font-medium hover:bg-secondary/70 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            " 07541 216111"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", onClick: () => setOpen(false), className: "flex items-center justify-center gap-2 w-full rounded-full gradient-primary text-primary-foreground px-6 py-4 font-medium shadow-elegant", children: [
            "Get a Free Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroLawn, alt: "Pristine striped lawn maintained by Longair's Lawn Care in Ayrshire", width: 1920, height: 1080, fetchPriority: "high", className: "absolute inset-0 w-full h-full object-cover scale-105" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 px-3 py-1.5 text-xs font-medium text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-cream" }),
        " 90% Recommended · Ayrshire"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold text-cream text-balance", children: [
        "Beautiful gardens,",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary-glow", children: "expertly cared for." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-cream/85 max-w-xl text-balance", children: "From a single grass cut to a full garden transformation, Longair's Lawn Care & Garden Services is your trusted local team across Newmilns and all of Ayrshire." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-3 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "group inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-4 text-base font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-smooth", children: [
          "Get a Free Quote",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-smooth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+447541216111", className: "inline-flex items-center justify-center gap-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-7 py-4 text-base font-medium hover:bg-cream/20 transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
          " 07541 216111"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-4 max-w-lg", children: trustPoints.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "w-5 h-5 text-primary-glow mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold leading-tight", children: t.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cream/70 mt-0.5 hidden sm:block", children: t.sub })
      ] }, t.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 float-slow hidden sm:flex flex-col items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase", children: "Scroll" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
    ] })
  ] });
}
function LogoStrip() {
  const items = ["Newmilns", "Kilmarnock", "Galston", "Darvel", "Stewarton", "Irvine", "Ayr", "Troon", "Prestwick", "Newton Mearns", "Giffnock"];
  const doubled = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-6 border-y border-border bg-secondary/40 overflow-hidden", "aria-label": "Areas served", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap marquee", children: doubled.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: i }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/40", children: "•" })
  ] }, idx)) }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "About Longair's" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Ayrshire's local gardening team — proudly family-run." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-muted-foreground text-balance max-w-3xl mx-auto", children: "Based in Newmilns, we look after gardens of every size right across North, East & South Ayrshire and East Renfrewshire. From routine grass cutting and hedge trimming through to specialised jobs like scarifying, mare's tail eradication and full garden makeovers — we do it all, with the care your garden deserves." })
  ] }) }) });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Everything your garden needs, in one trusted team." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "Pick a one-off job or a regular maintenance plan — we'll tailor it to your garden." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, width: 800, height: 500, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-smooth duration-[1200ms]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground", children: t }, t)) })
        ] })
      ] }) })
    ] }) }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Also offering specialised work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: extras.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium px-3 py-1.5 rounded-full bg-background border border-border text-foreground/80", children: e }, e)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth whitespace-nowrap", children: [
        "Ask About Your Job ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] }) });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 bg-forest-deep text-cream relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,oklch(0.62_0.16_142),transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl font-semibold text-primary-glow tracking-tight", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-xs sm:text-sm text-cream/70 leading-tight", children: s.label })
    ] }, s.label)) })
  ] }) });
}
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Why Longair's" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Local craft. Honest pricing. Stunning results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-balance", children: "We've built our reputation across Ayrshire one tidy garden at a time. Whether you need a one-off transformation or year-round maintenance, we treat every job with the same level of care." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "mt-8 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth", children: [
        "Start with a free quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["Free, no-obligation quotes — straight to your inbox", "Family-run business, established and locally trusted", "Fully insured with professional, well-kept equipment", "Friendly, reliable team that turns up when we say we will", "Before & after photos with every major project"].map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-soft transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-6 h-6 rounded-full gradient-primary grid place-items-center mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary-foreground", strokeWidth: 3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base", children: point })
    ] }) }, point)) })
  ] }) }) });
}
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Easy from first call to final cut." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-5", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-3xl bg-card border border-border p-7 hover:border-primary/40 hover:-translate-y-1 hover:shadow-elegant transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 w-12 h-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center font-semibold text-sm shadow-glow", children: p.step }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc })
    ] }) }, p.step)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Kind words" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance max-w-xl", children: "Loved by gardens (and their owners) across Ayrshire." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-primary-glow text-primary-glow" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "4.9 / 5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· 17 reviews" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative h-full rounded-3xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-7 h-7 text-primary-glow mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-sm text-foreground/85 leading-relaxed flex-1", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: t.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-2", children: [1, 2, 3, 4, 5].map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-primary-glow text-primary-glow" }, i2)) })
      ] })
    ] }) }, t.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-14 h-14 rounded-2xl bg-secondary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleG, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-primary-glow text-primary-glow" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: "4.9 on Google" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Real reviews from real customers across Ayrshire." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GOOGLE_REVIEWS_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground px-5 py-3 text-sm font-medium hover:bg-secondary/70 transition-smooth", children: [
          "Read all on Google ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GOOGLE_LEAVE_REVIEW_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth", children: [
          "Leave a review ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" })
        ] })
      ] })
    ] }) })
  ] }) });
}
function Areas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "areas", className: "py-20 sm:py-28 gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Service Areas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Proudly serving Ayrshire & East Renfrewshire" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "Based in Newmilns and covering towns and villages right across the region." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4", children: areas.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 35, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-smooth h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary mb-3 group-hover:scale-125 transition-smooth" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: a.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: a.note })
    ] }) }, a.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: [
      "Don't see your area?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", className: "text-primary font-medium underline-offset-4 hover:underline", children: "Get in touch" }),
      " ",
      "— chances are we cover it."
    ] })
  ] }) });
}
function Faq() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Questions, answered." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), "aria-expanded": open === i, className: "w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 shrink-0 text-primary transition-smooth ${open === i ? "rotate-180" : ""}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-500 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed", children: f.a }) }) })
    ] }) }, f.q)) })
  ] }) });
}
function QuoteSection() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "quote", className: "py-20 sm:py-28 bg-forest-deep text-cream relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,oklch(0.62_0.16_142),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow", children: "Free Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance", children: "Let's get your garden looking its best." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/75", children: "Fill in the form and we'll reply with a friendly, no-obligation quote — usually within 24 hours." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_580px] gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-cream/5 border border-cream/10 p-7 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-cream/50 uppercase tracking-widest", children: "Prefer to call?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: Phone, label: "Call us", value: "07541 216111", href: "tel:+447541216111" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: Mail, label: "Email us", value: "longairslawncare@gmail.com", href: "mailto:longairslawncare@gmail.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: MapPin, label: "Based in", value: "Newmilns, Ayrshire" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [{
            icon: Shield,
            label: "Fully Insured",
            sub: "Peace of mind"
          }, {
            icon: Clock,
            label: "24h Response",
            sub: "Usually same day"
          }, {
            icon: ThumbsUp,
            label: "90% Recommended",
            sub: "Verified reviews"
          }, {
            icon: Award,
            label: "Family Run",
            sub: "Est. in Ayrshire"
          }].map(({
            icon: Icon,
            label,
            sub
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-cream/5 border border-cream/10 p-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-xl gradient-primary grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-cream leading-tight", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-cream/50 mt-0.5", children: sub })
            ] })
          ] }, label)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, className: "rounded-3xl bg-background text-foreground shadow-elegant p-7 sm:p-10 border border-border", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid place-items-center w-14 h-14 rounded-full gradient-primary mb-5 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-primary-foreground", strokeWidth: 3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Thank you!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "We've received your enquiry and will be in touch shortly." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name", required: true, placeholder: "Jane Smith", autoComplete: "name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true, placeholder: "07…", autoComplete: "tel", inputMode: "tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, placeholder: "you@example.com", className: "sm:col-span-2", autoComplete: "email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Postcode / Town", name: "postcode", required: true, placeholder: "KA16…", className: "sm:col-span-2", autoComplete: "postal-code" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", htmlFor: "service", children: "Service needed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", name: "service", required: true, defaultValue: "", className: "w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service…" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Lawn care / grass cutting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hedge trimming" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Garden maintenance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Patio / pressure washing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Full garden transformation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Something else" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", htmlFor: "message", children: "Tell us about the job" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 4, placeholder: "A few details about your garden and what you'd like done…", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-4 text-base font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth", children: [
            "Request My Free Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground text-center", children: "No spam, ever. We typically reply within 24 hours." })
        ] }) }) })
      ] })
    ] })
  ] });
}
function Gallery() {
  const [active, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => a === null ? 0 : (a + 1) % gallery.length);
      if (e.key === "ArrowLeft") setActive((a) => a === null ? 0 : (a - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "bg-forest-deep text-cream pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-20 sm:pb-28 px-4 sm:px-6 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Transformation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance text-cream", children: "The difference is night and day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/70", children: "Slide to see a real garden transformation we completed. We take overgrown, untidy spaces and return them to pristine condition." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfterSlider, { beforeImage: beforeLawn, afterImage: afterLawn, beforeLabel: "Before", afterLabel: "After" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 sm:py-28 bg-secondary/10 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Our Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-semibold text-balance text-cream", children: "Recent Projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/70 max-w-md", children: "A selection of gardens we've recently cared for across Ayrshire. Click any image to view full size." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "btn-press hidden sm:inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft whitespace-nowrap", children: [
          "Get your free quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 auto-rows-[160px] sm:auto-rows-[240px]", children: gallery.map((img, i) => {
        const isLarge = i === 0 || i === 3;
        const spanClass = isLarge ? "col-span-2 row-span-2" : "col-span-2 md:col-span-1 row-span-1 md:row-span-2";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(i), "aria-label": `View full image: ${img.caption}`, className: `btn-press group relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-forest-deep ${spanClass}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] cubic-bezier(0.23,1,0.32,1) group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 sm:p-7 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-glow block mb-1.5", children: "Tap to expand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-lg font-semibold text-white leading-tight", children: img.caption })
          ] })
        ] }) }, i);
      }) })
    ] }) }),
    active !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[80] bg-forest-deep/98 backdrop-blur-xl animate-fade-up flex items-center justify-center", onClick: () => setActive(null), role: "dialog", "aria-modal": "true", "aria-label": "Photo gallery viewer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setActive(null);
      }, "aria-label": "Close", className: "btn-press absolute top-4 right-4 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setActive((a) => a === null ? 0 : (a - 1 + gallery.length) % gallery.length);
      }, "aria-label": "Previous", className: "btn-press absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setActive((a) => a === null ? 0 : (a + 1) % gallery.length);
      }, "aria-label": "Next", className: "btn-press absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl p-4 sm:p-12 flex flex-col items-center", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery[active].src, alt: gallery[active].alt, className: "w-full max-h-[75svh] object-contain rounded-2xl shadow-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center animate-fade-up", style: {
          animationDelay: "150ms"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl font-semibold text-white", children: gallery[active].caption }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/50 mt-2", children: [
            "Image ",
            active + 1,
            " of ",
            gallery.length
          ] })
        ] })
      ] })
    ] })
  ] });
}
function GoogleG({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 48 48", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FFC107", d: "M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FF3D00", d: "M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4CAF50", d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#1976D2", d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C41.4 35.3 44 30.1 44 24c0-1.3-.1-2.4-.4-3.5z" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-background border-t border-border py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-8 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-semibold mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary-foreground" }) }),
          "Longair's Lawn Care & Garden Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md", children: "Ayrshire's trusted local gardeners. Based in Newmilns and covering the whole region — from quick tidy-ups to full garden transformations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/LongairsLawnCare/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "w-10 h-10 grid place-items-center rounded-full bg-secondary hover:gradient-primary hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:longairslawncare@gmail.com", "aria-label": "Email", className: "w-10 h-10 grid place-items-center rounded-full bg-secondary hover:gradient-primary hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-primary transition-smooth", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#gallery", className: "hover:text-primary transition-smooth", children: "Our Work" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "hover:text-primary transition-smooth", children: "Reviews" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#areas", className: "hover:text-primary transition-smooth", children: "Service Areas" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-primary transition-smooth", children: "FAQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", className: "hover:text-primary transition-smooth", children: "Free Quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+447541216111", className: "hover:text-primary transition-smooth", children: "07541 216111" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:longairslawncare@gmail.com", className: "hover:text-primary transition-smooth break-all", children: "longairslawncare@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Newmilns, Ayrshire" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-border flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Longair's Lawn Care & Garden Services. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-primary" }),
        " 90% recommended in Ayrshire"
      ] })
    ] })
  ] }) });
}
function FloatingCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/447541216111", target: "_blank", rel: "noopener noreferrer", "aria-label": "Message us on WhatsApp", className: "fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-elegant grid place-items-center hover:scale-110 hover:shadow-glow transition-smooth float-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" }) });
}
function StickyMobileCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-safe bg-background/95 backdrop-blur-xl border-t border-border shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+447541216111", className: "inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground px-4 py-3 text-sm font-medium cursor-pointer hover:bg-secondary/80 transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
      " Call"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", className: "inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-4 py-3 text-sm font-medium shadow-soft cursor-pointer hover:shadow-glow transition-smooth", children: [
      "Free Quote ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
    ] })
  ] }) });
}
function Eyebrow({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-primary", children });
}
function Reveal({
  children,
  delay = 0
}) {
  const {
    ref,
    visible
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${visible ? "is-visible" : ""}`, style: {
    transitionDelay: `${delay}ms`
  }, children });
}
function ContactRow({
  icon: Icon,
  label,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-11 h-11 rounded-2xl bg-cream/10 border border-cream/15 grid place-items-center text-primary-glow group-hover:bg-cream/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cream/60", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold break-all text-cream", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "flex items-center gap-4 group", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: inner });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
  autoComplete,
  inputMode
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", htmlFor: name, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, type, name, required, placeholder, autoComplete, inputMode, className: "w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth" })
  ] });
}
export {
  Index as component
};
