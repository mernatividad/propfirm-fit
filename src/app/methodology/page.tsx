const MethodologyPage = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[960px] px-6 pt-20 pb-12 flex flex-col gap-6">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Transparency Report
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-light text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            The Science <br className="hidden md:block" />
            <span className="font-bold text-primary">Behind the Score.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed font-body font-light">
            We believe in radical transparency and data-driven trust. Our
            proprietary system analyzes thousands of data points to separate
            legitimate firms from marketing fluff.
          </p>
        </div>
      </section>
      {/* Core Pillars (Trust Grid) */}
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  database
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Data Integrity
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We verify spreads, slippage, and leverage directly via live API
                connections where possible. The data you see is the data you
                trade, not marketing claims.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="group p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  balance
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Unbiased Scoring
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Our scoring algorithm is automated and weight-based.
                Sponsorships and affiliate payments never influence a firm's
                rating or visibility in organic rankings.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="group p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  update
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Real-time Audits
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Market conditions change fast. Our systems ping verified firms
                daily to ensure active status, website uptime, and payout
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Scoring Algorithm Breakdown */}
      <section className="w-full max-w-[960px] px-6 py-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
            The FitScore™ Algorithm
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
            Our composite score is calculated from four primary weighted
            categories. We believe this mix provides the most accurate
            reflection of a trader's likely experience.
          </p>
          <div className="p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl font-bold text-primary">92</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">
                  Example Score
                </span>
                <span className="text-sm font-semibold text-green-500">
                  Excellent
                </span>
              </div>
            </div>
            <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-1.5 mt-2">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-4">
          {/* Accordion Item 1 */}
          <details
            className="group p-1 open:bg-surface-light dark:open:bg-surface-dark rounded-xl transition-colors duration-200"
            open=""
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  30%
                </span>
                <span className="text-lg font-medium text-slate-900 dark:text-white group-open:text-primary">
                  User Reviews &amp; Sentiment
                </span>
              </div>
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-4 pb-4 pl-16">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We aggregate reviews from Trustpilot, ForexPeaceArmy, Discord
                communities, and our own verified user base. We apply spam
                filters to remove bot reviews and incentivized 5-star ratings.
              </p>
            </div>
          </details>
          {/* Accordion Item 2 */}
          <details className="group p-1 open:bg-surface-light dark:open:bg-surface-dark rounded-xl transition-colors duration-200">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  30%
                </span>
                <span className="text-lg font-medium text-slate-900 dark:text-white group-open:text-primary">
                  Spreads &amp; Commission Costs
                </span>
              </div>
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-4 pb-4 pl-16">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Cost of trading is critical. We analyze raw spreads on majors
                (EURUSD, GBPUSD) and commission structures to ensure the "true
                cost" allows for profitability.
              </p>
            </div>
          </details>
          {/* Accordion Item 3 */}
          <details className="group p-1 open:bg-surface-light dark:open:bg-surface-dark rounded-xl transition-colors duration-200">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  20%
                </span>
                <span className="text-lg font-medium text-slate-900 dark:text-white group-open:text-primary">
                  Payout Reliability
                </span>
              </div>
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-4 pb-4 pl-16">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Firms are penalized heavily for any verified reports of denied
                payouts without rule violations. We track payout processing
                times and method availability.
              </p>
            </div>
          </details>
          {/* Accordion Item 4 */}
          <details className="group p-1 open:bg-surface-light dark:open:bg-surface-dark rounded-xl transition-colors duration-200">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  20%
                </span>
                <span className="text-lg font-medium text-slate-900 dark:text-white group-open:text-primary">
                  Rule Flexibility
                </span>
              </div>
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-4 pb-4 pl-16">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Are there hidden consistency rules? IP restrictions? News
                trading bans? We grade firms on how restrictive their
                environment is for diverse trading strategies.
              </p>
            </div>
          </details>
        </div>
      </section>
      {/* Verification Badge Section */}
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            width="100%"
          >
            <pattern
              height="10"
              id="grid"
              patternUnits="userSpaceOnUse"
              width="10"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              ></path>
            </pattern>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="max-w-[1100px] mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Abstract Card representation */}
              <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-2xl p-8 shadow-2xl max-w-sm w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-8 w-24 bg-border-light dark:bg-border-dark rounded animate-pulse"></div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold uppercase tracking-wider border border-green-500/20">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    Verified
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="h-4 w-full bg-border-light dark:bg-border-dark rounded opacity-60"></div>
                  <div className="h-4 w-3/4 bg-border-light dark:bg-border-dark rounded opacity-60"></div>
                  <div className="h-4 w-5/6 bg-border-light dark:bg-border-dark rounded opacity-60"></div>
                </div>
                <div className="pt-4 border-t border-border-light dark:border-border-dark flex justify-between text-xs text-text-muted-light dark:text-text-muted-dark">
                  <span>Last audited: 24h ago</span>
                  <span className="font-mono">ID: #8821X</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
              The "Last Verified" Standard
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              When you see the{" "}
              <span className="text-green-600 dark:text-green-500 font-semibold">
                Verified
              </span>{" "}
              badge on PropFirmFit, it means a human analyst has manually
              confirmed the firm's legal entity, address, and Trustpilot
              ownership within the last 30 days.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check_circle
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Legal Entity Check
                  </h4>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                    We verify business registration numbers against government
                    databases.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check_circle
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    CEO Identity
                  </h4>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                    Publicly doxxed leadership is prioritized. We flag anonymous
                    teams.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Affiliate Disclosure (Partner Statement) */}
      <section className="w-full max-w-[960px] px-6 py-24">
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Partner Statement
              </h2>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                How we operate
              </p>
            </div>
            <div className="md:w-2/3 space-y-4 text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              <p>
                PropFirmFit is an independent comparison platform. Our services
                are free to traders because we are supported by referral fees
                from some of the firms listed on our site.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Here is our promise:
                </strong>{" "}
                Financial relationships never influence the{" "}
                <span className="font-mono bg-border-light dark:bg-border-dark px-1 rounded text-xs">
                  FitScore™
                </span>
                . A firm cannot pay to improve their rating. If a partner firm
                performs poorly, their score drops, and we will warn our users
                regardless of our commercial relationship.
              </p>
              <p>
                This alignment ensures our incentive is to send you to the best,
                most reliable firms, not the highest bidders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MethodologyPage;
