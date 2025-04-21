import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SmartlistPreferences.css";

export default function SmartlistPreferences() {
  const [amount, setAmount] = useState("");
  const [itemTypes, setItemTypes] = useState({
    essentials: false,
    mealBased: false,
    bulk: false,
  });
  const [restrictions, setRestrictions] = useState({
    vegan: false,
    glutenFree: false,
    allergens: false,
    lactoseIntolerant: false,
  });
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  function handleItemTypeChange(e) {
    const { name, checked } = e.target;
    setItemTypes({ ...itemTypes, [name]: checked });
  }

  function handleRestrictionChange(e) {
    const { name, checked } = e.target;
    setRestrictions({ ...restrictions, [name]: checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/calculator");
  }

  return (
    <div className="preferences-container">
      <button className="back-btn" onClick={() => navigate("/home")}>← Back</button>
      <h1 className="section-title">Smart shopping list</h1>

      <form className="preferences-form" onSubmit={handleSubmit}>
        <input
          className="amount-input"
          type="number"
          placeholder="Input Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <h2>Select Item type</h2>
        <div className="option-buttons">
          <label className={`option ${itemTypes.essentials ? "selected" : ""}`}>
            <input
              type="checkbox"
              name="essentials"
              checked={itemTypes.essentials}
              onChange={handleItemTypeChange}
            />
            Essentials only (Rice, Milk, Bread)
          </label>
          <label className={`option ${itemTypes.mealBased ? "selected" : ""}`}>
            <input
              type="checkbox"
              name="mealBased"
              checked={itemTypes.mealBased}
              onChange={handleItemTypeChange}
            />
            Meal Based (Planned Meals)
          </label>
          <label className={`option ${itemTypes.bulk ? "selected" : ""}`}>
            <input
              type="checkbox"
              name="bulk"
              checked={itemTypes.bulk}
              onChange={handleItemTypeChange}
            />
            Bulk Savings (Discounted items)
          </label>
        </div>

        <h2>Dietary Restrictions</h2>
        <div className="checkbox-grid">
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={restrictions.vegan}
              onChange={handleRestrictionChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="glutenFree"
              checked={restrictions.glutenFree}
              onChange={handleRestrictionChange}
            />
            Gluten-Free
          </label>
          <label>
            <input
              type="checkbox"
              name="allergens"
              checked={restrictions.allergens}
              onChange={handleRestrictionChange}
            />
            Allergens
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseIntolerant"
              checked={restrictions.lactoseIntolerant}
              onChange={handleRestrictionChange}
            />
            Lactose Intolerant
          </label>
        </div>

        <h2>Additional Information</h2>
        <textarea
          placeholder="I need items with proteins..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit" className="generate-button">
          Generate List
        </button>
      </form>
    </div>
  );
}
