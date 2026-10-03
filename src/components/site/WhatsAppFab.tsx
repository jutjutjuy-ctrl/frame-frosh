import { MessageCircle } from "lucide-react";
import { waLink } from "./data";

export function WhatsAppFab() {
  return <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Ask Frame Frosh on WhatsApp" className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105"><MessageCircle className="size-5" /></a>;
}