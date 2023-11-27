"use client";

import { Button, Tab } from "@nextui-org/react";
import { table } from "console";
import React, { useState } from "react";

import { CustomerApi } from "@/pages/api";

interface Customers {
    phoneNo: string;
    name: string;
    address: string;
    zipCode: number;
  }

const CustomersForm = ({ customer }: { customer: Customers }) => {
  let [editable, setEditable] = useState(true);
  // setEditable(false);

  let [newName, setName] = useState(customer.name);
  let [newAddress, setAddress] = useState(customer.address);
  let [newZipCode, setZipCode] = useState(customer.zipCode);

  let handleNameChange = (e) => {
    setName(e.target.value);
  };
  let handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  let handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  let handleUpdate = () => {
    setEditable(true);
    CustomerApi.updateCustomer({
        phoneNo: customer.phoneNo,
      name: newName,
      address: newAddress,
      zipCode: newZipCode,
    });
  };

  return (
    <>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        {customer.phoneNo}
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
          onChange={handleAddressChange}
          value={newAddress}
          disabled={editable}
        />
      </td>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        <input
          type="text"
          onChange={handleZipCodeChange}
          value={newZipCode}
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

export default CustomersForm;
