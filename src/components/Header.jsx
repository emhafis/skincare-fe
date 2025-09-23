function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-accent-light dark:border-accent-dark">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* ada logo nanti disini */}
          <span className="text-2xl font-bold">Luminous</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <a href="#" className="hover:text-primary transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-white py-2 px-6 rounded-full font-bold hover:bg-opacity-80 transition">
            Sign In
          </button>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
