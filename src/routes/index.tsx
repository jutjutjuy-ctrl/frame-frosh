import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Frame, Palette, ScanLine, Sparkles } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { ArtworkCard } from "@/components/site/ArtworkCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { artworks, categories, frameStyles, testimonials } from "@/components/site/data";
import hero from "@/assets/frame-frosh-hero.jpg";
import craft from "@/assets/custom-framing-craft.jpg";
import interior from "@/assets/art-interior-showcase.jpg";
import gallery from "@/assets/art-collection-gallery.jpg";

const siteUrl = "https://shaheencarrenatl.lovable.app";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Frame Frosh | Paintings & Custom Picture Framing Lahore" },
    { name: "description", content: "Frame Frosh offers premium paintings, custom picture framing, wall art and elegant artwork solutions in Lahore." },
    { property: "og:title", content: "Frame Frosh | Paintings & Custom Picture Framing Lahore" },
    { property: "og:description", content: "Premium paintings, custom picture framing and timeless wall art for beautiful spaces." },
    { property: "og:type", content: "website" }, { property: "og:url", content: siteUrl },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: siteUrl }] }), component: HomePage,
});

function HomePage() {
  return <SiteLayout>
    <section className="relative min-h-[92vh] overflow-hidden pt-20">
      <img src={hero} alt="Framed Lahore painting in an elegant contemporary interior" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-end px-5 py-16 lg:px-8 lg:py-24">
        <Reveal><div className="max-w-2xl text-hero-foreground"><p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-hero-accent">Paintings · Art · Custom Framing</p><h1 className="mt-5 font-serif text-6xl font-medium leading-[0.92] sm:text-8xl">FRAME FROSH</h1><p className="mt-5 font-serif text-3xl italic sm:text-4xl">Art That Belongs On Your Wall.</p><p className="mt-5 max-w-xl text-sm leading-7 text-hero-muted sm:text-base">Premium paintings, custom frames and timeless wall art crafted to transform your space.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/collection">Explore Our Collection <ArrowRight /></Link></Button><Button asChild size="lg" variant="heroOutline"><Link to="/custom-framing">Get a Custom Frame</Link></Button></div></div></Reveal>
      </div>
    </section>

    <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Curated collection" title={<>Pieces with <em>presence.</em></>} blurb="A considered selection of handmade paintings, portraiture and framed wall art for distinctive interiors." /></Reveal><div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{artworks.slice(0,3).map((art,i)=><Reveal key={art.name} delay={i*90}><ArtworkCard artwork={art}/></Reveal>)}</div><div className="mt-10"><Button asChild variant="outline"><Link to="/collection">View the full collection <ArrowRight /></Link></Button></div></div></section>

    <section className="bg-secondary py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Explore our art" title="Find the piece that speaks to you." centered /></Reveal><div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">{categories.map((category,i)=><Reveal key={category.title} delay={i*60}><Link to="/paintings" className="group relative block aspect-[4/5] overflow-hidden"><img src={category.image} alt={category.title} loading="lazy" width={1200} height={1504} className="size-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-image-shade"/><h3 className="absolute inset-x-4 bottom-4 font-serif text-xl text-hero-foreground sm:text-2xl">{category.title}</h3></Link></Reveal>)}</div></div></section>

    <section className="py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><Reveal><img src={craft} alt="Artisan fitting an artwork into a custom gold frame" loading="lazy" width={1600} height={1200} className="aspect-[4/3] size-full object-cover"/></Reveal><Reveal delay={140}><SectionHeading eyebrow="Custom framing" title={<>Made To Frame <em>Your Story.</em></>} blurb="Thoughtful custom framing for paintings, portraits, photographs, certificates, memorabilia, textile pieces and decorative artwork."/><ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground"><li>Paintings & artwork</li><li>Portraits & photographs</li><li>Certificates & memorabilia</li><li>Textile art & keepsakes</li></ul><Button asChild className="mt-9"><Link to="/custom-framing">Request Custom Framing <ArrowRight/></Link></Button></Reveal></div></section>

    <section className="border-y border-border bg-muted py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Frame profiles" title="Choose Your Frame." blurb="From understated modern edges to character-rich gold profiles, find a finish that lets the artwork lead." /></Reveal></div><div className="frame-marquee mt-12" aria-label="Frame styles"><div className="frame-marquee-track">{[0, 1].map((copy)=><div key={copy} className="frame-marquee-group" aria-hidden={copy === 1}>{[...frameStyles, ...frameStyles].map((style, i)=><div key={`${copy}-${style.name}-${i}`} className="frame-card"><div className={`frame-card-art aspect-square border-[12px] ${style.tone}`}><div className="size-full bg-secondary"/></div><p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.12em]">{style.name}</p></div>)}</div>)}</div></div></section>

    <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="In the room" title="Art For Every Space." blurb="Living rooms, bedrooms, offices, hotels and restaurants become more personal when the right piece finds its place." /></Reveal><Reveal delay={120}><div className="mt-12 grid gap-4 lg:grid-cols-[1.5fr_0.75fr]"><img src={interior} alt="Large abstract artwork in a refined living room" loading="lazy" width={1600} height={1200} className="h-full min-h-[420px] w-full object-cover"/><img src={gallery} alt="Curated framed art wall in a gallery interior" loading="lazy" width={1600} height={1200} className="h-full min-h-[420px] w-full object-cover"/></div></Reveal></div></section>

    <section className="bg-foreground py-24 text-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><Reveal><p className="text-[10px] uppercase tracking-[0.25em] text-primary">Transform your walls</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">A room changes when art arrives.</h2></Reveal><Reveal delay={120}><p className="max-w-xl text-base leading-8 text-background/70">Choose a finished piece or bring us something meaningful. We shape the presentation around the work, the wall and the feeling you want to create.</p><Button asChild variant="light" className="mt-8"><Link to="/contact">Start your inquiry <ArrowRight/></Link></Button></Reveal></div></section>

    <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Our approach" title="Meet The People Behind Frame Frosh." blurb="A Lahore-based team focused on careful framing, artistic presentation and personal service from first conversation to final display." /></Reveal><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{[{i:Frame,t:"Considered framing"},{i:Palette,t:"Art-led choices"},{i:ScanLine,t:"Made to measure"},{i:Sparkles,t:"Careful finishing"}].map(({i:Icon,t})=><div key={t} className="bg-background p-7"><Icon className="size-5 text-primary"/><p className="mt-4 font-serif text-xl">{t}</p></div>)}</div></div></section>

    <section className="bg-secondary py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Client notes" title="Beautifully finished. Thoughtfully delivered." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.slice(0,3).map((review,i)=><Reveal key={review.role} delay={i*80}><figure className="h-full bg-background p-7"><blockquote className="font-serif text-xl leading-8">“{review.quote}”</blockquote><figcaption className="mt-6 text-[10px] uppercase tracking-[0.18em] text-primary">{review.role}</figcaption></figure></Reveal>)}</div><Button asChild variant="outline" className="mt-9"><Link to="/reviews">Read more reviews</Link></Button></div></section>
  </SiteLayout>;
}
