import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-subtle-light dark:border-subtle-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-foreground-light dark:text-foreground-dark"
            >
              <svg
                className="h-8 w-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
              </svg>
              <span className="">Cesil Skincare</span>
            </Link>
          </div>

          {/* Right side: Account */}
          <div className="flex items-center gap-2">
            {/* Menu desktop */}
            <nav className="hidden md:flex items-center gap-8 mx-4">
              <Link
                className="text-sm font-medium hover:text-primary transition-colors"
                to="/"
              >
                Home
              </Link>
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="/#about"
              >
                About
              </a>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors"
                to="/products"
              >
                Products
              </Link>
            </nav>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                }}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLogIn(true)}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Sign In
              </button>
            )}

            {/* Hamburger button (mobile) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="h-6 w-6 text-foreground-light dark:text-foreground-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-subtle-light dark:border-subtle-dark">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <Link
              to="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </nav>
        </div>
      )}

      {/* Login Modal */}
      {showLogIn && (
        <LoginModal
          onClose={() => setShowLogIn(false)}
          onSuccess={() => setIsLoggedIn(true)}
        />
      )}
    </header>
  );
}
