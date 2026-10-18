import crypto from "crypto";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digipro International",
  url: "https://digital-production.vercel.app",
  description:
    "High-end creative agency specializing in cinematic video production and premium digital solutions.",
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@digipro.tech",
    contactType: "sales",
  },
});

export const jsonLdHash = `sha256-${crypto
  .createHash("sha256")
  .update(jsonLd, "utf8")
  .digest("base64")}`;

export const jsonLdContent = jsonLd;
