import React from "react";

export default function ProductCard({ item }) {
  const {
    image,
    title,
    price_min,
    price_max,
    category,
    location,
    seller_name,
    condition,
    status,
  } = item;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>

        <p className="text-sm text-gray-600">
          Condition: <span className="font-medium">{condition}</span>
        </p>

        <p className="text-sm text-gray-600">
          Location: <span className="font-medium">{location}</span>
        </p>

        <p className="text-blue-600 font-bold mt-2">
          ${price_min} - ${price_max}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span
            className={`px-3 py-1 text-xs rounded-full ${
              status === "sold"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status}
          </span>
          <span className="text-sm text-gray-500">by {seller_name}</span>
        </div>
      </div>
    </div>
  );
}
