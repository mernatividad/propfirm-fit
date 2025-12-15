export default function NewsletterSection() {
  return (
    <section className="w-full bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 flex flex-col items-center text-center">
        <h2 className="text-white text-2xl font-bold mb-2">
          Join the Inner Circle
        </h2>
        <p className="text-text-muted mb-8">
          Get exclusive discounts, new firm alerts, and trading tips delivered
          to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            className="flex-1 bg-background-dark border border-[#383329] text-white rounded-lg px-4 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-text-muted outline-none"
            placeholder="Enter your email address"
            required
            type="email"
          />
          <button
            className="h-12 px-6 bg-primary hover:bg-primary-hover text-background-dark font-bold rounded-lg transition-colors"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-text-muted mt-4 opacity-60">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
