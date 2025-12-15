export default function HeroSection() {
  return (
    <section className="w-full relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        aria-label="Abstract dark financial chart background with golden highlights"
        style={{
          backgroundImage:
            'linear-gradient(rgba(23, 22, 17, 0.85) 0%, rgba(23, 22, 17, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkQ0XOh4Gc7Xwwp24ykFYixwMoF6j9Tf2ysodMIP_ivOQFPXTI28nfu4HI8VxevLh1ZNreazomAw0XlG7oFJ6F_PSGcrUsxRUPR99MD3LJq4VhCHJugsG_N4UyqRwhBGnblRtudsHhgBrbUR_-6L-PQqPz79TKkPN5fM_nAp6PSua6scVmIuIe_24TiACCzgAB_4HSv5F0HARtV0gG3MwIljpbXlQAGJycacHjFbk68kcv2-eGe7IsIeLDEbSXfvorUhVUAASdfsk")',
        }}
      />
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
  );
}
