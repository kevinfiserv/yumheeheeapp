"use client";

import { Button, Tab } from "@nextui-org/react";
import { table } from "console";
import React, { useState } from "react";

import { EmployeeApi } from "@/pages/api";

interface Employee {
    employeeId: number;
    activeStatus: string;
    name: string;
}  

const EmployeeForms = ({ employee }: { employee: Employee }) => {
  let [editable, setEditable] = useState(true);
  // setEditable(false);

  let [newActiveStatus, setActiveStatus] = useState(employee.activeStatus);
  let [newName, setName] = useState(employee.name);
  
  let handleNameChange = (e) => {
    setName(e.target.value);
  };
  let handleActiveStatusChange = (e) => {
    setActiveStatus(e.target.value);
  };

  let handleUpdate = () => {
    setEditable(true);
    EmployeeApi.updateEmployee({
        employeeId: employee.employeeId,
        name: newName,
        activeStatus: newActiveStatus,
    });
  };

  return (
    <>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        {employee.employeeId}
      </td>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        <input
          type="text"
          onChange={handleNameChange}
          value={newName}
          disabled={editable}
        />
      </td>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        <input
          type="text"
          onChange={handleActiveStatusChange}
          value={newActiveStatus}
          disabled={editable}
        />
      </td>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        {editable && (
          <>
            <Button onClick={() => setEditable(!editable)} color="secondary">
              Edit
            </Button>
            <Button className="bg-transparent">--</Button>
          </>
        )}
        {!editable && (
          <>
            <Button onClick={() => handleUpdate()} color="success">
              Save
            </Button>
            <Button onClick={() => setEditable(!editable)} color="danger">
              x
            </Button>
          </>
        )}
      </td>
    </>
  );
};

export default EmployeeForms;
