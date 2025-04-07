import React, { useState } from "react";

function SmartlistCalculator({ onBack }) {
  const [products, setProducts] = useState([
    { name: "White bread", quantity: 1, price: 2.5, stock: "In stock" },
    { name: "Brown Rice", quantity: 3, price: 1.8, stock: "Limited stock" },
    { name: "Milk", quantity: 2, price: 1.5, stock: "Out of stock" },
    { name: "Eggs", quantity: 10, price: 0.2, stock: "In stock" }
  ]);

  const totalBudget = 20;
  const usedBudget = products.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleQuantityChange = (name, change) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const getStockColor = (status) => {
    if (status === "In stock") return "text-success";
    if (status === "Limited stock") return "text-warning";
    return "text-danger";
  };

  return (
    <>
      <div className="mobile-wrapper pb-5">
        <button className="btn btn-link mb-3" onClick={onBack}>
          ← Back
        </button>

        <h6>Budget used</h6>
        <div className="progress mb-2">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${(usedBudget / totalBudget) * 100}%` }}
            aria-valuenow={(usedBudget / totalBudget) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p>${usedBudget.toFixed(2)} of ${totalBudget.toFixed(2)} used</p>

        <h6>Suggestions</h6>
        <div className="row">
          {products.map((item, index) => (
            <div className="col-6 mb-3" key={index}>
              <div className="card text-center h-100">
                <div className="card-body">
                  <h6 className="card-title">{item.name}</h6>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <button
                      className="btn btn-light btn-sm rounded-circle"
                      onClick={() => handleQuantityChange(item.name, -1)}
                    >
                      –
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-light btn-sm rounded-circle"
                      onClick={() => handleQuantityChange(item.name, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>${item.price.toFixed(2)}</p>
                  <p className={getStockColor(item.stock)}>{item.stock}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-success w-100 mt-3">Add to cart</button>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav">
        <div className="nav-icon">🏠</div>
        <div className="nav-icon">🔍</div>
        <div className="nav-icon active">📋</div>
        <div className="nav-icon">🛒</div>
        <div className="nav-icon">🔲</div>
      </div>
    </>
  );
}

export default SmartlistCalculator;

