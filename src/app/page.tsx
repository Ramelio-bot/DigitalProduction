import Hero from "@/components/Hero";

export const metadata = {
  title: "Digipro | Engineering Digital Experiences & Cinematic Realities",
  description: "Video Production • Photography • App Development • Web Solutions",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
}
