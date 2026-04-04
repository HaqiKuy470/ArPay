import type { Metadata } from "next";

// 1. SEO & OpenGraph (Fokus Domain Utama)
export const metadata: Metadata = {
  title: "ArPay | Peer-to-Fiat Settlement Protocol",
  description: "A trustless settlement protocol enabling the conversion of on-chain USDC holdings into local fiat currency disbursements via QRIS without intermediaries.",
  keywords: [
    "ArPay Protocol",
    "Peer-to-Fiat",
    "USDC to QRIS",
    "Solana Settlement",
    "Arshaka Team",
    "Decentralized Commerce"
  ],
  openGraph: {
    title: "ArPay | Decentralized Peer-to-Fiat Protocol",
    description: "Convert on-chain USDC to local fiat in seconds.",
    url: "https://arpay.my.id",
    siteName: "ArPay Protocol",
    locale: "en_US",
    type: "website",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // 2. SCHEMA MARKUP (AEO & GEO)
  // Deklarasi Entitas Bisnis & Perangkat Lunak untuk AI
  const protocolSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Organization"],
    "name": "ArPay",
    "alternateName": "ArPay Protocol",
    "url": "https://arpay.my.id",
    "author": {
      "@type": "Organization",
      "name": "Arshaka Team",
      "email": "arshaka@zohomail.com"
    },
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Solana Blockchain",
    "description": "A peer-to-fiat settlement protocol for decentralized commerce, leveraging Solana's sub-second block finality.",
    "knowsAbout": ["USDC", "Solana", "QRIS", "Decentralized Finance", "Fiat Disbursement"]
  };

  return (
    <main className="main-domain-wrapper">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(protocolSchema) }}
        />
      </head>
      {children}
    </main>
  );
}