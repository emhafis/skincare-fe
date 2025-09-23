import { loginUser } from "../services/auth";

export default function LoginModal({ onClose, onSuccess }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token); // simpan token biar persist
      onSuccess();
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex min-h-screen items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-lg w-full max-w-md mx-4 p-8 relative">
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-light/50 dark:text-text-dark/50 hover:text-text-light dark:hover:text-text-dark transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Welcome Back
          </h2>
          <p className="text-text-light/70 dark:text-text-dark/70 mt-2">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Form login */}
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-2 w-full rounded-lg border-border-light dark:border-border-dark bg-subtle-light dark:bg-subtle-dark px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-shadow"
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark"
                htmlFor="password"
              >
                Password
              </label>
              <a
                className="text-sm font-medium text-primary hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <input
              className="mt-2 w-full rounded-lg border-border-light dark:border-border-dark bg-subtle-light dark:bg-subtle-dark px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-shadow"
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              required
            />
          </div>

          <div>
            <button
              className="w-full inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {/* Link ke sign up */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-light/70 dark:text-text-dark/70">
            Don&apos;t have an account?
            <a className="font-medium text-primary hover:underline" href="#">
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
