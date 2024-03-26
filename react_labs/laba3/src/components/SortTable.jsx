import React, { useState } from "react";
import "../css/SortTable.css";

const productsData = [
  { name: "Товар A", price: 100, quantity: 5 },
  { name: "Товар B", price: 200, quantity: 0 },
  { name: "Товар C", price: 150, quantity: 2 },
  { name: "Товар D", price: 80, quantity: 10 },
  { name: "Товар E", price: 120, quantity: 1 },
  { name: "Товар F", price: 300, quantity: 8 },
  { name: "Товар G", price: 50, quantity: 0 },
  { name: "Товар H", price: 90, quantity: 5 },
  { name: "Товар I", price: 250, quantity: 2 },
  { name: "Товар J", price: 175, quantity: 7 },
];

function SortTable() {
  const [products, setProducts] = useState(productsData);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortProducts = (field) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (field === "name") {
        return sortOrder === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      } else {
        return sortOrder === "asc" ? a[field] - b[field] : b[field] - a[field];
      }
    });

    setProducts(sortedProducts);
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const getRowStyle = (quantity) => {
    if (quantity === 0) {
      return { backgroundColor: "red" };
    } else if (quantity < 3) {
      return { backgroundColor: "yellow" };
    } else {
      return {};
    }
  };

  return (
    <table className="SortTable">
      <thead>
        <tr>
          <th onClick={() => sortProducts("index")}>Номер строки</th>
          <th onClick={() => sortProducts("name")}>Название товара</th>
          <th onClick={() => sortProducts("price")}>Цена</th>
          <th onClick={() => sortProducts("quantity")}>Количество</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} style={getRowStyle(product.quantity)}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SortTable;
