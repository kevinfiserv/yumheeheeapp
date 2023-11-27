import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <>
      <div className="mt-3 text-3xl pl-5 pr-5 grid py-5 bg-clip-border rounded-xl">
        _______________________________
      </div>
      <Link
        href="/adminCustomers"
        className="group rounded-lg border border-red bg-white text-black text-center py-4 transition-colors"
        rel="noopener noreferrer"
      >
        Customers
      </Link>
      <Link
        href="/adminOrders"
        className="group rounded-lg border border-red bg-white text-black text-center py-4 transition-colors"
        rel="noopener noreferrer"
      >
        Orders
      </Link>
      <Link
        href="/adminProducts"
        className="group rounded-lg border border-red bg-white text-black text-center py-4 transition-colors"
        rel="noopener noreferrer"
      >
        Products
      </Link>
    </>
  );
};

export default Admin;
