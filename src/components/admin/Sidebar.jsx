import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${isActive
      ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
      : "text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary"
    }`;

  return (
    <aside className="sticky top-0 h-screen w-64 bg-background-light dark:bg-background-dark p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCItv8I4Ik_LBqlE9fwH1N8aYewMKqzQudkwmHqTj_493cwcZn4jHQ_hFkJv4mW9QAeVJNsj3Q_29OuLFmH3rYeRXrfrdxhx-ircZr4dM0CQP8c8oAxwLQKstMuQR4XWWpiPvC8W5AT5bXBQRCsDhoN53pOxXuJp6m2UDjOOPVV6rAE5M8M-NifclYjbQPhQumDMNi6JCT5JimXBCgOR_9HCTrllhG_7_rle25JPdmN_XNN80smhH_MG-O1RHae-2oeEa0ILqgdsx0')",
            }}
          ></div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Cesil Skincare
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/admin" className={linkClass} end>
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
            <span className="font-medium">Dashboard</span>
          </NavLink>

          <NavLink to="/admin/products" className={linkClass}>
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
            <span className="font-medium">Products</span>
          </NavLink>

          <NavLink to="/admin/orders" className={linkClass}>
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,0,7.16,0L160,199.06l28.42-14.22a8,8,0,0,0,7.16,0L216,195.06Z"></path>
            </svg>
            <span className="font-medium">Orders</span>
          </NavLink>
        </nav>
      </div>

      <div>
        <NavLink to="/admin/help" className={linkClass}>
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
          </svg>
          <span className="font-medium">Help</span>
        </NavLink>
      </div>
    </aside>
  );
}
