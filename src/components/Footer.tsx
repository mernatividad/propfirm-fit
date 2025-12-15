export default function Footer() {
  return (
    <footer className="w-full bg-background-dark border-t border-[#383329] pt-16 pb-8">
      <div className="max-w-360 mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl!">candlestick_chart</span>
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
  );
}
