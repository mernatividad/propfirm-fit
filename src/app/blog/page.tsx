const BlogListPage = () => {
  return (
    <main className="layout-container flex h-full grow flex-col">
      {/* Hero Section */}
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-col gap-6 text-left mb-10">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Insights &amp; Analysis
            </h1>
            <h2 className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Expert market insights, prop firm strategies, and detailed
              challenge guides for the modern funded trader.
            </h2>
          </div>
          {/* Filter Chips */}
          <div className="flex gap-3 pb-8 overflow-x-auto no-scrollbar mask-gradient">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-6 transition-transform active:scale-95">
              <p className="text-white text-sm font-bold leading-normal">All</p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-[#393428] hover:border-primary px-6 transition-colors">
              <p className="text-text-muted hover:text-white text-sm font-medium leading-normal">
                Prop Firm Guides
              </p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-[#393428] hover:border-primary px-6 transition-colors">
              <p className="text-text-muted hover:text-white text-sm font-medium leading-normal">
                Challenge Tips
              </p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-[#393428] hover:border-primary px-6 transition-colors">
              <p className="text-text-muted hover:text-white text-sm font-medium leading-normal">
                Risk Management
              </p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-[#393428] hover:border-primary px-6 transition-colors">
              <p className="text-text-muted hover:text-white text-sm font-medium leading-normal">
                News/Updates
              </p>
            </button>
          </div>
          {/* Featured Article */}
          <div className="mb-12">
            <div className="group flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden bg-surface-dark border border-[#393428] hover:border-primary/50 transition-all shadow-lg">
              <div
                className="w-full md:w-2/3 bg-center bg-no-repeat bg-cover min-h-[300px] relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWGP6NkHfJC6XFzNn8rrkDhu-un--pyBD8PUYRarn5YbdRiGFLWY6qoTqPGq2V9Jjfdqi53V2bTTnKfRh5aK3lMHj-0-YK6b_NtL53kVFUkJ4LxnpxTHGSDzIpcdlwyQ-I_X6ddIsUG-y0UFU1FjsJrJ3VOyGTveTnQJJi5zMbkJ07OFxaswS7qPu_GdMNBkBIaxFh3qjHsE-xjunGczegGK-emJAEU6CtI1tokrhqERAf0shZKavTUScta1eG0aTrbie8bwaGcMA")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Abstract stock market chart with blue and purple lines"
                ></span>
              </div>
              <div className="flex w-full md:w-1/3 flex-col justify-between p-6 md:p-8 relative">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="text-text-muted text-xs">
                      Dec 12 • 5 min read
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">
                    Top 5 Prop Firms for Scalpers in 2024
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Discover which firms offer the lowest spreads, zero
                    slippage, and fastest execution speeds specifically tailored
                    for high-frequency scalping strategies.
                  </p>
                </div>
                <div className="pt-6 mt-auto">
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Read Article
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtmkf-_wPhAfpHtB_lEoh-STul7qQaoW7DbBMTBNgiOdF3YEZTvntFSE5It8Wde0rlxUd53S-1m0hNtURDVSmxVxACJZma2l0Xsw_Zv0ozNZrP9P9jgcT6f9z_1XVh0GK4zlxJJrQqz-JzGZyM9kJ8_S0mQgJcoXggF6QJhN6gpX2B9RT06suwciJ49548YEhLJR53Htz0dwHT9ulpD5aCBsU5-ZIpbfa3THmMM9K5J0HEKDi1MK28iGi5KrEjdDYUjgCASl-Ls54")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Close up of a financial document with a pen"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Guide
                  </span>
                  <span className="text-text-muted text-xs">
                    Dec 10 • 8 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  How to Pass the FTMO Challenge
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  A comprehensive step-by-step breakdown of the evaluation
                  process, including risk limits and profit targets.
                </p>
              </div>
            </article>
            {/* Card 2 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSnA_WGVg0iF-AD3S4S-jeD5ZK4tOKNZywgmf10dN708IflqEJ-_QI18JwAMlijL59S6fjtIka3em_xlvwj-tg3RnaYe9HnFa7WTuWf-OaWVLvbCYFl7V0B8jRFDoCbJRnmBnCCeOp1Mwu1JKgbLR93sseb7ZEuixeKWdWvh1_Cf0tgKnmNRXTIRNlMcanbJAKElx-v2nxCS93kpdggh8ssiPgrZXSxZ-wMAL1pC5pEkTa5-PV9GCzvVDMSnJmmTWYZeL0gWfBSUY")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Abstract geometric dark shapes representing structure"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Education
                  </span>
                  <span className="text-text-muted text-xs">
                    Dec 08 • 6 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  Understanding Drawdown Rules
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  Daily vs. Maximum Drawdown explained. Learn how to calculate
                  your buffer and avoid blowing your account.
                </p>
              </div>
            </article>
            {/* Card 3 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgJfZo9v4OR8-Bc-WlcvAKb9-4z9RtLHHtGrTKskYTtvcazO2Uv3kcm8pLoHw27XsuEpxS7_E6FDnN5QR5yxrtCAdQUe8xZ6MyJdc2QGqHyMb6fS-2qvbKhd8gG5Kc2L2hWWRbYTsVYZ7cDOa6uB9jEX_qT9XSyZ95MeodNs6nXe1v-kupx1rZwXc3RUKhnMqmXDv-5zecabVpZfUOUhhvkktHpXbaNisyxOMOCEPMpgKenxDBTbR4r_An-ZJG46tPMZ433mHQ91k")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Magnifying glass focusing on fine print"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Analysis
                  </span>
                  <span className="text-text-muted text-xs">
                    Dec 05 • 4 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  Hidden Fees in Prop Trading
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  Don't get caught off guard. We expose the commission
                  structures and swap fees that eat into your profits.
                </p>
              </div>
            </article>
            {/* Card 4 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzSOBBgVc6qzLFkCAFdHO8fMuNyFpU6jioz_qi5l6RnsILkBVjZpW5XH45pQi9HsgFr1GXpTdcviZbiYIEkh_Oa-rry3ZOd8L3AtOCMzQy-Bi7UjT9dns29QfdL3C9JJ5sdEDRTiXRcCRXbyREGhKBlSy7Ku3ULUYztxKlXOqNa42gmanVaEmQW_CuFsG4Zjn08XFmEyozXnnjV8xvrNxulftYjyGz6aqKbg_4RQefQ_YUKoJquDfihhHKtpd3bqnuIlAGlNo8Ue4")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Stock market candlestick chart on screen"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Review
                  </span>
                  <span className="text-text-muted text-xs">
                    Dec 01 • 10 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  Review: Is MyForexFunds Viable?
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  An unbiased look at their payout history, trading conditions,
                  and user feedback in late 2024.
                </p>
              </div>
            </article>
            {/* Card 5 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHd_RZWMxJvQyu1Kym0zTxy6LQMDq8GTW-dI1BAuxDVdqb3MOEWacaO5j-1rTPZfTpbbwfhgEHJW8wgcvDxOcQ0nx2J8S8F7WvjZJ5Xn_qys9as5pd7OVrQFpIh5EG8yz-JevE7XdPyr6G43yZiPrfRzWpJTnEXanocI-1qZfIR3MzlagRWpGRR0e9SBBaxm4h3ZBehgasXD5zNO5ltfp8aJWJixCh302gMz8Fa78TQswatHYL5wqrlr0b5qPkdcFtwMikKaDw0oo")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Close up of a chess board with pieces"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Psychology
                  </span>
                  <span className="text-text-muted text-xs">
                    Nov 28 • 7 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  Risk Management 101
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  Protecting your capital is job #1. Learn the 1% rule and how
                  to position size correctly.
                </p>
              </div>
            </article>
            {/* Card 6 */}
            <article className="flex flex-col gap-4 rounded-xl border border-[#393428] bg-surface-dark p-4 hover:border-primary/50 transition-colors group">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATCTvFsVG3IJMQnA9XDczqOPicax9FQ5b3ZVi-5asEjk2C3oqMJMW6FfgHH5hakEW1LBs81VU5OoEpa9PC674ZGoDrJee0ucXsrRYBmt3e-DWz6ZOrfv4sS1i6B4waVNWInLGlWwHMK9q5AMJ_CQkMEgn329ZKjWWWRdULNpxLdE8TdZMxoWA0vcRzS30GQZjK-BEwS_MXThZLyBrUhAHvCmR-7BqwDL_BEeJ8I0s4c5nMdeCQQqK_m9UV-MEL_kyuQ3GrXMR7tvQ")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span
                  className="sr-only"
                  data-alt="Abstract blurry city lights representing fast movement"
                ></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xs font-bold uppercase">
                    Psychology
                  </span>
                  <span className="text-text-muted text-xs">
                    Nov 25 • 5 min read
                  </span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  The Psychology of Trading
                </h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed line-clamp-2">
                  Master your mind to master the markets. Strategies to overcome
                  fear and greed during challenges.
                </p>
              </div>
            </article>
          </div>
          {/* Newsletter Section */}
          <div className="w-full bg-gradient-to-r from-surface-dark to-[#302b23] rounded-2xl p-8 md:p-12 mb-20 border border-[#393428] relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 max-w-lg">
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">
                  Join the Inner Circle
                </h3>
                <p className="text-text-muted text-base">
                  Get exclusive prop firm discounts, advanced trading
                  strategies, and weekly market digests delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
                <input
                  className="bg-[#181611] border border-[#393428] text-white rounded-lg px-4 py-3 min-w-[280px] focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="bg-primary hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg whitespace-nowrap transition-colors">
                  Subscribe Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogListPage;
