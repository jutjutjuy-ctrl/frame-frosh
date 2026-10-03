import oilFlorals from "@/assets/art-oil-florals.jpg";
import abstractArt from "@/assets/art-abstract.jpg";
import lahoreHeritage from "@/assets/art-lahore-heritage.jpg";
import portraitArt from "@/assets/art-portrait.jpg";
import interiorShowcase from "@/assets/art-interior-showcase.jpg";
import collectionGallery from "@/assets/art-collection-gallery.jpg";

export const WHATSAPP_NUMBER = "923324442444";
export const WHATSAPP_MESSAGE =
  "Hello Frame Frosh, I am interested in paintings and custom picture framing. Please share details.";

export function waLink(subject?: string) {
  const text = subject ? `${WHATSAPP_MESSAGE} Inquiry: ${subject}.` : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type Artwork = {
  name: string;
  category: string;
  description: string;
  frame: string;
  image: string;
};

export const artworks: Artwork[] = [
  {
    name: "Evening Peonies",
    category: "Handmade Oil Painting",
    description: "A richly layered floral study with a timeless, moody palette.",
    frame: "Ornate antique-gold profile",
    image: oilFlorals,
  },
  {
    name: "Quiet Geometry",
    category: "Abstract Art",
    description: "Architectural forms in charcoal, olive and softly burnished tones.",
    frame: "Slim matte-black profile",
    image: abstractArt,
  },
  {
    name: "Lahore at Dusk",
    category: "Lahore Heritage Art",
    description: "A warm painterly tribute to the city's enduring architecture.",
    frame: "Dark wood with gold inner edge",
    image: lahoreHeritage,
  },
  {
    name: "Poised",
    category: "Portraits",
    description: "An expressive portrait presented with calm gallery restraint.",
    frame: "Black profile with linen mount",
    image: portraitArt,
  },
  {
    name: "Olive Passage",
    category: "Modern Wall Art",
    description: "Large-scale texture designed to anchor a contemporary interior.",
    frame: "Fine brass gallery profile",
    image: interiorShowcase,
  },
  {
    name: "The Curated Wall",
    category: "Custom Framed Art",
    description: "A considered arrangement mixing portraiture, place and abstraction.",
    frame: "Mixed custom profiles",
    image: collectionGallery,
  },
];

export const categories = [
  { title: "Handmade Oil Paintings", image: oilFlorals },
  { title: "Abstract Paintings", image: abstractArt },
  { title: "Lahore Heritage Art", image: lahoreHeritage },
  { title: "Portraits", image: portraitArt },
  { title: "Modern Art", image: interiorShowcase },
  { title: "Decorative Wall Art", image: collectionGallery },
];

export const frameStyles = [
  { name: "Classic Gold", tone: "frame-gold" },
  { name: "Antique Gold", tone: "frame-antique" },
  { name: "Matte Black", tone: "frame-black" },
  { name: "Natural Wood", tone: "frame-wood" },
  { name: "Modern Silver", tone: "frame-silver" },
  { name: "Minimal White", tone: "frame-white" },
];

export const testimonials = [
  { quote: "My first experience with them was excellent. Wais is extremely professional and he delivered on time, in a very good quality. I highly recommend working with him.", role: "KHAWAJA MUHAMMAD" },
  { quote: "Highly Recommended to turn your memories into frames.", role: "SAAD BAIG" },
  { quote: "Highly recommend ❤️", role: "ZAIN ABBASI" },
  { quote: "Superb framing quality and attention to detail. Handled our custom artwork with utmost care and delivered on time.", role: "MUBASHIR JOYA" },
  { quote: "Particularly Junaid Bhai is a true professional. He remained calm and gave adequate time to discuss and share various options. All dealing was done on the phone without a need for physical visit. Their prices are decent and market competitive and finishing is professional and immaculate. Best wishes ❤️", role: "JEHANGIR MEHMOOD" },
  { quote: "Multiple artworks came to life through Junaid Sajjad. Beautiful finishing and immaculate custom framing. ❤️", role: "CASSANDRA CASSIDY" },
];

export const faqs = [
  { q: "Do you provide custom framing?", a: "Yes. We help choose a frame style, proportion and presentation suited to your artwork and space." },
  { q: "What types of artwork can be framed?", a: "We frame paintings, portraits, photographs, certificates, memorabilia, textile pieces and decorative artwork." },
  { q: "Can I bring my own artwork?", a: "Yes. Bring your piece to discuss the most suitable custom framing approach." },
  { q: "Do you frame photographs and portraits?", a: "Yes. Both photographs and painted portraits can be framed in a wide range of classic and modern styles." },
  { q: "What frame styles are available?", a: "Our visual range includes classic gold, antique gold, matte black, natural wood, modern silver and minimal white profiles." },
  { q: "Can you create custom-size frames?", a: "Yes. Frames can be sized around the dimensions and presentation needs of your piece." },
  { q: "Do you provide ready-to-hang artwork?", a: "Selected paintings and framed pieces are prepared for easy display. Ask about the finish of a particular artwork." },
  { q: "How can I place an order?", a: "Send an inquiry with the artwork or framing service you are interested in. Our team will guide you through the next steps." },
];