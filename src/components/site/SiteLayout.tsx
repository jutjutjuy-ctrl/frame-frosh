import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { Reveal } from "./Reveal";

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col bg-background text-foreground"><Nav /><WhatsAppFab /><main className="flex-1">{children}</main><Footer /></div>;
}

export function SectionHeading({ eyebrow, title, blurb, centered = false }: { eyebrow: string; title: ReactNode; blurb?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p><h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">{title}</h2>{blurb && <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{blurb}</p>}</div>;
}

export function PageHeader({ eyebrow, title, blurb }: { eyebrow: string; title: ReactNode; blurb?: string }) {
  return <section className="border-b border-border bg-secondary pt-36 pb-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] sm:text-7xl">{title}</h1>{blurb && <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{blurb}</p>}</Reveal></div></section>;
}