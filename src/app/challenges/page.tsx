const ChallengesPage = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="w-full flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1 px-4 md:px-10 lg:px-20">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 py-6 lg:py-10">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-white text-4xl lg:text-5xl font-light leading-tight tracking-[-0.033em]">
                Curated Trading Challenges
              </h1>
              <p className="text-text-muted text-lg font-light leading-normal max-w-2xl">
                Access exclusive funding evaluations and promotional offers from
                top-tier proprietary firms. Verified deals updated daily.
              </p>
            </div>
          </div>
          {/* Featured Deals Carousel Section */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">
                verified
              </span>
              <h3 className="text-white text-xl font-medium">Featured Deals</h3>
            </div>
            <div className="flex overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-4">
                {/* Featured Card 1 */}
                <div className="flex h-full w-[340px] md:w-[400px] shrink-0 flex-col gap-4 rounded-xl bg-surface-lighter border border-border-dark p-4 shadow-sm hover:border-primary/30 transition-colors group cursor-pointer">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                    <div
                      className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                      data-alt="Abstract dark blue and gold geometric finance pattern"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK_tWEGRIpcCyzkVNA3wSazPyxuQOIhvnAqQBBwXBozaKuXaYpIBtF6a3_13lkBnc6ynHFb4KRZ4i4Ubspla45DvCoDTHrkCyJKav2h9TEdKpDLBBQfP4_690-2nw0RcxRCr0KUto-QRxgbDNA8LktZR59mt0wQTX93Kc5dElNwW0run-tEPfzpcq-SWvRpv8m67wWmq8YENxjGZYHAR3br9jkYdEXcvXX4wagXFGo4jrPoPS9ftUKX4_BeZJbUhjy1kLQJKfQfuY")',
                      }}
                    ></div>
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="px-2 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wide">
                        Exclusive
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-lg font-semibold">
                          FTMO - 10% Discount
                        </p>
                        <p className="text-text-muted text-sm">
                          Save on 200k Accounts
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-bold text-lg">
                          10% OFF
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-border-dark w-full my-1"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">
                          Code
                        </span>
                        <span className="text-sm font-mono text-white select-all">
                          PROPFIRM10
                        </span>
                      </div>
                      <button className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-colors">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>
                {/* Featured Card 2 */}
                <div className="flex h-full w-[340px] md:w-[400px] shrink-0 flex-col gap-4 rounded-xl bg-surface-lighter border border-border-dark p-4 shadow-sm hover:border-primary/30 transition-colors group cursor-pointer">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                    <div
                      className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                      data-alt="Dark aesthetic chart background"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxN2Anb5dPlh5VNbhcYjoYXAvhONMXsCaMM6USihO1zf8YOepN18_t9pvmRuSC5DSbDUJFwBphKmepByeSB5aPV-8M-p-EFRrNHjUK2emGyzRdTMz9UAbzVz-qFDOTknbZuswGJ3l-ZMAcPI5f6P3t2DrBVz3t_0Ni2BIngJfIMpkgtVQ06LvEO5VmbrgGyqZ-p4QcNkqEKN6STcpndQUlskpi2oBOhs8pU3hCwikkbCMDMQDttAh2r6CLnTg71k9ods4zzGRo2J0")',
                      }}
                    ></div>
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wide">
                        Limited Time
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-lg font-semibold">
                          E8 Funding - Free Retry
                        </p>
                        <p className="text-text-muted text-sm">
                          On failed Phase 1 evaluations
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-bold text-lg">
                          FREE RETRY
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-border-dark w-full my-1"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">
                          Ends in
                        </span>
                        <span className="text-sm text-white">48 Hours</span>
                      </div>
                      <button className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark transition-colors">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>
                {/* Featured Card 3 */}
                <div className="flex h-full w-[340px] md:w-[400px] shrink-0 flex-col gap-4 rounded-xl bg-surface-lighter border border-border-dark p-4 shadow-sm hover:border-primary/30 transition-colors group cursor-pointer">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                    <div
                      className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                      data-alt="Abstract gold wave pattern on black"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtave_otnfx37mAXsi7SGwsRzZSs7dVUQB5VugOdStFCft4umWoX0GifZY90mtD9qFORw2ATGfbWFTDFv6qNy2MOLEipjOYICnvTXkwM2YQ7ViObewnDckKD6A4cpywnALG4miz7bCOiH0DLoZ-zzAXy2IHCllH9OVSSaikBgT9wWz46Cj_jhGX13vvl-h83YtnTtfp0-VoxB0Yet-pG47JQgDYtZPyief3taRmsfbYsfsrCTXBRCiUK_DwmwiRzHKov8yGBmUK6w")',
                      }}
                    ></div>
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="px-2 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wide">
                        Best Value
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-lg font-semibold">
                          Blue Guardian - 125% Refund
                        </p>
                        <p className="text-text-muted text-sm">
                          With first payout + 15% profit split
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-bold text-lg">
                          125% BACK
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-border-dark w-full my-1"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">
                          Code
                        </span>
                        <span className="text-sm font-mono text-white select-all">
                          GUARDIAN125
                        </span>
                      </div>
                      <button className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark transition-colors">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Filters and Sort */}
          <div className="sticky top-[65px] z-40 bg-background-dark/95 backdrop-blur py-4 border-b border-border-dark mb-8">
            <div className="flex flex-wrap gap-3 overflow-x-auto scrollbar-hide items-center">
              {/* Filter Button Style */}
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-lighter hover:bg-border-dark border border-border-dark pl-4 pr-3 transition-colors group">
                <p className="text-white text-sm font-medium leading-normal">
                  Firm
                </p>
                <span className="material-symbols-outlined text-text-muted group-hover:text-white text-sm">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-lighter hover:bg-border-dark border border-border-dark pl-4 pr-3 transition-colors group">
                <p className="text-white text-sm font-medium leading-normal">
                  Account Size
                </p>
                <span className="material-symbols-outlined text-text-muted group-hover:text-white text-sm">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-lighter hover:bg-border-dark border border-border-dark pl-4 pr-3 transition-colors group">
                <p className="text-white text-sm font-medium leading-normal">
                  Challenge Type
                </p>
                <span className="material-symbols-outlined text-text-muted group-hover:text-white text-sm">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-lighter hover:bg-border-dark border border-border-dark pl-4 pr-3 transition-colors group">
                <p className="text-white text-sm font-medium leading-normal">
                  Max Drawdown
                </p>
                <span className="material-symbols-outlined text-text-muted group-hover:text-white text-sm">
                  expand_more
                </span>
              </button>
              <div className="w-px h-8 bg-border-dark mx-2 hidden sm:block"></div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative inline-flex items-center">
                  <input checked="" className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-lighter peer-focus:outline-none rounded-full peer dark:bg-surface-lighter peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </div>
                <span className="text-sm font-medium text-text-muted group-hover:text-white">
                  Show active promos only
                </span>
              </label>
              <div className="flex-1"></div>
              <button className="text-text-muted hover:text-white text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  sort
                </span>
                Sort by: Recommended
              </button>
            </div>
          </div>
          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Challenge Card 1 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              {/* Image/Logo Area */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Stock market chart analysis on dark screen"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcc-hRXVzdwU0FPJE0XIQa-g8PK6R9s6ziZUu_ZxfSb0XFHRRvD9ikCwm_6obGCRJtITfzGaMNUjT7XAZ_-mWhYMe-dUS9LCl4hAYManH8-keiSVbsqh2LaM3mSbVdHWmm4Cg8ighiB37nbHuF1SJUcnkZY71s3GLSnnfIm-BEGF8dANEVUpbPwbTOJ0RgixGwC8yuFKlSvFPjjsorQwabXHOGJSFCeAYWa5W_iXkxMFv-qMWfEA2n9oDbvcBuO5N4thryy9tnuSY")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                    90% Split
                  </span>
                </div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    diamond
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        FTMO
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        100k Challenge
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">€540</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Target: 10%</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>Unlimited Days</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:100</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        verified_user
                      </span>
                      <span>Refundable</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  {/* Coupon Section */}
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Promo Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-primary font-bold">
                        PROPFIRM10
                      </span>
                      <span className="material-symbols-outlined text-text-muted text-xs opacity-0 group-hover/code:opacity-100 transition-opacity">
                        content_copy
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-hover transition-all transform active:scale-[0.98]">
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
            {/* Challenge Card 2 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Futuristic digital trading interface"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZiEdKvGPvbt7dDiPkvJwfe9C2F3j3q3AFP8UOMZquQMIUZLVaAZbUsqQ9A3Wt6ax8OTid4BenT_3UVZTjnp5-fEiSrBEtG-1RFWQWW6DPa2TKafZcKfopKhBAmzCW2xDSdpNU2jRIk-M84FDgH3u6FDorsx67m--JpqCj2HCE2Z9zEVeBeJ_3jI-8U3NpPcVwQLyZmmLyfsm19Jnf_KpZSFAkS3SuuDIxxDM_QN1kLqIV9TSN-UerBavgmYASvHI7vCyJgM33I98")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                    New
                  </span>
                </div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    bolt
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        E8 Funding
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        E8 Track 50k
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">$228</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Target: 8%</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>No Time Limit</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:50</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        savings
                      </span>
                      <span>Drawdown: 8%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Deal:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-white">
                        Free Retry
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark hover:text-primary transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            {/* Challenge Card 3 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Minimalist architectural abstract"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEQln7J5-R_gfvIP7H4hgXdk1WOkgiyc65pCX1nFCVXq5GqVeBSMC2Xe8hk00R2wMumbSmnPCUu4TUkwRsSx2ya5Q9CZIp4sy3YdGYNN4vc34A04Bn4KzAZZlcbmjcIUDmUGBzubZfm3EIcwOjry4wk3ZXywD8Chi6Ip0uwK5Dvau82HQO810z7_pYAFHAgzUPW63h8TMGqc64eAz4Eryw-qSemu6LRxOTjIbc_xM8KEMHJkdMXI8BEJW62jt2TpTnrACcYqHBLSs")',
                  }}
                ></div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    shield
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        Blue Guardian
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        Unlimited 200k
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">$997</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Split: 85%</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>Unlimited</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:100</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        autorenew
                      </span>
                      <span>Bi-weekly Pay</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Promo Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-primary font-bold">
                        GUARDIAN125
                      </span>
                      <span className="material-symbols-outlined text-text-muted text-xs opacity-0 group-hover/code:opacity-100 transition-opacity">
                        content_copy
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-hover transition-all transform active:scale-[0.98]">
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
            {/* Challenge Card 4 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Dark abstract cityscape lights"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1fkWRBHgz9brOyx0pyOL66ZbBzMgoGPRImqLQUKp6pj3FdJXdb-5X8_g8_sHSfAIwPHiCnDF4nHNDwv2tj_NbbIpzpiMwqjkPu2kABCWlp4-z-WmjVpEgOH8oU_P_vDTqtdGNX1x5qvXoHCM5LzyEzTelILiKysF3P4mvkEkyYf1NeBZ4vl8jwZM7mEbnXs-Piuj_mZiN57nB73KWojCnyoRK4lQ91FCimt0YJZbkKfVsCK5fbWI-1VdrXfTK1LKtOq-OR-ccNCE")',
                  }}
                ></div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    rocket_launch
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        The5%ers
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        Bootcamp 100k
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">€95</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Scale to 4M</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>12 Months</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:10</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        attach_money
                      </span>
                      <span>Low Entry</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Offer:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-white">
                        Lowest Entry Cost
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark hover:text-primary transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            {/* Challenge Card 5 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Monochromatic office workspace"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9tgagada2YCtdFB1-86RH7oAOx5Im0ON5pqxO7E3HzQPsESu85rMfU9bkEZkrqZLFA56Dhm7H_nqo1WggDV591Q1gI4MxPlMaJvFjoZKZAXZhHF3hkegn3epyhgaXk21pZSSdpUrz7jso89KiJwhi5tBgwCNcwL4jzHD47w3qgwdSUEsscbMQg0t6wZI98TWccEtJp9mQHuoQLTcHHKbP9VVc7bOYz3slmJvkDrXlQ1o1eg7qVW27YaVJDvRxDhee1eXn8ci5VBc")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
                    Popular
                  </span>
                </div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    star
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        FundedNext
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        Stellar 50k
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">$299</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Split: 90%</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>No Time Limit</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:100</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        payments
                      </span>
                      <span>15% Profit Share</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Promo Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-primary font-bold">
                        NEXT5
                      </span>
                      <span className="material-symbols-outlined text-text-muted text-xs opacity-0 group-hover/code:opacity-100 transition-opacity">
                        content_copy
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-hover transition-all transform active:scale-[0.98]">
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
            {/* Challenge Card 6 */}
            <div className="group relative flex flex-col rounded-xl bg-surface-lighter border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Abstract golden texture"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3dgSjV-3b2se4Q3E4xdqOai8ddGFGOYCw5VUjwRtmRFCjamo93F5fMtZTqPFNvNRVb2EP9rU7yhqV3jPYbagg-_oo0XGJOkPPzAhT4L1FtiDr-vadbJ3EDZf7J3tuCQhuuMA9QzB2GQ7n_cPOJF65oxMySJ6fDn0o_xzeacZBqJF9mtfMnOKGNUPjVidmkLc9MO51N3jcufajQi3wT6FnKmoiLjur8CdWDNZ9LCKWwHgPSDizHxC-IDHzBVeJW8xDL68tC2pX-RA")',
                  }}
                ></div>
                <div className="absolute -bottom-6 left-4 z-20 h-12 w-12 rounded-lg border border-border-dark bg-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    workspace_premium
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-8 gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        Alpha Capital
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        Alpha Pro 100k
                      </h3>
                    </div>
                    <p className="text-white text-lg font-bold">$497</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        trending_up
                      </span>
                      <span>Split: 80%</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      <span>No Days Limit</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        show_chart
                      </span>
                      <span>Leverage: 1:100</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-base">
                        swap_horiz
                      </span>
                      <span>0% Commisions</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-background-dark/50 rounded border border-dashed border-border-dark px-3 py-2 group/code cursor-pointer hover:border-text-muted transition-colors">
                    <span className="text-xs text-text-muted">Promo Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-primary font-bold">
                        ALPHA20
                      </span>
                      <span className="material-symbols-outlined text-text-muted text-xs opacity-0 group-hover/code:opacity-100 transition-opacity">
                        content_copy
                      </span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-hover transition-all transform active:scale-[0.98]">
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
