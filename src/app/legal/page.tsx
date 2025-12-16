const LegalPage = () => {
  return (
    <main className="flex-grow flex justify-center w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
      <div className="flex w-full max-w-[1200px] gap-12 lg:gap-20 relative">
        {/* Sticky Sidebar (Table of Contents) */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-32 h-fit">
          <div className="mb-6">
            <h3 className="text-white text-base font-bold mb-1">
              Table of Contents
            </h3>
            <p className="text-text-muted text-xs">Jump to section</p>
          </div>
          <nav className="flex flex-col space-y-1 border-l border-border-dark pl-4">
            <a
              className="text-primary font-medium text-sm py-2 pl-4 -ml-[17px] border-l-2 border-primary block transition-colors"
              href="#affiliate"
            >
              Affiliate Disclosure
            </a>
            <a
              className="text-text-muted hover:text-white text-sm py-2 block transition-colors"
              href="#disclaimer"
            >
              General Disclaimer
            </a>
            <a
              className="text-text-muted hover:text-white text-sm py-2 block transition-colors"
              href="#accuracy"
            >
              Content Accuracy
            </a>
            <a
              className="text-text-muted hover:text-white text-sm py-2 block transition-colors"
              href="#external"
            >
              External Links
            </a>
            <a
              className="text-text-muted hover:text-white text-sm py-2 block transition-colors"
              href="#risk"
            >
              Risk Warning
            </a>
          </nav>
          {/* Small Promo Card in Sidebar */}
          <div className="mt-10 p-5 rounded-xl bg-surface-dark border border-border-dark">
            <span className="material-symbols-outlined text-primary mb-2 text-3xl">
              verified_user
            </span>
            <p className="text-sm font-bold text-white mb-1">
              PropFirmFit Verified
            </p>
            <p className="text-xs text-text-muted leading-relaxed mb-3">
              Our reviews are based on our strict 50-point methodology.
            </p>
            <a
              className="text-xs text-primary font-bold hover:underline"
              href="#"
            >
              View Methodology →
            </a>
          </div>
        </aside>
        {/* Content Column */}
        <div className="flex-1 max-w-[720px] mx-auto lg:mx-0">
          {/* Hero / Heading */}
          <div className="mb-12 border-b border-border-dark pb-8">
            <h1 className="text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-[-0.033em] mb-4">
              Legal Information <br />
              &amp; Disclosures
            </h1>
            <p className="text-text-muted text-base">
              Last Updated: October 24, 2024
            </p>
          </div>
          {/* Sections */}
          <div className="flex flex-col gap-16">
            {/* Section 1: Affiliate */}
            <section className="scroll-mt-32" id="affiliate">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  handshake
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Affiliate Disclosure
                </h2>
              </div>
              <div className="bg-surface-dark/50 border-l-4 border-primary rounded-r-lg p-6 mb-6">
                <p className="text-white font-medium leading-relaxed">
                  Transparency is one of our core values. PropFirmFit partners
                  with various prop trading firms listed on this website. We may
                  earn a commission when you click on our links and purchase a
                  challenge.
                </p>
              </div>
              <p className="text-text-muted text-lg leading-relaxed font-light">
                This partnership helps support our operations and allows us to
                continue providing high-quality tools, comparisons, and
                educational content for free. However, please note that our
                partnerships{" "}
                <strong>
                  do not influence our rankings, reviews, or editorial integrity
                </strong>
                . Our methodology is objective, data-driven, and designed to
                help you find the best fit for your trading style, regardless of
                our financial relationships.
              </p>
            </section>
            {/* Section 2: General Disclaimer */}
            <section className="scroll-mt-32" id="disclaimer">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  General Disclaimer
                </h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed font-light mb-6">
                The information provided on PropFirmFit.com is for educational
                and informational purposes only. It should not be considered
                financial, investment, or trading advice. We are not financial
                advisors, and you should perform your own due diligence before
                making any financial decisions.
              </p>
              <p className="text-text-muted text-lg leading-relaxed font-light">
                Trading in financial markets, including but not limited to
                forex, futures, commodities, and indices, involves a high level
                of risk and may not be suitable for all investors. You could
                lose some or all of your initial investment.
              </p>
            </section>
            {/* Section 3: Content Accuracy */}
            <section className="scroll-mt-32" id="accuracy">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Content Accuracy
                </h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed font-light mb-6">
                Proprietary trading firms frequently update their trading rules,
                challenge parameters, and pricing structures. While we strive to
                keep all information on PropFirmFit accurate and up-to-date, we
                cannot guarantee that all data is current at all times.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-text-muted text-lg leading-relaxed font-light marker:text-primary">
                <li>
                  Challenge prices and leverage rules may change without notice.
                </li>
                <li>Promotional offers listed may expire.</li>
                <li>
                  Users should verify all details directly on the firm's
                  official website before purchasing.
                </li>
              </ul>
            </section>
            {/* Section 4: External Links */}
            <section className="scroll-mt-32" id="external">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  External Links
                </h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed font-light">
                Our website contains links to third-party websites. PropFirmFit
                has no control over the content, privacy policies, or practices
                of these external sites. We assume no responsibility for any
                loss or damage that may arise from your use of them.
              </p>
            </section>
            {/* Section 5: Risk Warning */}
            <section
              className="scroll-mt-32 border-t border-border-dark pt-10"
              id="risk"
            >
              <div className="rounded-xl bg-[#2a2418] border border-[#b5830d]/30 p-8">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <span className="material-symbols-outlined">warning</span>
                  <h3 className="font-bold text-lg uppercase tracking-wider">
                    Risk Warning
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  Hypothetical performance results have many inherent
                  limitations, some of which are described below. No
                  representation is being made that any account will or is
                  likely to achieve profits or losses similar to those shown. In
                  fact, there are frequently sharp differences between
                  hypothetical performance results and the actual results
                  subsequently achieved by any particular trading program. One
                  of the limitations of hypothetical performance results is that
                  they are generally prepared with the benefit of hindsight.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
