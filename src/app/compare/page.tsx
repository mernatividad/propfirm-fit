const ComparePage = () => {
  return (
    <main className="layout-container flex h-full grow flex-col">
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
          {/* Page Heading & Meta */}
          <div className="flex flex-col gap-2 pt-8 pb-6 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Compare Firms
            </h1>
            <p className="text-text-muted text-lg font-normal leading-normal max-w-2xl">
              Analyze pricing, rules, and reputation side-by-side to find your
              edge.
            </p>
            <p className="text-text-muted/60 text-xs font-normal leading-normal pt-2">
              Advertiser Disclosure: We may receive compensation when you click
              on links to partners.
            </p>
          </div>
          {/* Action Panel */}
          <div className="py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-border-dark bg-[#27231c]/50 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="bg-border-dark/50 p-3 rounded-full hidden md:block">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-white text-base font-bold leading-tight">
                    Highlight Differences
                  </p>
                  <p className="text-text-muted text-sm font-normal leading-normal">
                    Only show metrics where firms differ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-border-dark p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
                  <div className="h-full w-[27px] rounded-full bg-white shadow-sm"></div>
                  <input className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex items-center gap-2 text-text-muted hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-border-dark transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                  Add Firm
                </button>
              </div>
            </div>
          </div>
          {/* Comparison Table Container */}
          <div className="mt-8 mb-20 overflow-x-auto pb-4 scrollbar-hide">
            {/* We use a min-width to ensure the table doesn't crush on smaller screens, although form factor requested is desktop */}
            <div className="min-w-[900px] grid grid-cols-[200px_1fr_1fr_1fr] gap-x-6 gap-y-0 pt-6">
              {/* Sticky Header Row (Empty top left cell) */}
              <div></div> {/* Spacer */}
              {/* Firm Header 1 */}
              <div className="relative flex flex-col gap-4 rounded-t-xl border-t border-x border-border-dark bg-[#27231c] p-6 pb-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-background-dark">
                    Best Overall
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">FTMO</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="text-white text-sm font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                    100k Challenge
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tight">
                      €540
                    </span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold hover:bg-[#ffb612] transition-colors">
                  Visit Partner
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </button>
              </div>
              {/* Firm Header 2 */}
              <div className="relative flex flex-col gap-4 rounded-t-xl border-t border-x border-border-dark bg-[#27231c] p-6 pb-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-background-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-background-dark">
                    Best Scaling
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">E8 Markets</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="text-white text-sm font-bold">4.7</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                    100k Challenge
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tight">
                      $458
                    </span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-border-dark text-white text-sm font-bold hover:bg-white hover:text-background-dark transition-colors">
                  Visit Partner
                </button>
              </div>
              {/* Firm Header 3 */}
              <div className="relative flex flex-col gap-4 rounded-t-xl border-t border-x border-border-dark bg-[#27231c] p-6 pb-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-background-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-background-dark">
                    Instant Funding
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">The 5%ers</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="text-white text-sm font-bold">4.8</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                    100k Bootcamp
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tight">
                      €95
                    </span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-border-dark text-white text-sm font-bold hover:bg-white hover:text-background-dark transition-colors">
                  Visit Partner
                </button>
              </div>
              {/* SECTION: Trading Rules */}
              <div className="col-span-4 flex items-center gap-4 py-6 mt-4">
                <h4 className="text-primary text-xs font-bold uppercase tracking-widest">
                  Trading Rules
                </h4>
                <div className="h-px bg-border-dark flex-1"></div>
              </div>
              {/* Row: Profit Target */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium">
                Profit Target
              </div>
              <div className="py-4 px-6 border-x border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                10% (Phase 1)
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                8% (Phase 1)
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                6% (Low Risk)
              </div>
              {/* Row: Daily Drawdown */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium border-t border-border-dark/30">
                Daily Drawdown
              </div>
              <div className="py-4 px-6 border-x border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                5% / $5,000
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                5% / $5,000
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold text-primary">
                5% (Balance Based)
              </div>
              {/* Row: Max Drawdown */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium border-t border-border-dark/30">
                Max Drawdown
              </div>
              <div className="py-4 px-6 border-x border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                10% / $10,000
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                8% (Trailing)
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                10% (Static)
              </div>
              {/* Row: Min Trading Days */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium border-t border-border-dark/30">
                Min Trading Days
              </div>
              <div className="py-4 px-6 border-x border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                4 Days
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold text-primary">
                0 Days
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold text-primary">
                0 Days
              </div>
              {/* SECTION: Payouts & Scaling */}
              <div className="col-span-4 flex items-center gap-4 py-6 mt-4">
                <h4 className="text-primary text-xs font-bold uppercase tracking-widest">
                  Payouts &amp; Scaling
                </h4>
                <div className="h-px bg-border-dark flex-1"></div>
              </div>
              {/* Row: Profit Split */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium">
                Profit Split
              </div>
              <div className="py-4 px-6 border-x border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                80% up to 90%
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                80%
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                50% up to 100%
              </div>
              {/* Row: Payout Frequency */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium border-t border-border-dark/30">
                Frequency
              </div>
              <div className="py-4 px-6 border-x border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                Bi-weekly
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold text-primary">
                On Demand
              </div>
              <div className="py-4 px-6 border-r border-b border-border-dark/50 bg-[#1e1b15] flex items-center text-white font-semibold">
                Bi-weekly
              </div>
              {/* SECTION: Platforms */}
              <div className="col-span-4 flex items-center gap-4 py-6 mt-4">
                <h4 className="text-primary text-xs font-bold uppercase tracking-widest">
                  Tech &amp; Platforms
                </h4>
                <div className="h-px bg-border-dark flex-1"></div>
              </div>
              {/* Row: Platforms */}
              <div className="py-4 pr-4 flex items-center text-text-muted text-sm font-medium">
                Platforms
              </div>
              <div className="py-4 px-6 border-x border-border-dark/50 bg-[#1e1b15] flex flex-wrap gap-2 items-center text-white font-semibold">
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  MT4
                </span>
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  MT5
                </span>
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  cTrader
                </span>
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  DXtrade
                </span>
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex flex-wrap gap-2 items-center text-white font-semibold">
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  MT5
                </span>
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  MatchTrader
                </span>
              </div>
              <div className="py-4 px-6 border-r border-border-dark/50 bg-[#1e1b15] flex flex-wrap gap-2 items-center text-white font-semibold">
                <span className="bg-border-dark px-2 py-1 rounded text-xs text-text-muted">
                  MT5
                </span>
              </div>
              {/* Bottom CTA Row */}
              <div className="pt-8"></div>
              <div className="p-6 border-x border-b border-border-dark/50 rounded-b-xl bg-[#27231c]">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-4 bg-primary text-background-dark text-base font-bold hover:bg-[#ffb612] transition-colors shadow-lg shadow-primary/10">
                  Start FTMO Challenge
                </button>
                <p className="text-center text-xs text-text-muted mt-3 underline cursor-pointer">
                  Read Full Review
                </p>
              </div>
              <div className="p-6 border-r border-b border-border-dark/50 rounded-b-xl bg-[#27231c]">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-4 bg-border-dark text-white text-base font-bold hover:bg-white hover:text-background-dark transition-colors">
                  Start E8 Challenge
                </button>
                <p className="text-center text-xs text-text-muted mt-3 underline cursor-pointer">
                  Read Full Review
                </p>
              </div>
              <div className="p-6 border-r border-b border-border-dark/50 rounded-b-xl bg-[#27231c]">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-4 bg-border-dark text-white text-base font-bold hover:bg-white hover:text-background-dark transition-colors">
                  Start 5%ers Challenge
                </button>
                <p className="text-center text-xs text-text-muted mt-3 underline cursor-pointer">
                  Read Full Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComparePage;
