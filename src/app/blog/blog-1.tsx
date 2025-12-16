const BlogPage = () => {
  return (
    <main className="relative flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-6 lg:px-10 py-10 lg:py-14">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-8 items-center text-sm">
          <a
            className="text-text-muted hover:text-primary transition-colors"
            href="#"
          >
            Home
          </a>
          <span className="text-text-muted/50 material-symbols-outlined !text-[14px]">
            chevron_right
          </span>
          <a
            className="text-text-muted hover:text-primary transition-colors"
            href="#"
          >
            Blog
          </a>
          <span className="text-text-muted/50 material-symbols-outlined !text-[14px]">
            chevron_right
          </span>
          <a
            className="text-text-muted hover:text-primary transition-colors"
            href="#"
          >
            Education
          </a>
          <span className="text-text-muted/50 material-symbols-outlined !text-[14px]">
            chevron_right
          </span>
          <span className="text-white">Pass Your Challenge</span>
        </div>
        {/* Title Area */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
            How to Pass Your First Prop Firm Challenge
            <span className="block w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></span>
          </h1>
          <p className="text-text-muted text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Master the psychology, risk management, and technical skills needed
            to get funded without blowing your account in the first week.
          </p>
          {/* Meta */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-text-muted mt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center overflow-hidden">
                <img
                  alt="Alexander G."
                  className="w-full h-full object-cover"
                  data-alt="Portrait of Alexander G."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGBERTkIFpBMJKcfpdQRp1-FeOX2zsjjHQ84W1ApQxOVth-ysITfx8DD-RUE3ljuC0MA_YX8eBNEZ37lOfo3JLGnwkP_CTcSDompuqvTxIHMepgkNS1DAmZlCh08xzY119UDNLzSu0_9ggdAAKyWZ6lUiv-WEMsz-NKRJ3XBZa-OO89jmk9Kn6zA8Y-opuK5hHfTjlIdLa0HxwWg8ZchuR6kJJJCsBFz4lLwYygo8ebExuo2XPX8pn7ZPlyqxenvcb1CFrWyDcYc"
                />
              </div>
              <span className="text-white font-medium">Alexander G.</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-text-muted/50"></span>
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-text-muted/50"></span>
            <span>Updated Oct 24, 2023</span>
          </div>
          <p className="text-text-muted/60 text-xs mt-1">
            Affiliate Disclosure: This post contains affiliate links. We may
            earn a commission if you click.
          </p>
        </div>
        {/* Featured Image */}
        <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 relative group shadow-2xl shadow-black/50 border border-border-dark/50">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
          <img
            alt="Trading charts on multiple monitors in a dark room"
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            data-alt="Abstract financial charts glowing gold on dark screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJE6hl0rslO7c4dogU8dbKL5TwP1fQ9maagtPWAdQfyOb_QFC1I38hKBKNfjDxQVpwOdKFZpnRNViuCSn9X-72fHWvm19BNfO7mrFRlQNwLgEc3CKQl0l8-8jObIDYmt_1QsduGv-sfqzXEKKuSf6_ypIRGJZRTHpiL1deltaq_wgSdecRssOVcmsNPdq5PdJzUqna6AGF9n32isFWkzryuzFMyrGqM8jVy_s8Bg8WS3bl6aZ4jmcNvtQvcM0AGUOWsazM-6TGjY"
          />
        </div>
      </section>
      {/* Content Wrapper with Sticky Sidebar */}
      <div className="w-full max-w-[1200px] px-6 lg:px-10 flex gap-12 pb-20 relative">
        {/* Left Sticky Sidebar: TOC */}
        <aside className="hidden xl:block w-64 shrink-0 relative">
          <div className="sticky top-32 flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-l border-border-dark pl-4 py-2">
              <span className="text-text-muted uppercase text-xs font-bold tracking-widest mb-2">
                Contents
              </span>
              <a
                className="text-primary font-medium text-sm py-1 block"
                href="#understanding-rules"
              >
                Understanding the Rules
              </a>
              <a
                className="text-text-muted hover:text-white transition-colors text-sm py-1 block"
                href="#risk-management"
              >
                The Risk Management Plan
              </a>
              <a
                className="text-text-muted hover:text-white transition-colors text-sm py-1 block"
                href="#psychology"
              >
                Psychology of Funding
              </a>
              <a
                className="text-text-muted hover:text-white transition-colors text-sm py-1 block"
                href="#choosing-firm"
              >
                Choosing the Right Firm
              </a>
            </div>
            {/* Mini CTA */}
            <div className="p-4 rounded-lg bg-surface-dark border border-border-dark flex flex-col gap-3">
              <p className="text-white text-sm font-bold">Need a firm?</p>
              <p className="text-text-muted text-xs">
                Find the best challenge for your trading style.
              </p>
              <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white text-xs font-bold transition-colors">
                Launch Finder
              </button>
            </div>
          </div>
        </aside>
        {/* Main Content Column */}
        <article className="prose prose-invert prose-lg max-w-[720px] mx-auto xl:mx-0 w-full text-text-muted/90">
          <p className="lead text-white text-xl">
            Passing a prop firm challenge is less about hitting home runs and
            more about not striking out. The biggest mistake new traders make is
            treating the evaluation phase like a sprint rather than a precision
            test.
          </p>
          <h2 className="text-white scroll-mt-24" id="understanding-rules">
            Understanding the Rules First
          </h2>
          <p>
            Before you place a single trade, you must deeply understand the
            constraints. Most firms are not looking for the highest returns;
            they are looking for risk managers. The{" "}
            <strong>Drawdown limit</strong> is your only boss.
          </p>
          <p>Here is a quick breakdown of common terms you need to master:</p>
          <ul className="marker:text-primary">
            <li>
              <strong>Daily Drawdown:</strong> The maximum you can lose in a
              single trading day (often based on equity, not balance).
            </li>
            <li>
              <strong>Max Drawdown:</strong> The total amount you can lose from
              your initial balance before failing.
            </li>
            <li>
              <strong>Profit Target:</strong> Usually 8-10% for Phase 1 and 5%
              for Phase 2.
            </li>
          </ul>
          {/* Inline Pro Tip CTA */}
          <div className="my-10 p-6 bg-surface-dark border-l-4 border-primary rounded-r-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-[100px]">
                lightbulb
              </span>
            </div>
            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              Pro Tip
            </h4>
            <p className="text-sm text-text-muted mb-0">
              Don't just guess which firm has the best rules. Use our comparison
              tool to filter by "No Time Limit" or "lowest spreads."
              <a
                className="text-primary underline ml-1 hover:text-white transition-colors"
                href="#"
              >
                Compare Firms Now →
              </a>
            </p>
          </div>
          <h2 className="text-white scroll-mt-24" id="risk-management">
            The Risk Management Plan
          </h2>
          <p>
            To pass, you need math on your side. If your max drawdown is 10%,
            you should not be risking 2% per trade. A losing streak of 5 trades
            would wipe you out.
          </p>
          <p>
            Instead, aim for <strong>0.5% to 1% risk per trade</strong>. This
            gives you a buffer of 10-20 consecutive losses, which is highly
            unlikely if you have a tested strategy.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-white font-serif bg-surface-dark/30 rounded-r-lg">
            "Amateurs think about how much they can make. Professionals think
            about how much they can lose."
          </blockquote>
          <h2 className="text-white scroll-mt-24" id="psychology">
            Psychology of Funding
          </h2>
          <p>
            The pressure of a "Challenge" changes your psychology. You feel the
            need to trade more often to hit the target. This leads to
            overtrading.
          </p>
          <p>
            Slow down. Most challenges now have no time limits. Take only A+
            setups. If you force trades, the market will humble you quickly.
          </p>
          <h2 className="text-white scroll-mt-24" id="choosing-firm">
            Choosing the Right Firm
          </h2>
          <p>
            Not all firms are created equal. Some have hidden rules about news
            trading or holding over the weekend. Here is a quick comparison of
            two top-tier options:
          </p>
          {/* Comparison Table */}
          <div className="overflow-x-auto my-8 border border-border-dark rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-dark text-white uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b border-border-dark">Feature</th>
                  <th className="p-4 border-b border-border-dark text-primary">
                    FTMO
                  </th>
                  <th className="p-4 border-b border-border-dark">
                    FundedNext
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark bg-background-dark">
                <tr>
                  <td className="p-4 font-medium text-white">
                    Profit Target (Phase 1)
                  </td>
                  <td className="p-4 text-text-muted">10%</td>
                  <td className="p-4 text-text-muted">8%</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Time Limit</td>
                  <td className="p-4 text-text-muted">Unlimited</td>
                  <td className="p-4 text-text-muted">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">News Trading</td>
                  <td className="p-4 text-text-muted">Allowed (Swing)</td>
                  <td className="p-4 text-text-muted">Allowed</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Scaling Plan</td>
                  <td className="p-4 text-text-muted">25% every 4 mo</td>
                  <td className="p-4 text-text-muted">40% every 4 mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Select the firm that aligns with your specific trading style. If you
            are a scalper, look for low spreads. If you swing trade, ensure
            weekend holding is permitted.
          </p>
          {/* Bottom Major CTA Card */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-surface-dark border border-primary/30 text-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary mb-2">
                savings
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white m-0">
                Find a challenge that fits you
              </h3>
              <p className="text-text-muted max-w-md mx-auto mb-4">
                Stop wasting money on challenges that don't match your style.
                Use our smart finder to match with your perfect prop firm in
                seconds.
              </p>
              <button className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-base transition-transform active:scale-95 shadow-lg shadow-primary/20">
                Launch Challenge Finder
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </article>
        {/* Right Sidebar: Share & Social (Hidden on mobile) */}
        <aside className="hidden 2xl:block w-20 shrink-0 relative">
          <div className="sticky top-32 flex flex-col gap-4 items-center">
            <span className="text-text-muted uppercase text-[10px] font-bold tracking-widest writing-vertical-lr">
              Share
            </span>
            <button className="w-10 h-10 rounded-full bg-surface-dark hover:bg-primary text-text-muted hover:text-white border border-border-dark flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-dark hover:bg-blue-600 text-text-muted hover:text-white border border-border-dark flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-dark hover:bg-blue-800 text-text-muted hover:text-white border border-border-dark flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </button>
          </div>
        </aside>
      </div>
      {/* Related Posts Section */}
      <section className="w-full bg-surface-dark py-16 px-6 lg:px-10 border-t border-border-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Related Articles</h3>
            <a
              className="text-primary text-sm font-medium hover:text-white transition-colors"
              href="#"
            >
              View all posts
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post Card 1 */}
            <a className="group flex flex-col gap-4" href="#">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-background-dark border border-border-dark relative">
                <img
                  alt="Abstract gold waves on dark background"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  data-alt="Abstract gold waves chart"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg_q9ppZQjiwSZ1q33KIlTyCIiqEpdkqEU2cgDA_Owxyc59jsU6cTqfTxSgLNOxB5PNRbwFBcuborS86qH0XKUbizSfgy-pa761tQGkEpfqK0If5hZXBdmTQdG3seEzQ-RFvnGQn5j5A36EpdB03pPgBDjtPJjQKdDAOfJdMNn7P4V3iNoN90rkFgcSIYjtI2Q9KLf4Xrjl9zbxJETh8-O93EezYvqQT1mIP1goPp6otLbVfKu5Bj3QM9AUSDxLAydMlnJl9Jhizs"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold uppercase tracking-wider">
                  Education
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                  Top 5 Prop Firms for Forex Traders in 2024
                </h4>
                <p className="text-text-muted text-sm line-clamp-2">
                  We reviewed the spreads, commissions, and payout speeds of the
                  biggest names in the industry.
                </p>
                <span className="text-xs text-text-muted/60">
                  Oct 12 • 4 min read
                </span>
              </div>
            </a>
            {/* Post Card 2 */}
            <a className="group flex flex-col gap-4" href="#">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-background-dark border border-border-dark relative">
                <img
                  alt="Close up of stock market candlestick chart"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  data-alt="Stock market candlestick chart red and green"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAU0CJ4oBsxq03jSQjnyI5cHNjx8VmmS8-NY0_YO4dsjFcdo4Izr_Teba6Kp5EIrc9PYVNB3HAOcMNQCcZaIPJOafA7D5bHVBuasHl8mbjCjlrO1zLmuCd987fbKsxgsfe81wHwJkyCmURGBOIL-WVWjwYQVp_XWzApj9PxkXgu0MmFlwG3H3Jie2ssaCN9VrnKT2IBSyGLu1_5kjdJ2P4lU0fd9Hvx-ISJjOrRGyLt8rdisQNMujlr_EL0uuMC27m3O-FoBNuczs"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold uppercase tracking-wider">
                  Psychology
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                  Why You Keep Failing Phase 2 (And How to Fix It)
                </h4>
                <p className="text-text-muted text-sm line-clamp-2">
                  The psychology of trading with 'house money' is dangerous.
                  Learn to protect your profits.
                </p>
                <span className="text-xs text-text-muted/60">
                  Sep 28 • 6 min read
                </span>
              </div>
            </a>
            {/* Post Card 3 */}
            <a className="group flex flex-col gap-4" href="#">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-background-dark border border-border-dark relative">
                <img
                  alt="Gold coins stacked on a dark surface"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  data-alt="Gold coins stacked on dark surface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9sSdRZUzxpOT3kgskF4FOpakHenEIkg04Nx_KfWqopoJzbwyFUiO5XUKP1G4-cES4oDOcVeByaEYITK2bw0-_95kDTpkW8nhVEFwVbQb7P1yIFChUlIPh8RLdSbF0aQkv3StjXTYSsFfg9C9_UO3h42vdwhNCTzsA7z7c6B6RmLHPZhJBxHwjNnB8rBIU53LfQF-1PSJBDK08JTYCqSzW2SwdirKJHnS_4mechY_pf9vwymvD0TfUfSDt4d0fABvkQpA4DhoCNVc"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold uppercase tracking-wider">
                  Reviews
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                  FundedNext vs. FTMO: The Ultimate Showdown
                </h4>
                <p className="text-text-muted text-sm line-clamp-2">
                  A deep dive into the rules, scaling plans, and hidden fees of
                  the two giants.
                </p>
                <span className="text-xs text-text-muted/60">
                  Nov 01 • 8 min read
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
