import "./globals.css";

export default function GlobalRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Warna background default ditaruh di sini */}
      <body className="bg-[#050a0e] text-slate-300 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}