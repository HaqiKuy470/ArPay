import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Wajib ada kalau kamu pakai folder /app
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan ini jaga-jaga kalau pas install kamu pilih pakai folder /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;