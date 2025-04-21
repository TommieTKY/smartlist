import React, { useState } from "react";
import "./SmartlistCalculator.css";

const initialItems = [
  {
    id: 1,
    name: "White bread",
    price: 3.89,
    image: "/images/bread.jpeg",
    quantity: 1,
    stock: "In stock",
    stockColor: "green",
  },
  {
    id: 2,
    name: "Brown Rice",
    price: 3.89,
    image: "/images/rice.jpeg",
    quantity: 3,
    stock: "Limited stock",
    stockColor: "orange",
  },
  {
    id: 3,
    name: "Milk",
    price: 5.89,
    image: "/images/milk.jpeg",
    quantity: 1,
    stock: "Out of stock",
    stockColor: "red",
  },
  {
    id: 4,
    name: "Eggs",
    price: 2.89,
    image: "/images/eggs.jpeg",
    quantity: 5,
    stock: "In stock",
    stockColor: "green",
  },
];

export default function SmartlistCalculator() {
  const [items, setItems] = useState(initialItems);
  const [showPopup, setShowPopup] = useState(false);
  const budget = 200;

  const totalUsed = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function updateQuantity(id, delta) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
          : item
      )
    );
  }

  function handleAddToCart() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div className="calculator-container">
      <button className="back-btn">← Back</button>
      <h1 className="section-title">Budget used</h1>

      <div className="budget-bar">
        <div
          className="budget-fill"
          style={{ width: `${(totalUsed / budget) * 100}%` }}
        ></div>
      </div>
      <p className="budget-label">${totalUsed.toFixed(2)} of ${budget} used</p>

      <h2 className="section-title">Suggestions</h2>
      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-name">{item.name}</div>
            <div className="qty-row">
              <button onClick={() => updateQuantity(item.id, -1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <div className="price">${item.price.toFixed(2)}</div>
            <div className="stock">
              <span className={`dot ${item.stockColor}`}></span>
              {item.stock}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <button className="add-cart-btn text-center" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>×</button>
            <div className="popup-checkmark">✔</div>
            <div className="popup-message">Added to Cart!</div>
            <button className="view-cart-btn">View Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
