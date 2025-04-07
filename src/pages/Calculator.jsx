// import React, { useState } from "react";
// import { Container, ProgressBar, Row, Col, Card, Button } from "react-bootstrap";

// function ProductCard({ item, onChange }) {
//   const decrease = () => onChange(item.name, Math.max(item.quantity - 1, 0));
//   const increase = () => onChange(item.name, item.quantity + 1);

//   const stockColors = {
//     "In stock": "success",
//     "Limited stock": "warning",
//     "Out of stock": "danger"
//   };

//   return (
//     <Card className="mb-3">
//       <Card.Body className="text-center">
//         <Card.Title>{item.name}</Card.Title>
//         <div className="d-flex justify-content-center align-items-center mb-2">
//           <Button size="sm" variant="light" onClick={decrease}>–</Button>
//           <span className="mx-2">{item.quantity}</span>
//           <Button size="sm" variant="light" onClick={increase}>+</Button>
//         </div>
//         <div>${item.price.toFixed(2)}</div>
//         <div className={`text-${stockColors[item.stock]}`}>{item.stock}</div>
//       </Card.Body>
//     </Card>
//   );
// }

// function Calculator() {
//   const [products, setProducts] = useState([
//     { name: "White bread", quantity: 1, price: 2.5, stock: "In stock" },
//     { name: "Brown Rice", quantity: 3, price: 1.8, stock: "Limited stock" },
//     { name: "Milk", quantity: 2, price: 1.5, stock: "Out of stock" },
//     { name: "Eggs", quantity: 10, price: 0.2, stock: "In stock" }
//   ]);

//   const totalBudget = 20;
//   const usedBudget = products.reduce((total, p) => total + p.quantity * p.price, 0);

//   const handleQuantityChange = (name, quantity) => {
//     const updated = products.map(p =>
//       p.name === name ? { ...p, quantity } : p
//     );
//     setProducts(updated);
//   };

//   return (
//     <Container className="mt-4">
//       <h6>Budget used</h6>
//       <ProgressBar now={(usedBudget / totalBudget) * 100} variant="success" className="mb-2" />
//       <p>${usedBudget.toFixed(2)} of ${totalBudget.toFixed(2)} used</p>

//       <h6>Suggestions</h6>
//       <Row>
//         {products.map((item, idx) => (
//           <Col xs={6} key={idx}>
//             <ProductCard item={item} onChange={handleQuantityChange} />
//           </Col>
//         ))}
//       </Row>

//       <Button variant="success" className="w-100 mt-3">Add to cart</Button>
//     </Container>
//   );
// }

// export default Calculator
