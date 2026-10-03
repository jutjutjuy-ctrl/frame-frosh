import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { waLink } from "./data";

const links = [
  ["/", "Home"], ["/collection", "Our Collection"], ["/paintings", "Paintings"],
  ["/custom-framing", "Custom Framing"], ["/about", "About"], ["/reviews", "Reviews"],
  ["/faq", "FAQs"], ["/contact", "Contact"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.7fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.08em]">FRAME FROSH</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-background/70">Premium paintings, custom framing and timeless wall art for beautiful spaces.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
            {links.map(([to, label]) => <Link key={to} to={to} className="text-xs text-background/70 hover:text-background">{label}</Link>)}
          </nav>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary">Begin an inquiry</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-primary"><MessageCircle className="size-4" /> WhatsApp</a>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100063769002334" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="size-4" /></a>
              <a href="https://www.instagram.com/jaspalmazhar" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-[10px] text-background/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Frame Frosh. All rights reserved.</p><p>Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}