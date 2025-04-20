import { useEffect } from "react";
import profile from "../assets/Home/Profile.png";
import banner from "../assets/Home/Banner.png";
import bestDeal from "../assets/Home/Best-Deal.png";
import mealPlan from "../assets/Home/Meal Plan.png";
import fruits from "../assets/Home/Fruits.png";
import vegetables from "../assets/Home/Vegetables.png";
import dairy from "../assets/Home/Dairy.png";
import meats from "../assets/Home/Meats.png";
import snacks from "../assets/Home/Snacks.png";

export default function Home() {
  useEffect(() => {
    document.title = "Home | SmartList"
  }, [])
  return (
    <>
      <header className="d-flex justify-content-between align-items-center px-3 bg-light py-4">
        <div className="d-flex align-items-center gap-2">
          <img src="/logo.png" alt="Logo" style={{ width: "2rem" }} />
          <p className="fs-3 mb-0">Smart List</p>
        </div>
        <img src={profile} alt="Profile" style={{ width: "2rem" }} />
      </header>
      <main id="main" className="container p-2">
        <h1 className="fs-3"><strong>Hello, Jane</strong></h1>
        <p className="fs-5">Let's make your shopping easier today.</p>
        <img src={banner} alt="Banner" className="img-fluid my-2" style={{ width: "100%", maxWidth: "600px" }} />

        <h2 className="fs-4 mt-3 mb-2"><strong>Browse Categories</strong></h2>
        <div className="row row-cols-3 gx-4">
          <div className="col">
            <div className="card h-100 border-0">
              <img src={mealPlan} className="card-img-top" alt="Meal Plan"/>
              <div className="card-body">
                <p className="card-title">Meal Plan</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src={fruits} className="card-img-top" alt="Fruits"/>
              <div className="card-body">
                <p className="card-title">Fruits</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src={vegetables} className="card-img-top" alt="Vegetables"/>
              <div className="card-body">
                <p className="card-title">Vegetables</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src={dairy} className="card-img-top" alt="Dairy"/>
              <div className="card-body">
                <p className="card-title">Dairy</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src={meats} className="card-img-top" alt="Meats"/>
              <div className="card-body">
                <p className="card-title">Meats</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src={snacks} className="card-img-top" alt="Snacks"/>
              <div className="card-body">
                <p className="card-title">Snacks</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="fs-4 my-3"><strong>Deals</strong></h2>
        <img src={bestDeal} alt="Beast-Deal" className="img-fluid" style={{ width: "100%", maxWidth: "600px" }} />
      </main>
    </>
  )
}