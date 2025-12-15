export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#1E1B15] border-y border-[#383329]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-bold mb-4">How PropFirmFit Works</h2>
          <p className="text-text-muted max-w-xl mx-auto">We&apos;ve simplified the process of finding the right capital partner into three data-driven steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="size-16 rounded-full bg-[#26231c] border border-primary/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl!">manage_search</span>
            </div>
            <h3 className="text-white text-xl font-bold">1. Discover</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Use our advanced filters to sort firms by leverage, trading rules, platform type, and asset class.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="size-16 rounded-full bg-[#26231c] border border-primary/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl!">compare_arrows</span>
            </div>
            <h3 className="text-white text-xl font-bold">2. Analyze</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Compare spreads, commissions, and hidden fees side-by-side. View our proprietary &quot;Fit Score&quot; for each firm.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="size-16 rounded-full bg-[#26231c] border border-primary/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">payments</span>
            </div>
            <h3 className="text-white text-xl font-bold">3. Fund</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Select your challenge, use our exclusive discount codes, and start your journey to being a funded trader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
