const FinderPage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex-grow layout-container flex flex-col max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Find Your Perfect Prop Firm
            </h1>
            <p className="text-text-muted max-w-2xl">
              Compare top proprietary trading firms based on our rigorous
              50-point methodology. Filter by account size, trading style, and
              funding model.
            </p>
          </div>
          {/* Trust Signal */}
          <div className="flex items-center gap-2 text-xs text-text-muted bg-surface-dark px-3 py-1.5 rounded-full border border-border-dark self-start md:self-auto">
            <span className="material-symbols-outlined text-green-500 text-sm">
              check_circle
            </span>
            Data updated: Oct 24, 2023
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start relative">
          {/* Left Sidebar Filters */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Filters</h3>
              <button className="text-primary text-sm font-medium hover:text-primary/80">
                Clear All
              </button>
            </div>
            {/* Account Size Slider */}
            <div className="flex flex-col gap-3 p-4 rounded-xl border border-border-dark bg-surface-dark/50">
              <p className="text-white text-sm font-medium">Account Size</p>
              <div className="relative h-10 pt-4">
                <div className="h-1 w-full bg-border-dark rounded-full relative">
                  {/* Active Range */}
                  <div className="absolute left-[10%] right-[30%] h-full bg-primary rounded-full"></div>
                  {/* Knobs */}
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-text-muted">
                  <span>$5k</span>
                  <span>$1M+</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-white mt-1">
                <span className="bg-background-dark px-2 py-1 rounded border border-border-dark">
                  $10,000
                </span>
                <span className="text-text-muted">-</span>
                <span className="bg-background-dark px-2 py-1 rounded border border-border-dark">
                  $200,000
                </span>
              </div>
            </div>
            {/* Fee Range Slider */}
            <div className="flex flex-col gap-3 p-4 rounded-xl border border-border-dark bg-surface-dark/50">
              <p className="text-white text-sm font-medium">Fee Range</p>
              <div className="relative h-6 pt-2">
                <div className="h-1 w-full bg-border-dark rounded-full relative">
                  <div className="absolute left-[0%] right-[50%] h-full bg-primary rounded-full"></div>
                  <div className="absolute right-[50%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer"></div>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-white mt-1">
                <span className="bg-background-dark px-2 py-1 rounded border border-border-dark">
                  $0
                </span>
                <span className="bg-background-dark px-2 py-1 rounded border border-border-dark">
                  $500
                </span>
              </div>
            </div>
            {/* Accordion Filters */}
            <div className="flex flex-col gap-3">
              {/* Platform */}
              <details
                className="group rounded-lg border border-border-dark bg-surface-dark/30 overflow-hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-surface-dark transition-colors select-none">
                  <span className="text-white text-sm font-medium">
                    Platform
                  </span>
                  <span className="material-symbols-outlined text-text-muted group-open:rotate-180 transition-transform text-lg">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer group/item">
                    <div className="relative flex items-center">
                      <input
                        defaultChecked
                        className="peer h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary"
                        type="checkbox"
                      />
                    </div>
                    <span className="text-sm text-text-muted peer-checked:text-white group-hover/item:text-white transition-colors">
                      MetaTrader 4
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group/item">
                    <div className="relative flex items-center">
                      <input
                        className="peer h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary"
                        type="checkbox"
                      />
                    </div>
                    <span className="text-sm text-text-muted peer-checked:text-white group-hover/item:text-white transition-colors">
                      MetaTrader 5
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group/item">
                    <div className="relative flex items-center">
                      <input
                        className="peer h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary"
                        type="checkbox"
                      />
                    </div>
                    <span className="text-sm text-text-muted peer-checked:text-white group-hover/item:text-white transition-colors">
                      cTrader
                    </span>
                  </label>
                </div>
              </details>
              {/* Evaluation Type */}
              <details className="group rounded-lg border border-border-dark bg-surface-dark/30 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-surface-dark transition-colors select-none">
                  <span className="text-white text-sm font-medium">
                    Evaluation Type
                  </span>
                  <span className="material-symbols-outlined text-text-muted group-open:rotate-180 transition-transform text-lg">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      1-Step
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      2-Step
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      Instant Funding
                    </span>
                  </label>
                </div>
              </details>
              {/* Trading Style */}
              <details className="group rounded-lg border border-border-dark bg-surface-dark/30 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-surface-dark transition-colors select-none">
                  <span className="text-white text-sm font-medium">
                    Trading Style
                  </span>
                  <span className="material-symbols-outlined text-text-muted group-open:rotate-180 transition-transform text-lg">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      News Trading
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      Weekend Holding
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-text-muted hover:text-white">
                      Scalping
                    </span>
                  </label>
                </div>
              </details>
            </div>
          </aside>
          {/* Right Results Area */}
          <div className="flex flex-col gap-6">
            {/* Controls / Active Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-dark/30 p-4 rounded-xl border border-border-dark">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold">24 Results</span>
                <div className="h-4 w-px bg-border-dark"></div>
                <div className="hidden sm:flex gap-2">
                  <span className="px-2 py-1 rounded bg-surface-dark border border-border-dark text-xs text-text-muted flex items-center gap-1 group cursor-pointer hover:border-primary hover:text-white transition-colors">
                    MT4{" "}
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-dark border border-border-dark text-xs text-text-muted flex items-center gap-1 group cursor-pointer hover:border-primary hover:text-white transition-colors">
                    $10k - $200k{" "}
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface-dark border border-border-dark text-text-muted text-sm hover:text-white">
                  <span className="material-symbols-outlined text-lg">
                    filter_list
                  </span>{" "}
                  Filters
                </button>
                <div className="relative flex items-center gap-2">
                  <span className="text-text-muted text-sm hidden sm:inline">
                    Sort by:
                  </span>
                  <select className="bg-surface-dark border-border-dark text-white text-sm rounded-lg focus:ring-0 focus:border-primary pl-3 pr-8 py-2 cursor-pointer">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
                <div className="flex bg-surface-dark rounded-lg p-1 border border-border-dark">
                  <button className="p-1.5 rounded bg-background-dark text-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl">
                      grid_view
                    </span>
                  </button>
                  <button className="p-1.5 rounded hover:bg-background-dark/50 text-text-muted hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      view_list
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Card 1 */}
              <article className="group relative flex flex-col bg-[#1e1c16] rounded-xl border border-border-dark hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                {/* Best For Badge */}
                <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-primary/20 uppercase tracking-wider">
                  Best for Scaling
                </div>
                <div className="p-5 flex flex-col gap-4 flex-1">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                        {/* Replaced with a generic logo visual as requested */}
                        <div
                          className="w-full h-full bg-gradient-to-tr from-blue-900 to-black rounded flex items-center justify-center text-[10px] font-bold text-white tracking-tighter"
                          data-alt="Blue and black gradient logo with generic text"
                        >
                          FTMO
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none group-hover:text-primary transition-colors">
                          FTMO
                        </h3>
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="flex text-primary text-xs">
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star_half
                            </span>
                          </div>
                          <span className="text-text-muted text-xs font-medium ml-1">
                            4.8 (2k+)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <label className="flex items-center gap-2 cursor-pointer group/compare">
                        <input
                          className="h-4 w-4 rounded border-border-dark bg-transparent text-primary focus:ring-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="text-xs text-text-muted group-hover/compare:text-white transition-colors">
                          Compare
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-border-dark/50" />
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Profit Split
                      </p>
                      <p className="text-white font-bold font-mono">
                        Up to 90%
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Leverage
                      </p>
                      <p className="text-white font-bold font-mono">1:100</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Price (100k)
                      </p>
                      <p className="text-white font-bold font-mono">€540</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Target
                      </p>
                      <p className="text-white font-bold font-mono">10% / 5%</p>
                    </div>
                  </div>
                  {/* Pros List */}
                  <div className="bg-surface-dark/30 rounded-lg p-3 mt-1">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        Free Repeat on profits
                      </li>
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        Bi-weekly payouts
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Card Footer */}
                <div className="p-4 pt-0 mt-auto flex flex-col gap-3">
                  <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2">
                    Visit Partner{" "}
                    <span className="material-symbols-outlined text-lg">
                      arrow_outward
                    </span>
                  </button>
                  <a
                    className="w-full text-center text-xs font-medium text-text-muted hover:text-white transition-colors flex items-center justify-center gap-1 group/link"
                    href="#"
                  >
                    Read Full Review{" "}
                    <span className="material-symbols-outlined text-[12px] group-hover/link:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
              {/* Card 2 */}
              <article className="group relative flex flex-col bg-[#1e1c16] rounded-xl border border-border-dark hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                {/* Best For Badge */}
                <div className="absolute top-0 right-0 bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-white/10 uppercase tracking-wider">
                  Instant Funding
                </div>
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                        <div
                          className="w-full h-full bg-black flex items-center justify-center text-[10px] font-bold text-white tracking-tighter"
                          data-alt="Black logo with text '5%'"
                        >
                          5%
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none group-hover:text-primary transition-colors">
                          The 5%ers
                        </h3>
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="flex text-primary text-xs">
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-text-muted">
                              star
                            </span>
                          </div>
                          <span className="text-text-muted text-xs font-medium ml-1">
                            4.2 (850)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <label className="flex items-center gap-2 cursor-pointer group/compare">
                        <input
                          className="h-4 w-4 rounded border-border-dark bg-transparent text-primary focus:ring-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="text-xs text-text-muted group-hover/compare:text-white transition-colors">
                          Compare
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-border-dark/50" />
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Profit Split
                      </p>
                      <p className="text-white font-bold font-mono">
                        50% - 100%
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Leverage
                      </p>
                      <p className="text-white font-bold font-mono">1:30</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Price (100k)
                      </p>
                      <p className="text-white font-bold font-mono">€260</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Target
                      </p>
                      <p className="text-white font-bold font-mono">6% / 0%</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark/30 rounded-lg p-3 mt-1">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        Instant funding option
                      </li>
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-red-400 text-[14px] mt-0.5">
                          close
                        </span>
                        Lower leverage
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 pt-0 mt-auto flex flex-col gap-3">
                  <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2">
                    Visit Partner{" "}
                    <span className="material-symbols-outlined text-lg">
                      arrow_outward
                    </span>
                  </button>
                  <a
                    className="w-full text-center text-xs font-medium text-text-muted hover:text-white transition-colors flex items-center justify-center gap-1 group/link"
                    href="#"
                  >
                    Read Full Review{" "}
                    <span className="material-symbols-outlined text-[12px] group-hover/link:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
              {/* Card 3 */}
              <article className="group relative flex flex-col bg-[#1e1c16] rounded-xl border border-border-dark hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                        <div
                          className="w-full h-full bg-purple-900 flex items-center justify-center text-[10px] font-bold text-white tracking-tighter"
                          data-alt="Purple background logo with text 'FN'"
                        >
                          FN
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none group-hover:text-primary transition-colors">
                          FundedNext
                        </h3>
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="flex text-primary text-xs">
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                          </div>
                          <span className="text-text-muted text-xs font-medium ml-1">
                            4.9 (5k+)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <label className="flex items-center gap-2 cursor-pointer group/compare">
                        <input
                          className="h-4 w-4 rounded border-border-dark bg-transparent text-primary focus:ring-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="text-xs text-text-muted group-hover/compare:text-white transition-colors">
                          Compare
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-border-dark/50" />
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Profit Split
                      </p>
                      <p className="text-white font-bold font-mono">
                        Up to 95%
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Leverage
                      </p>
                      <p className="text-white font-bold font-mono">1:100</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Price (100k)
                      </p>
                      <p className="text-white font-bold font-mono">$549</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Target
                      </p>
                      <p className="text-white font-bold font-mono">8% / 5%</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark/30 rounded-lg p-3 mt-1">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        Profit Share in Evaluation
                      </li>
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        No time limit
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 pt-0 mt-auto flex flex-col gap-3">
                  <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2">
                    Visit Partner{" "}
                    <span className="material-symbols-outlined text-lg">
                      arrow_outward
                    </span>
                  </button>
                  <a
                    className="w-full text-center text-xs font-medium text-text-muted hover:text-white transition-colors flex items-center justify-center gap-1 group/link"
                    href="#"
                  >
                    Read Full Review{" "}
                    <span className="material-symbols-outlined text-[12px] group-hover/link:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
              {/* Card 4 */}
              <article className="group relative flex flex-col bg-[#1e1c16] rounded-xl border border-border-dark hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                        <div
                          className="w-full h-full bg-cyan-600 flex items-center justify-center text-[10px] font-bold text-white tracking-tighter"
                          data-alt="Cyan background logo with text 'E8'"
                        >
                          E8
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none group-hover:text-primary transition-colors">
                          E8 Markets
                        </h3>
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="flex text-primary text-xs">
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] fill-current">
                              star
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-text-muted">
                              star
                            </span>
                          </div>
                          <span className="text-text-muted text-xs font-medium ml-1">
                            4.5 (1.2k)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <label className="flex items-center gap-2 cursor-pointer group/compare">
                        <input
                          className="h-4 w-4 rounded border-border-dark bg-transparent text-primary focus:ring-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="text-xs text-text-muted group-hover/compare:text-white transition-colors">
                          Compare
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-border-dark/50" />
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Profit Split
                      </p>
                      <p className="text-white font-bold font-mono">80%</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Leverage
                      </p>
                      <p className="text-white font-bold font-mono">1:50</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Price (100k)
                      </p>
                      <p className="text-white font-bold font-mono">$488</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        Target
                      </p>
                      <p className="text-white font-bold font-mono">8% / 5%</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark/30 rounded-lg p-3 mt-1">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        Customizable Drawdown
                      </li>
                      <li className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">
                          check
                        </span>
                        User-friendly Dashboard
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 pt-0 mt-auto flex flex-col gap-3">
                  <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2">
                    Visit Partner{" "}
                    <span className="material-symbols-outlined text-lg">
                      arrow_outward
                    </span>
                  </button>
                  <a
                    className="w-full text-center text-xs font-medium text-text-muted hover:text-white transition-colors flex items-center justify-center gap-1 group/link"
                    href="#"
                  >
                    Read Full Review{" "}
                    <span className="material-symbols-outlined text-[12px] group-hover/link:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
            </div>
            {/* Load More */}
            <div className="flex justify-center mt-6">
              <button className="px-6 py-3 rounded-lg border border-border-dark bg-surface-dark text-white font-medium hover:bg-surface-dark/80 transition-colors">
                Load More Firms
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Sticky Compare Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none px-4 pb-4">
        <div className="max-w-xl mx-auto bg-[#1e1c16] border border-border-dark shadow-2xl rounded-xl p-3 flex items-center justify-between gap-4 pointer-events-auto transform translate-y-24 animate-[slideUp_0.5s_ease-out_forwards]">
          {/* slideUp keyframes moved to globals.css for server compatibility */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <div
                className="size-10 rounded-full border-2 border-surface-dark bg-white overflow-hidden"
                title="FTMO"
              >
                <div className="w-full h-full bg-gradient-to-tr from-blue-900 to-black"></div>
              </div>
              <div className="size-10 rounded-full border-2 border-surface-dark bg-surface-dark flex items-center justify-center text-text-muted text-xs font-medium">
                +
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-bold">1 Firm Selected</p>
              <p className="text-text-muted text-xs">
                Select up to 3 to compare
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-text-muted hover:text-white p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
            <button className="bg-white text-background-dark font-bold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Compare
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinderPage;
