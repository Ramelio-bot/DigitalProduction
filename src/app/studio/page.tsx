import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio | Digipro Cinematic & Digital Studio",
  description: "Explore the core, methodology, and journey of Digipro. Creative media & technology agency based in Salatiga, Central Java.",
  alternates: { canonical: "https://digital-production.vercel.app/studio" },
  openGraph: {
    title: "Studio | Digipro Cinematic & Digital Studio",
    description: "Explore the core, methodology, and journey of Digipro. Creative media & technology agency based in Salatiga, Central Java.",
    type: "website",
    url: "https://digital-production.vercel.app/studio",
    siteName: "Digipro International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Digipro International — Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Digipro Cinematic & Digital Studio",
    description: "Explore the core, methodology, and journey of Digipro. Founded in 2025.",
    images: ["https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function StudioPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-40">
        {/* Header - Staggered Layout */}
        <header className="mb-32 lg:mb-48 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted block mb-10">Establishing 2025</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.85] italic tracking-tighter">
              The <span className="not-italic">Studio</span>.
            </h1>
          </div>
          <div className="lg:max-w-md pb-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted leading-relaxed border-l hairline-border pl-8">
              Digipro operates as a creative-tech laboratory in Salatiga, Central Java, bridging cinematic artistry with modern software engineering.
            </p>
          </div>
        </header>

        {/* Section 1: The Core */}
        <section className="mb-32 lg:mb-48 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="aspect-[4/5] bg-white hairline-border p-2 grayscale hover:grayscale-0 transition-all duration-1000 relative">
               <Image 
                 src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                 alt="Cinematic Laboratory" 
                 width={800}
                 height={1000}
                 className="w-full h-full object-cover"
                 loading="lazy"
                 quality={80}
               />
             </div>
          </div>
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2 lg:pt-20">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">The Core</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Engineering Cinematic Realities</h3>
            <div className="space-y-8 text-lg text-muted leading-relaxed font-sans max-w-xl">
              <p>
                Digipro is a creative-tech laboratory where the precision of code meets the aesthetics of cinematography. We believe that great digital systems should function as beautifully as a compelling visual masterpiece.
              </p>
              <p>
                Our focus is on crafting experiences that are not just seen, but felt—bridging the gap between software development logic and the emotional depth of storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Methodology */}
        <section className="mb-32 lg:mb-48 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Versatility Without Compromise</h3>
            <div className="space-y-8 text-lg text-muted leading-relaxed max-w-xl">
              <p>
                In capturing visuals, we do not limit creativity by tools. We master the full spectrum of equipment to ensure every message is delivered with the right intensity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-2">Ground Units</h3>
                  <p className="text-sm">Handheld & Tripod: For an intimate, organic, and classically stable approach.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-2">Aerial & Motion</h3>
                  <p className="text-sm">Gimbal & Drone: Providing smooth dynamic motion and grand aerial perspectives.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-white hairline-border p-2 relative">
               <Image 
                 src="https://images.unsplash.com/photo-1542315193666-68620247697b?auto=format&fit=crop&q=80&w=1200" 
                 alt="Cinematic Equipment" 
                 width={800}
                 height={800}
                 className="w-full h-full object-cover grayscale"
                 loading="lazy"
                 quality={80}
               />
            </div>
          </div>
        </section>

        {/* Section 3: 4-Stage Agency Workflow */}
        <section className="mb-32 lg:mb-48 py-20 border-t hairline-border">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Systematic Delivery</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">Our Production Workflow.</h2>
            <p className="text-muted text-base leading-relaxed">
              Every project follows an architectural discipline ensuring zero ambiguity, rapid iterations, and uncompromising fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                desc: "Deep alignment on business goals, technical feasibility, and precise scope of work.",
              },
              {
                step: "02",
                title: "Concept & Architecture",
                desc: "Interactive wireframes, cinematic storyboards, and robust full-stack system architecture.",
              },
              {
                step: "03",
                title: "Production & Build",
                desc: "High-frame-rate shooting, clean component development, and real-time sprint execution.",
              },
              {
                step: "04",
                title: "QA & Deployment",
                desc: "Comprehensive testing, Google PageSpeed optimization, production launch, and raw asset handover.",
              },
            ].map((item) => (
              <div key={item.step} className="p-8 bg-white hairline-border space-y-6">
                <span className="font-serif text-3xl italic text-accent font-bold">{item.step}</span>
                <h3 className="text-sm font-bold uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Narrative Edge & R&D */}
        <section className="mb-32 lg:mb-48 text-center max-w-4xl mx-auto space-y-16">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Narrative Edge & R&D</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight tracking-tighter">Research-Driven Storytelling.</h2>
          <div className="space-y-8 text-xl text-muted leading-relaxed">
            <p>
              Visuals without a strong narrative are merely a collection of images. At Digipro, we conduct deep research to provide a "soul" for every project, especially in elevating cultural and historical values.
            </p>
            <p className="text-accent font-bold uppercase text-[10px] tracking-[0.3em]">Featured: "Bicara Rasa Bicara Sejarah" & "Serial Sejarah AI"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
            <div className="p-8 bg-white hairline-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">KIDA (3D Mascot)</h3>
              <p className="text-xs text-muted leading-relaxed">
                A 3D digital mascot inspired by the endemic Kidangan bird, crafted as an official digital tourism ambassador for Salatiga.
              </p>
            </div>
            <div className="p-8 bg-white hairline-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Learning Library</h3>
              <p className="text-xs text-muted leading-relaxed">
                Curriculum-grounded visual knowledge base delivering rich, accessible multimedia modules for academic institutions.
              </p>
            </div>
            <div className="p-8 bg-white hairline-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Salatiga Stories</h3>
              <p className="text-xs text-muted leading-relaxed">
                Short-form documentary series spotlighting local heritage culinary artisans and pioneering MSMEs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Client Testimonials */}
        <section className="mb-32 lg:mb-48 py-20 border-t hairline-border">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Validated Impact</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">Client Testimonials.</h2>
            <p className="text-muted text-base leading-relaxed">
              Real testimonials from institutions and enterprise partners who rely on Digipro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white hairline-border space-y-8 relative">
              <span className="text-4xl font-serif italic text-accent font-bold">“</span>
              <p className="text-base text-muted italic leading-relaxed -mt-4">
                "Digipro berhasil mentransformasi sistem administrasi kami yang tadinya manual menjadi serba otomatis. Efisiensi kerja tim kami meningkat drastis."
              </p>
              <div className="pt-4 border-t hairline-border">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">Kepala Divisi IT</p>
                <p className="text-[10px] uppercase tracking-widest text-muted mt-1">Universitas Terbuka Salatiga</p>
              </div>
            </div>

            <div className="p-12 bg-white hairline-border space-y-8 relative">
              <span className="text-4xl font-serif italic text-accent font-bold">“</span>
              <p className="text-base text-muted italic leading-relaxed -mt-4">
                "Kualitas visual untuk video dan foto produk sangat memuaskan. Penjualan kami di platform digital naik signifikan setelah menggunakan jasa Digipro."
              </p>
              <div className="pt-4 border-t hairline-border">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">Owner & Founder</p>
                <p className="text-[10px] uppercase tracking-widest text-muted mt-1">Mie Ayam Sutra</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Studio Journey & Location */}
        <section className="py-24 border-t hairline-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Origin & Headquarters</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Salatiga, Central Java.</h2>
              <p className="text-muted leading-relaxed max-w-md">
                Rooted in Central Java with a global delivery standard. Digipro blends peaceful regional focus with high-velocity digital capabilities to serve clients worldwide.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="mailto:digiprosalatiga@gmail.com"
                  className="px-8 py-4 bg-accent text-white text-[10px] uppercase tracking-widest font-bold hover:bg-muted transition-colors rounded-sm inline-flex items-center gap-3"
                >
                  <span>Connect With Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-10 bg-white hairline-border space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">Studio Essentials</h3>
              <ul className="space-y-4 text-xs text-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Operating Studio:</strong> Salatiga, Central Java, Indonesia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Official Desk:</strong> digiprosalatiga@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Core Pillars:</strong> Next.js, Supabase, AI Video, Cinema Rigs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Studio Motto:</strong> CREATE. DEVELOP. INNOVATE.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
