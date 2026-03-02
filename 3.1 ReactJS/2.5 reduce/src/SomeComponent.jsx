import React from "react";
import ToReduce from "./ToReduce";

const SomeComponent = () => {
  const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Orange", price: 50 },
  ];

  const totalPrice = ToReduce(products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default SomeComponent;
