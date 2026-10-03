import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Our Collection" },
  { to: "/custom-framing", label: "Custom Framing" },
  { to: "/paintings", label: "Paintings" },
  { to: "/about", label: "About Us" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group leading-none" aria-label="Frame Frosh home">
          <span className="block font-serif text-2xl font-semibold tracking-[0.08em] text-foreground">FRAME FROSH</span>
          <span className="mt-1 block text-[8px] uppercase tracking-[0.28em] text-primary">Art · Frames · Lahore</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "text-primary" }} className="text-[11px] font-medium text-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 xl:hidden">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}