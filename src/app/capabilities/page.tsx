import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities | Digital Solutions & Production",
  description: "Detailed services breakdown including Video Production, Photography, Web Development, and App Solutions.",
};

export default function CapabilitiesPage() {
  const services = [
    { title: "Cinematic Video", desc: "High-end production, showreels, and brand storytelling with an international standard." },
    { title: "Photography", desc: "Professional editorial, architectural, and commercial photography for premium brands." },
    { title: "Web Development", desc: "Fast, responsive, and minimalist web experiences built with cutting-edge tech." },
    { title: "App Solutions", desc: "Intuitive mobile and desktop applications designed for performance and scale." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Our Expertise</span>
        <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">What we <span className="italic">do</span>.</h1>
        <p className="text-muted text-lg leading-relaxed">
          We combine artistic vision with technical precision to deliver digital solutions that define market leaders.
        </p>
      </header>

      <div className="space-y-px bg-border">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-12 bg-background hover:bg-white transition-colors group cursor-default">
            <div className="flex items-start space-x-12">
              <span className="text-xs font-bold text-muted mt-2">0{index + 1}</span>
              <h2 className="text-4xl md:text-5xl group-hover:italic transition-all">{service.title}</h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-muted text-lg leading-relaxed max-w-sm">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
