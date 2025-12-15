export default function ReviewsAndBlogSection() {
  return (
    <section className="w-full max-w-7xl px-4 md:px-10 py-16">
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
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
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
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]! fill-1">star</span>
              <span className="material-symbols-outlined text-[16px]!">star_half</span>
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
  );
}
