import React from "react";
import "./css/navButtons.css";
import Link from "next/link";

const NavigationBar: React.FC = () => {
  return (
    <nav>
    <div className="wrapper">
      
      <Link
          href="/home"
          className="group rounded-lg border border-transparent text-center py-0.3 transition-colors"
          rel="noopener noreferrer"
        >
          <button type="button" className="button">Home</button>
      </Link>

      <Link
          href="/orders"
          className="group rounded-lg border border-transparent text-center py-0.3 transition-colors"
          rel="noopener noreferrer"
        >
          <button type="button" className="button">Orders</button>
      </Link>

      <Link
          href="/products"
          className="group rounded-lg border border-transparent text-center py-0.3 transition-colors"
          rel="noopener noreferrer"
        >
          <button type="button" className="button">Products</button>  
      </Link>

      <Link
          href="/customers"
          className="group rounded-lg border border-transparent text-center py-0.3 transition-colors"
          rel="noopener noreferrer"
        >
        <button type="button" className="button">Customers</button>
      </Link>

      <Link
          href="/admin"
          className="group rounded-lg border border-transparent text-center py-0.3 transition-colors"
          rel="noopener noreferrer"
        >
        <button type="button" className="button">Admin</button>
      </Link>
    </div>
    </nav>
  );
};

export default NavigationBar;