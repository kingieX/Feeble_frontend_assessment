import Logo from "../assets/logo.png";
const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

const Navbar = () => {
  return (
    <header className="w-full pt-6">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between rounded-full bg-white/80 backdrop-blur-md px-8 py-3 shadow-sm">
          {/* Logo */}
          <div className="text-lg font-semibold text-text">
            <img src={Logo} alt="Coup Logo" className="h-6 w-auto" />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-nav transition-colors duration-200 hover:text-text"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="group relative overflow-hidden rounded-full border border-primary px-5 py-2 text-sm font-normal text-white">
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-primary">
              Contact Sales
            </span>
            <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out group-hover:-translate-x-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
