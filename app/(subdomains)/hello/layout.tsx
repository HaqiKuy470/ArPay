import type { Metadata } from "next";

// 1. METADATA (SEO & OpenGraph FOR ABOUT PAGE)
export const metadata: Metadata = {
  title: "About ArPay | The Missing Bridge for Decentralized Commerce",
  description: "Learn about the ArPay Protocol. A trustless peer-to-fiat settlement solution converting on-chain USDC into local fiat currency via the QRIS network without intermediaries.",
  // 👇 INI TAMBAHAN UNTUK LOGO DI BROWSER 👇
  icons: {
    icon: '/logo.svg', 
  },
  keywords: [
    "What is ArPay",
    "About ArPay Protocol",
    "Arshaka Team Solana",
    "Solana QRIS Bridge",
    "Decentralized Commerce",
    "USDC to Fiat",
    "Trustless Settlement"
  ],
  openGraph: {
    title: "About ArPay | The Peer-to-Fiat Protocol",
    description: "Discover the fastest peer-to-fiat settlement protocol bridging Solana and local payment networks.",
    url: "https://hello.arpay.my.id", 
    siteName: "ArPay About",
    locale: "en_US",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // 2. SCHEMA MARKUP (AEO & GEO FOR ABOUT PAGE)
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ArPay Protocol",
    "url": "https://hello.arpay.my.id",
    "description": "ArPay is a trustless settlement protocol that enables the conversion of on-chain USDC holdings into local fiat currency disbursements without requiring merchants to hold any cryptocurrency asset.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "ArPay Protocol",
      "applicationCategory": "Decentralized Finance (DeFi)",
      "operatingSystem": "Solana Blockchain",
      "creator": {
        "@type": "Organization",
        "name": "Arshaka Team",
        "email": "arshaka@zohomail.com",
        "location": {
          "@type": "Place",
          "name": "Malang, Indonesia"
        }
      }
    }
  };

  return (
    <section className="about-subdomain-wrapper relative min-h-screen">
      {/* Catatan: Saya tetap menghapus tag <head> di sini ya.
        Karena kalau dibiarkan, cepat atau lambat Next.js akan memunculkan 
        hydration error (layar merah) saat kamu build/deploy aplikasinya. 
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      <main className="relative z-10">
        {children}
      </main>
    </section>
  );
}