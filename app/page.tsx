export default function Page() {
  const risks = [
    { icon: "⚠", label: "Vague payment timelines" },
    { icon: "🔒", label: "Unlimited revision clauses" },
    { icon: "📋", label: "Scope creep loopholes" },
    { icon: "⏳", label: "Net-90 payment terms" },
    { icon: "❌", label: "Kill-fee ambiguity" },
    { icon: "🔄", label: "IP ownership traps" },
  ];

  const faqs = [
    {
      q: "What types of contracts can I scan?",
      a: "Any freelance or consulting contract in PDF format — service agreements, SOWs, retainer contracts, and NDAs with payment terms."
    },
    {
      q: "How accurate is the AI analysis?",
      a: "Our model is trained on thousands of freelance contracts and flags clauses with 90%+ accuracy. Always review with a lawyer for high-value engagements."
    },
    {
      q: "Is my contract data kept private?",
      a: "Yes. Contracts are processed in memory, never stored on our servers, and never used for training. Your data stays yours."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI Contract Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Contracts for{" "}
          <span className="text-[#58a6ff]">Payment Risk Flags</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your freelance contract and get an instant AI report highlighting every clause that could delay your payment or trigger a dispute.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts required.</p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
          {risks.map((r) => (
            <div key={r.label} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 flex items-center gap-3">
              <span className="text-xl">{r.icon}</span>
              <span className="text-sm text-[#c9d1d9]">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited contract scans",
              "AI risk report with severity scores",
              "Clause-by-clause recommendations",
              "PDF export of full report",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#8b949e] mt-12">
          &copy; {new Date().getFullYear()} Contract Risk Scanner. Built for freelancers who get paid on time.
        </p>
      </section>
    </main>
  );
}
