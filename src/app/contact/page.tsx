import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Connect with Digipro",
  description: "Get in touch with our team for your next cinematic production or digital project.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Get in Touch</span>
        <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">Let's <span className="italic">start</span>.</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="space-y-12">
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors" placeholder="jane@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="px-12 py-5 bg-accent text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-muted transition-colors rounded-sm">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="space-y-12 pt-12 lg:pt-0">
          <div className="p-12 bg-white hairline-border">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Schedule a Call</h3>
            <p className="text-muted mb-8 leading-relaxed">
              Prefer a direct conversation? Book a 15-minute discovery call with our production team.
            </p>
            <div className="aspect-video bg-[#F0F0F0] flex items-center justify-center text-[10px] uppercase tracking-widest text-muted italic">
              [ Calendly Integration Placeholder ]
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h4 className="font-bold mb-4">Email</h4>
              <p className="text-muted">hello@digipro.tech</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-muted">International / Remote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
