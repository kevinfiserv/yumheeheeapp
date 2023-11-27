import React from "react";
import { EmployeeApi } from "@/pages/api";
import Admin from "./page";
import EmployeeForms from "../adminEmployees/EmployeeForms";


const AdminEmployees = async () => {
  const employees = await EmployeeApi.getAllEmployees();

  return (
    <>
      <Admin></Admin>

      <div className="bg-gray-300 text-cyan-950 tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand p-6 mt-6">
        <div className="tremor-Table-root overflow-auto">
          <table className="tremor-Table-table w-full tabular-nums text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <thead className="tremor-TableHead-root text-left text-tremor-content dark:text-dark-tremor-content">
              <tr className="tremor-TableRow-row">
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Employee ID
                </th>
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Name
                </th>
                <th className="tremor-TableHeaderCell-root sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 px-4 py-3.5">
                  Active Status
                </th>

              </tr>
            </thead>
            <tbody className="tremor-TableBody-root align-top overflow-x-auto divide-y divide-tremor-border dark:divide-dark-tremor-border">
              {employees.map((employee) => (
                <tr key={employee.employeeId} className="tremor-TableRow-row">
                  <EmployeeForms employee={employee} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
      );
    };

export default AdminEmployees;