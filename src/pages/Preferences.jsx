// import React, { useState } from "react";
// // import { Form, Button, Container, Row, Col } from "react-bootstrap";

// function Preferences({ onGenerate }) {
//   const [budget, setBudget] = useState("");
//   const [itemTypes, setItemTypes] = useState({
//     essentials: true,
//     mealBased: false,
//     bulkSavings: false
//   });
//   const [dietaryRestrictions, setDietaryRestrictions] = useState({
//     vegan: false,
//     glutenFree: false,
//     allergens: false,
//     lactose: false
//   });

//   const handleItemTypeChange = (type) => {
//     setItemTypes({ ...itemTypes, [type]: !itemTypes[type] });
//   };

//   const handleDietaryChange = (restriction) => {
//     setDietaryRestrictions({ ...dietaryRestrictions, [restriction]: !dietaryRestrictions[restriction] });
//   };

//   const handleGenerate = () => {
//     onGenerate({ budget, itemTypes, dietaryRestrictions });
//   };

//   return (
//     <Container className="mt-4">
//       <h5>Smart shopping list</h5>
//       <Form.Group controlId="budgetInput" className="mb-3">
//         <Form.Control
//           type="number"
//           placeholder="Enter your grocery budget"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
//       </Form.Group>

//       <h6>Item type</h6>
//       <div className="mb-3">
//         <Form.Check
//           type="checkbox"
//           label="Essentials only (Rice, Milk, Bread)"
//           checked={itemTypes.essentials}
//           onChange={() => handleItemTypeChange("essentials")}
//         />
//         <Form.Check
//           type="checkbox"
//           label="Meal Based (Planned Meals)"
//           checked={itemTypes.mealBased}
//           onChange={() => handleItemTypeChange("mealBased")}
//         />
//         <Form.Check
//           type="checkbox"
//           label="Bulk Savings (Discounted items)"
//           checked={itemTypes.bulkSavings}
//           onChange={() => handleItemTypeChange("bulkSavings")}
//         />
//       </div>

//       <h6>Dietary Restrictions</h6>
//       <Row>
//         <Col xs={6}>
//           <Form.Check
//             type="checkbox"
//             label="Vegan"
//             checked={dietaryRestrictions.vegan}
//             onChange={() => handleDietaryChange("vegan")}
//           />
//           <Form.Check
//             type="checkbox"
//             label="Allergens"
//             checked={dietaryRestrictions.allergens}
//             onChange={() => handleDietaryChange("allergens")}
//           />
//         </Col>
//         <Col xs={6}>
//           <Form.Check
//             type="checkbox"
//             label="Gluten-Free"
//             checked={dietaryRestrictions.glutenFree}
//             onChange={() => handleDietaryChange("glutenFree")}
//           />
//           <Form.Check
//             type="checkbox"
//             label="Lactose Intolerant"
//             checked={dietaryRestrictions.lactose}
//             onChange={() => handleDietaryChange("lactose")}
//           />
//         </Col>
//       </Row>

//       <Button className="mt-4 w-100" variant="success" onClick={handleGenerate}>
//         Generate List
//       </Button>
//     </Container>
//   );
// }

// export default Preferences;
