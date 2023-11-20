import React from "react";
import "./css/navButtons.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* <div className="grid text-center lg:max-w-l lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left"> */}
      <nav className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
        <Link
          href="/home"
          className="group rounded-lg border border-transparent text-center py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <button>
            <span>
              <h2 className={`mb-3 text-2xl font-semibold`}>Home</h2>
            </span>
          </button>
        </Link>

        <Link
          href="/orders"
          className="group rounded-lg border border-transparent text-center py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <button>
            <span>
              <h2 className={`mb-3 text-2xl font-semibold`}>Orders</h2>
            </span>
          </button>
        </Link>
        <Link
          href="/"
          className="group rounded-lg border border-transparent text-center py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <button>
            <span>
              <h2 className={`mb-3 text-2xl font-semibold`}>Customers</h2>
            </span>
          </button>
        </Link>
        <Link
          href="/"
          className="group rounded-lg border border-transparent text-center py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <button>
            <span>
              <h2 className={`mb-3 text-2xl font-semibold`}>Products</h2>
            </span>
          </button>
        </Link>
        <Link
          href="/"
          className="group rounded-lg border border-transparent text-center py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <button>
            <span>
              <h2 className={`mb-3 text-2xl font-semibold`}>Admin</h2>
            </span>
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
