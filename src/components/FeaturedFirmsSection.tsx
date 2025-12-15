export default function FeaturedFirmsSection() {
  return (
    <section className="w-full max-w-[1280px] px-4 md:px-10 py-16">
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-xl!">
              star
            </span>
            <span className="text-primary text-sm font-bold tracking-wider uppercase">
              Premium Selection
            </span>
          </div>
          <h2 className="text-white text-3xl font-bold leading-tight">
            Featured Firms
          </h2>
        </div>
        <div className="text-xs text-text-muted italic max-w-md text-right">
          *Disclosure: We may earn a commission when you click links. Our
          reviews remain unbiased and data-driven.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
          <div
            className="h-40 w-full bg-cover bg-center"
            aria-label="Abstract blue digital pattern"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzOr-ftJ_sI9NJKn_kvVjLM4ziF5TkN45JkXwIH_AFz4vF9Bu3pFwdyDcIy3KjgmcnChDU-oXAXFsoWZXK1vPSxLK5ETpoNnwpAY0U1zlpU1vcA26_XDeLipKScuNW196moMP1hc-xCaR3idpzNW-KactzAWIQbEFwoPIgSgl3sfBe95HKEXCApWtuKBrJZv8X862Ld7giOAiukcpw4ZQj69RiKdLiMnllj3OPCnC_cYWIYXmTKZBNJWldTw0oNsqeWyK4Uj6KlZs")',
            }}
          >
            <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
              <h3 className="text-white text-2xl font-bold">
                Apex Trader Funding
              </h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Evaluation
                </p>
                <p className="text-white font-medium">1-Step & 2-Step</p>
              </div>
              <div className="text-right">
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Max Funding
                </p>
                <p className="text-primary font-bold text-lg">$2,000,000</p>
              </div>
            </div>
            <div className="h-px bg-[#383329] w-full my-1"></div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-[18px]! fill-1">
                  star
                </span>
                <span className="text-white text-sm font-bold">4.8</span>
                <span className="text-text-muted text-xs ml-1">
                  (2k+ Reviews)
                </span>
              </div>
              <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                Visit Site{" "}
                <span className="material-symbols-outlined text-[18px]!">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
          <div
            className="h-40 w-full bg-cover bg-center"
            aria-label="Abstract purple geometric digital art"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS6fKcr5iFMRYkv-Wc1874IDouQ9OXqb5DfpQRf3QWNYIZkdglD7nx8wKlUUlXMYwy4j640iDnJt2xxJ5m7V8oeLaA0nBU1UbzGgCmza2qEbuVB_YiL2ZOjGdN055Od817iSJrpQFHh3hof0JCmjJ-BosHLe5UL4AidWivWKRo0ldMdZyxKrwu9oaXaSfy6O8bqmni_I9qiyNdyHhpomlFqzlwfGP-gxtaVe84oK3sdUhAoJ_-qE9Bvlt9PbL0ZFoo4PPg-M5KmWw")',
            }}
          >
            <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
              <h3 className="text-white text-2xl font-bold">FTMO</h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Evaluation
                </p>
                <p className="text-white font-medium">2-Step Classic</p>
              </div>
              <div className="text-right">
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Profit Split
                </p>
                <p className="text-primary font-bold text-lg">Up to 90%</p>
              </div>
            </div>
            <div className="h-px bg-[#383329] w-full my-1"></div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-[18px]! fill-1">
                  star
                </span>
                <span className="text-white text-sm font-bold">4.9</span>
                <span className="text-text-muted text-xs ml-1">
                  (5k+ Reviews)
                </span>
              </div>
              <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                Visit Site{" "}
                <span className="material-symbols-outlined text-[18px]!">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col bg-surface-dark rounded-xl border border-[#383329] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
          <div
            className="h-40 w-full bg-cover bg-center"
            aria-label="Abstract gold wave pattern"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxsAW8JZc2I8m1sXb_9wWEp0IMlyvo8dqvZwa0yJPhNrf5BVY7UGkfRRrgsipdSGw55quJKet72oRvLXXpdIXIjDnkfqjcSNvVYjt56E-VEzb6Dlagj7YeuteEll9h-Af2VM1ttZK3oc_lrUBYezruxjdJf4WUIB_A9rQUMuqH9GMMl-2zfAqkPU6zhBlvn61eM2VauijcKFxu8HzkZynnIiLcE0J6xb0NOVGaXo12u0VAt7dHu-v9CZZHLC1bIwDsUm5M13ixeHU")',
            }}
          >
            <div className="h-full w-full bg-black/40 flex items-center justify-center p-4">
              <h3 className="text-white text-2xl font-bold">TopTier Trader</h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Feature
                </p>
                <p className="text-white font-medium">Bi-weekly Payouts</p>
              </div>
              <div className="text-right">
                <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                  Leverage
                </p>
                <p className="text-primary font-bold text-lg">1:100</p>
              </div>
            </div>
            <div className="h-px bg-[#383329] w-full my-1"></div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-[18px]! fill-1">
                  star
                </span>
                <span className="text-white text-sm font-bold">4.7</span>
                <span className="text-text-muted text-xs ml-1">
                  (1k+ Reviews)
                </span>
              </div>
              <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                Visit Site{" "}
                <span className="material-symbols-outlined text-[18px]!">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
