"use client";

import { Button, Tab } from "@nextui-org/react";
import { table } from "console";
import React, { useState } from "react";

import { ProductApi } from "@/pages/api";

interface Product {
  productId: number;
  name: string;
  price: number;
}

const ProductsForm = ({ product }: { product: Product }) => {
  let [editable, setEditable] = useState(true);
  // setEditable(false);
  let [newName, setName] = useState(product.name);
  let [newPrice, setPrice] = useState(product.price);

  let handleNameChange = (e) => {
    setName(e.target.value);
  };
  let handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  let handleUpdate = () => {
    setEditable(true);
    ProductApi.updateProduct({
      name: newName,
      price: newPrice,
      productId: product.productId,
    });
  };

  return (
    <>
      <td className="tremor-TableCell-root align-middle whitespace-nowrap tabular-nums text-left p-4">
        {product.productId}
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
          type="number"
          onChange={handlePriceChange}
          value={newPrice}
          placeholder={Number(product.price).toFixed(2)}
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

export default ProductsForm;
