import './globals.css';
import type { Metadata } from 'next';

// Metadata ini menggantikan tag <Head> lama
export const metadata: Metadata = {
  title: 'ArPay | Peer-to-Fiat Settlement Protocol',
  description: 'Decentralized commerce settlement protocol converting on-chain USDC to local fiat in seconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0f172a] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}