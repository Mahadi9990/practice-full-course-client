import React from "react";
import { useLoaderData } from "react-router";
import Product from "./Product";

export default function Products() {
  const products = useLoaderData();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}