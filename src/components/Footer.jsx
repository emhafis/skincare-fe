export default function Footer() {
  return (
    <footer className="bg-subtle-light dark:bg-subtle-dark border-t border-accent-light dark:border-accent-dark">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a className="hover:text-primary transition-colors duration-300" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors duration-300" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors duration-300" href="#">
            Shipping & Returns
          </a>
        </div>
        <p className="text-content-light dark:text-content-dark">© 2024 Luminous. All rights reserved.</p>
      </div>
    </footer>
  );
}
