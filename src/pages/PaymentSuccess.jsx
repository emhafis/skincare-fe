import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <svg className="lucide lucide-check h-10 w-10 text-primary" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight">
          Checkout berhasil!
        </h2>
        <p className="mt-2 text-base text-text-light/80 dark:text-text-dark/80">
          Ini hanya simulasi checkout.
        </p>
        <div className="mt-10">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            to="/products">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;