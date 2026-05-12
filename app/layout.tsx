import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Risk Scanner — Spot Payment Red Flags Before You Sign",
  description: "AI-powered contract analysis for freelancers. Upload your contract and instantly identify risky payment clauses that lead to delays and disputes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0265730a-55d7-4805-81a9-fd4c3f1d4343"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
