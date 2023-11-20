import React from "react";

import { getTestUsers } from "@/pages/api";

const Orders = async () => {
  const users = await getTestUsers();
  return (
    <>
      <div className="mt-3 text-3xl pl-5 pr-5 grid bg-stone-500 py-5 bg-clip-border rounded-xl">
        Shopping cart: Order Number ####-####-#####
      </div>
      <div className="bg-gray-300 text-cyan-950 tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand p-6 mt-6">
        <div className="tremor-Table-root overflow-auto">
          <table className="tremor-Table-table w-full tabular-nums text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <thead className="tremor-TableHead-root text-left text-tremor-content dark:text-dark-tremor-content">
              <tr className="tremor-TableRow-row">
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Product
                </th>
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Quantity
                </th>
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Price Per Serving
                </th>
              </tr>
            </thead>
            <tbody className="tremor-TableBody-root align-top overflow-x-auto divide-y divide-tremor-border dark:divide-dark-tremor-border">
              {users.map((user) => (
                <tr key={user.id} className="tremor-TableRow-row">
                  <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
                    {user.name}
                  </td>
                  <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      {user.email}
                    </p>
                  </td>
                  <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      {user.phone}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
