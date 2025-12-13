export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-b-[#383329] bg-background-dark/95 backdrop-blur-md">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1440px]">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-2xl">candlestick_chart</span>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">PropFirmFit</h2>
            </a>
            {/* Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Finder</a>
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Compare</a>
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Reviews</a>
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Challenges</a>
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Blog</a>
              <a className="text-text-muted hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Methodology</a>
            </div>
          </div>
          {/* Right Actions */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            {/* Search Bar */}
            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#383329]/50 border border-transparent focus-within:border-primary/50 transition-colors">
                <div className="text-text-muted flex items-center justify-center pl-3 pr-1">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg bg-transparent text-white focus:outline-0 border-none h-full placeholder:text-text-muted px-2 text-sm font-normal leading-normal" placeholder="Search firms..." />
              </div>
            </label>
            {/* Sign In Button */}
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 border border-primary text-primary hover:bg-primary hover:text-[#171611] transition-all text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Sign in</span>
            </button>
            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      {/* Main Content Wrapper */}
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full relative">
          <div className="absolute inset-0 z-0 bg-cover bg-center" aria-label="Abstract dark financial chart background with golden highlights" style={{backgroundImage: 'linear-gradient(rgba(23, 22, 17, 0.85) 0%, rgba(23, 22, 17, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkQ0XOh4Gc7Xwwp24ykFYixwMoF6j9Tf2ysodMIP_ivOQFPXTI28nfu4HI8VxevLh1ZNreazomAw0XlG7oFJ6F_PSGcrUsxRUPR99MD3LJq4VhCHJugsG_N4UyqRwhBGnblRtudsHhgBrbUR_-6L-PQqPz79TKkPN5fM_nAp6PSua6scVmIuIe_24TiACCzgAB_4HSv5F0HARtV0gG3MwIljpbXlQAGJycacHjFbk68kcv2-eGe7IsIeLDEbSXfvorUhVUAASdfsk")'}}/>
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-[-0.033em] max-w-4xl mb-6">
              Precision Funding for <span className="text-primary">Professional Traders</span>.
            </h1>
            <h2 className="text-text-muted text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              Unbiased data on the world&apos;s leading proprietary trading firms. Find your edge with our premium comparison tools.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-[#171611] text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-[0_0_20px_rgba(223,166,32,0.15)]">
                <span className="truncate">Find My Fit</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 border border-[#383329] hover:border-text-muted bg-[#26231c]/50 text-white hover:bg-[#26231c] text-base font-bold leading-normal tracking-[0.015em] transition-all backdrop-blur-sm">
                <span className="truncate">Compare Firms</span>
              </button>
            </div>
          </div>
        </section>
        {/* Featured Firms Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-xl">star</span>
                <span className="text-primary text-sm font-bold tracking-wider uppercase">Premium Selection</span>
              </div>
              <h2 className="text-white text-3xl font-bold leading-tight">Featured Firms</h2>
            </div>
            <div className="text-xs text-text-muted italic max-w-md text-right">
              *Disclosure: We may earn a commission when you click links. Our reviews remain unbiased and data-driven.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="h-40 w-full bg-cover bg-center" aria-label="Abstract blue digital pattern" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzOr-ftJ_sI9NJKn_kvVjLM4ziF5TkN45JkXwIH_AFz4vF9Bu3pFwdyDcIy3KjgmcnChDU-oXAXFsoWZXK1vPSxLK5ETpoNnwpAY0U1zlpU1vcA26_XDeLipKScuNW196moMP1hc-xCaR3idpzNW-KactzAWIQbEFwoPIgSgl3sfBe95HKEXCApWtuKBrJZv8X862Ld7giOAiukcpw4ZQj69RiKdLiMnllj3OPCnC_cYWIYXmTKZBNJWldTw0oNsqeWyK4Uj6KlZs")'}}>
                <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-2xl font-bold">Apex Trader Funding</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Evaluation</p>
                    <p className="text-white font-medium">1-Step & 2-Step</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Max Funding</p>
                    <p className="text-primary font-bold text-lg">$2,000,000</p>
                  </div>
                </div>
                <div className="h-px bg-[#383329] w-full my-1"></div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-[18px] fill-1">star</span>
                    <span className="text-white text-sm font-bold">4.8</span>
                    <span className="text-text-muted text-xs ml-1">(2k+ Reviews)</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                    Visit Site <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="h-40 w-full bg-cover bg-center" aria-label="Abstract purple geometric digital art" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS6fKcr5iFMRYkv-Wc1874IDouQ9OXqb5DfpQRf3QWNYIZkdglD7nx8wKlUUlXMYwy4j640iDnJt2xxJ5m7V8oeLaA0nBU1UbzGgCmza2qEbuVB_YiL2ZOjGdN055Od817iSJrpQFHh3hof0JCmjJ-BosHLe5UL4AidWivWKRo0ldMdZyxKrwu9oaXaSfy6O8bqmni_I9qiyNdyHhpomlFqzlwfGP-gxtaVe84oK3sdUhAoJ_-qE9Bvlt9PbL0ZFoo4PPg-M5KmWw")'}}>
                <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-2xl font-bold">FTMO</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Evaluation</p>
                    <p className="text-white font-medium">2-Step Classic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Profit Split</p>
                    <p className="text-primary font-bold text-lg">Up to 90%</p>
                  </div>
                </div>
                <div className="h-px bg-[#383329] w-full my-1"></div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-[18px] fill-1">star</span>
                    <span className="text-white text-sm font-bold">4.9</span>
                    <span className="text-text-muted text-xs ml-1">(5k+ Reviews)</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                    Visit Site <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="h-40 w-full bg-cover bg-center" aria-label="Abstract gold wave pattern" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxsAW8JZc2I8m1sXb_9wWEp0IMlyvo8dqvZwa0yJPhNrf5BVY7UGkfRRrgsipdSGw55quJKet72oRvLXXpdIXIjDnkfqjcSNvVYjt56E-VEzb6Dlagj7YeuteEll9h-Af2VM1ttZK3oc_lrUBYezruxjdJf4WUIB_A9rQUMuqH9GMMl-2zfAqkPU6zhBlvn61eM2VauijcKFxu8HzkZynnIiLcE0J6xb0NOVGaXo12u0VAt7dHu-v9CZZHLC1bIwDsUm5M13ixeHU")'}}>
                <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-2xl font-bold">TopTier Trader</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Feature</p>
                    <p className="text-white font-medium">Bi-weekly Payouts</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Leverage</p>
                    <p className="text-primary font-bold text-lg">1:100</p>
                  </div>
                </div>
                <div className="h-px bg-[#383329] w-full my-1"></div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-[18px] fill-1">star</span>
                    <span className="text-white text-sm font-bold">4.7</span>
                    <span className="text-text-muted text-xs ml-1">(1k+ Reviews)</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                    Visit Site <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
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
                  <span className="material-symbols-outlined text-primary text-3xl">manage_search</span>
                </div>
                <h3 className="text-white text-xl font-bold">1. Discover</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Use our advanced filters to sort firms by leverage, trading rules, platform type, and asset class.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="size-16 rounded-full bg-[#26231c] border border-primary/20 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">compare_arrows</span>
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
        {/* Trust / Methodology */}
        <section className="w-full max-w-[960px] mx-auto px-4 md:px-10 py-24 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-text-muted text-5xl opacity-50">verified_user</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Data You Can Trust.</h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Our methodology tracks 50+ data points per firm. We don&apos;t accept payments for higher rankings. Our database is updated weekly to ensure you have the precision intelligence needed to make professional career decisions.
            </p>
            <a className="text-primary hover:text-white font-bold underline decoration-primary/50 underline-offset-4 transition-colors" href="#">Read our full methodology</a>
          </div>
        </section>
        {/* Content Grid (Reviews & Blog) */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Reviews */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-2xl font-bold">Latest Reviews</h3>
                <a className="text-sm text-primary hover:text-white transition-colors" href="#">View All</a>
              </div>
              {/* Review Item 1 */}
              <div className="bg-surface-dark p-5 rounded-lg border border-[#383329] hover:border-primary/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white">Alpha Capital Group</span>
                  <span className="text-xs text-text-muted">2 days ago</span>
                </div>
                <p className="text-text-muted text-sm mb-3 line-clamp-2">&quot;Great dashboard and execution. The spreads on gold are some of the best I&apos;ve seen in the industry.&quot;</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                </div>
              </div>
              {/* Review Item 2 */}
              <div className="bg-surface-dark p-5 rounded-lg border border-[#383329] hover:border-primary/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white">Blue Guardian</span>
                  <span className="text-xs text-text-muted">5 days ago</span>
                </div>
                <p className="text-text-muted text-sm mb-3 line-clamp-2">&quot;Very fast payout processing. The customer support team resolved my issue within minutes.&quot;</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="material-symbols-outlined text-[16px]">star_half</span>
                </div>
              </div>
            </div>
            {/* Latest Blog Posts */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-2xl font-bold">Market Insights</h3>
                <a className="text-sm text-primary hover:text-white transition-colors" href="#">View Blog</a>
              </div>
              {/* Blog Item 1 */}
              <a className="group flex gap-4 items-start" href="#">
                <div className="w-24 h-24 shrink-0 rounded-lg bg-cover bg-center" aria-label="Close up of stock chart on monitor" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxrdhbfWgEZqrzcA4u6F5Oj1GuAu7VCPf83SVkuk_AuMUX8jm3nsNM2QTYG7GiX63lEoUdcjmDQ4IL2lngXUViKMMfmBnHArZy0lOcSohOpNxDXo_NGwyl9B_b477nkpeCsGJ6Lt40ueiD9G2NcI-Z_BNNjfKi6gPFttfuyhrnZcm-l4Sk1WjhQvl4dM6aqjzUUll4nsnc6WJOnvTSNpwrFiyJ_kIm9hpIO1FbcukVx7XIOcbq98JfbJPEZx2e4S11Gg8nGAxauOE")'}}></div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">Education</span>
                  <h4 className="text-white font-bold group-hover:text-primary transition-colors">Understanding Drawdown Rules: Relative vs Absolute</h4>
                  <p className="text-text-muted text-sm line-clamp-2 mt-1">Don&apos;t lose your account because you misunderstood the rules. We break down the key differences.</p>
                </div>
              </a>
              {/* Blog Item 2 */}
              <a className="group flex gap-4 items-start" href="#">
                <div className="w-24 h-24 shrink-0 rounded-lg bg-cover bg-center" aria-label="Office desk with calculator and pen" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1zKeW-0krXlMYA447F9NiQt9pDsEpcoSPBMr03nusrWxIIItAbL6cTmeecRfRDZEyqg6o-0BcSgd_ZsgSY58y71PpGq_PAi4q04Z3yrhYSp0YUBFpP8K-xNIaHpaxgMaeJsvOUwRjpbCrsphL93CvHNwFm4yh1KQCGBQW7P2XMPLVCS9OtM5BQRUezbO5yopp90TQjqORAtszFVerk58I8etKz5L357qFj1NFInLu4geYw4TUgOJJFzNATDa62vDG6BnlQ1mVRE")'}}></div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">Industry News</span>
                  <h4 className="text-white font-bold group-hover:text-primary transition-colors">Top 5 Prop Firms for Scalpers in 2024</h4>
                  <p className="text-text-muted text-sm line-clamp-2 mt-1">Low spreads and zero commissions are vital for scalping strategies. Here are the best options.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Newsletter */}
        <section className="w-full bg-primary/5 border-y border-primary/10">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-20 flex flex-col items-center text-center">
            <h2 className="text-white text-2xl font-bold mb-2">Join the Inner Circle</h2>
            <p className="text-text-muted mb-8">Get exclusive discounts, new firm alerts, and trading tips delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input className="flex-1 bg-background-dark border border-[#383329] text-white rounded-lg px-4 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-text-muted outline-none" placeholder="Enter your email address" required type="email" />
              <button className="h-12 px-6 bg-primary hover:bg-primary-hover text-[#171611] font-bold rounded-lg transition-colors" type="submit">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-text-muted mt-4 opacity-60">No spam. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-background-dark border-t border-[#383329] pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">candlestick_chart</span>
                <span className="text-white text-lg font-bold">PropFirmFit</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                The premier destination for professional traders seeking capital. We provide unbiased data and tools to help you succeed.
              </p>
              <div className="flex gap-4">
                <a className="text-text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <a className="text-text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
            {/* Links Column 1 */}
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Finder</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Compare Firms</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Challenges</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Methodology</a></li>
              </ul>
            </div>
            {/* Links Column 2 */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Blog</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Firm Reviews</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Discount Codes</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Trading Tools</a></li>
              </ul>
            </div>
            {/* Links Column 3 */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Affiliate Disclosure</a></li>
                <li><a className="text-text-muted hover:text-primary text-sm transition-colors" href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#383329] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-xs">© 2024 PropFirmFit. All rights reserved.</p>
            <p className="text-text-muted text-xs max-w-lg text-center md:text-right opacity-60">
              Disclaimer: Trading in financial markets involves a high degree of risk and may not be suitable for all investors. PropFirmFit does not provide financial advice. We may receive compensation from the companies featured on this site.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
