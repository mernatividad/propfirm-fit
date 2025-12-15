"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-b-[#383329] bg-background-dark/95 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1440px]">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-2xl!">candlestick_chart</span>
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
                <span className="material-symbols-outlined text-[20px]!">search</span>
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
  );
}
