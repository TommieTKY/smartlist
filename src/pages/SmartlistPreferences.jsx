import React, { useState } from "react";
import { useEffect } from "react";

function SmartlistPreferences({ onGenerate }) {
  const [budget, setBudget] = useState("");
  const [itemTypes, setItemTypes] = useState({
    essentials: true,
    mealBased: false,
    bulkSavings: false
  });

  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    vegan: false,
    glutenFree: false,
    allergens: false,
    lactose: false
  });

  const handleItemTypeChange = (type) => {
    setItemTypes({ ...itemTypes, [type]: !itemTypes[type] });
  };

  const handleDietaryChange = (restriction) => {
    setDietaryRestrictions({
      ...dietaryRestrictions,
      [restriction]: !dietaryRestrictions[restriction]
    });
  };

  const handleGenerate = () => {
    onGenerate({ budget, itemTypes, dietaryRestrictions });
  };

  useEffect(() => {
    document.title = "Smartlist | SmartList"
  }, [])

  return (
    <>
      <div className="mobile-wrapper pb-5">
        <h5>Smart shopping list</h5>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your grocery budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <h6>Item type</h6>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="essentials"
            checked={itemTypes.essentials}
            onChange={() => handleItemTypeChange("essentials")}
          />
          <label className="form-check-label" htmlFor="essentials">
            Essentials only (Rice, Milk, Bread)
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="mealBased"
            checked={itemTypes.mealBased}
            onChange={() => handleItemTypeChange("mealBased")}
          />
          <label className="form-check-label" htmlFor="mealBased">
            Meal Based (Planned Meals)
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="bulkSavings"
            checked={itemTypes.bulkSavings}
            onChange={() => handleItemTypeChange("bulkSavings")}
          />
          <label className="form-check-label" htmlFor="bulkSavings">
            Bulk Savings (Discounted items)
          </label>
        </div>

        <h6>Dietary Restrictions</h6>
        <div className="row mb-3">
          <div className="col-6">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="vegan"
                checked={dietaryRestrictions.vegan}
                onChange={() => handleDietaryChange("vegan")}
              />
              <label className="form-check-label" htmlFor="vegan">Vegan</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="allergens"
                checked={dietaryRestrictions.allergens}
                onChange={() => handleDietaryChange("allergens")}
              />
              <label className="form-check-label" htmlFor="allergens">Allergens</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="glutenFree"
                checked={dietaryRestrictions.glutenFree}
                onChange={() => handleDietaryChange("glutenFree")}
              />
              <label className="form-check-label" htmlFor="glutenFree">Gluten-Free</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="lactose"
                checked={dietaryRestrictions.lactose}
                onChange={() => handleDietaryChange("lactose")}
              />
              <label className="form-check-label" htmlFor="lactose">Lactose Intolerant</label>
            </div>
          </div>
        </div>

        <button className="btn btn-success w-100" onClick={handleGenerate}>
          Generate List
        </button>
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

export default SmartlistPreferences;
