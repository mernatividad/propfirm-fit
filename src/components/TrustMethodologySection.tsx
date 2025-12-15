export default function TrustMethodologySection() {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 md:px-10 py-24 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="material-symbols-outlined text-text-muted text-5xl! opacity-50">
          verified_user
        </span>
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          Data You Can Trust.
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
          Our methodology tracks 50+ data points per firm. We don&apos;t accept payments for higher rankings. Our database is updated weekly to ensure you have the precision intelligence needed to make professional career decisions.
        </p>
        <a
          className="text-primary hover:text-white font-bold underline decoration-primary/50 underline-offset-4 transition-colors"
          href="#"
        >
          Read our full methodology
        </a>
      </div>
    </section>
  );
}
