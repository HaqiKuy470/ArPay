import type { Metadata } from "next";
import Link from "next/link";

// 1. UPGRADE METADATA (SEO & OpenGraph)
export const metadata: Metadata = {
  title: {
    template: "%s | ArPay Docs",
    default: "ArPay Protocol Documentation | Developers & API",
  },
  description: "Technical documentation, architecture, and API reference for the ArPay Peer-to-Fiat settlement protocol on Solana.",
  keywords: [
    "ArPay Docs", 
    "ArPay API", 
    "Solana Anchor Integration", 
    "USDC Settlement API", 
    "QRIS Peer-to-Fiat", 
    "ArPay Smart Contract",
    "Decentralized Commerce"
  ],
  openGraph: {
    title: "ArPay Protocol Documentation",
    description: "Technical reference, architecture, and developer guide for ArPay Protocol.",
    url: "https://docs.arpay.my.id",
    siteName: "ArPay Docs",
    locale: "en_US",
    type: "website", // Ini adalah website dokumentasi
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // 2. SCHEMA MARKUP (AEO & GEO KHUSUS DOKUMENTASI TEKNIS)
  // Ini memberi tahu AI bahwa seluruh subdomain ini adalah pusat edukasi/referensi teknis
  const docsSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArPay Protocol Documentation",
    "alternateName": "ArPay Docs",
    "url": "https://docs.arpay.my.id",
    "description": "Technical documentation, smart contract API, and architecture for the ArPay Peer-to-Fiat settlement protocol.",
    "publisher": {
      "@type": "Organization",
      "name": "Arshaka Team"
    },
    // Jika nanti kamu punya fitur search di docs, ini schema-nya:
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://docs.arpay.my.id/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="selection:bg-green-500/30 selection:text-green-200 min-h-screen flex flex-col">
      {/* 3. SUNTIKAN SCHEMA KE DALAM HEAD */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(docsSchema) }}
        />
      </head>

      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050a0e]/80 backdrop-blur-md">
        <div className="flex items-center px-6 py-4 max-w-7xl mx-auto">
          <span className="font-mono text-xl font-bold text-white tracking-tighter">
            ArPay<span className="text-green-400">Docs</span>
          </span>
          <div className="ml-auto flex gap-4 text-sm font-mono">
            <a href="https://arpay.my.id" className="hover:text-green-400 transition-colors">← Main App</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-6 w-full flex-1">
        <aside className="w-full md:w-64 py-8 pr-6 md:border-r border-white/10 shrink-0 font-mono text-sm hidden md:block overflow-y-auto h-[calc(100vh-70px)] sticky top-[70px]">
          <div className="mb-6">
            <p className="text-xs text-slate-500 font-bold tracking-wider mb-3">OVERVIEW</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-slate-200">Introduction</Link></li>
              <li><Link href="/architectur" className="hover:text-slate-200">Architecture</Link></li>
              <li><Link href="/developer" className="hover:text-slate-200">Developer Quickstart</Link></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <p className="text-xs text-slate-500 font-bold tracking-wider mb-3">TECHNICAL</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/smart-contract" className="hover:text-slate-200">Smart Contract API</Link></li>
              <li><Link href="/security" className="hover:text-slate-200">Security Analysis</Link></li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 py-8 md:pl-10 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}