import { ArrowUpRight } from "lucide-react";
import type { Artwork } from "./data";
import { waLink } from "./data";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="gallery-card group flex h-full flex-col bg-card shadow-sm transition-transform duration-500 hover:-translate-y-1">
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={artwork.image}
          alt={`${artwork.name}, ${artwork.category}`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={1504}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{artwork.category}</p>
        <h3 className="mt-3 font-serif text-2xl text-card-foreground">{artwork.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{artwork.description}</p>
        <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">{artwork.frame}</p>
        <a
          href={waLink(artwork.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
        >
          View artwork <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}