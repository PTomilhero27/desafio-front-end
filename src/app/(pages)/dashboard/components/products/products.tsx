"use client";
import React from "react";
import CardComponent from "@/components/card/card";
import ProductsTable from "./productsTable";

const Products: React.FC = () => {
  return (
    <CardComponent title="Top produtos" description="" export={true}>
      <ProductsTable />
    </CardComponent>
  );
};

export default Products;
