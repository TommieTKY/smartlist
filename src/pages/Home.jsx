import { useEffect } from "react";
import {Link, NavLink} from "react-router";

export default function Home() {
  useEffect(() => {
    document.title = "Home | SmartList"
  }, [])
  return (
    <>
      <header className="d-flex justify-content-between align-items-center px-3 bg-light py-4">
        <div className="d-flex align-items-center gap-2">
          <img src="src/assets/logo.png" alt="Logo" style={{ width: "2rem" }} />
          <p className="fs-3 mb-0">Smart List</p>
        </div>
        <img src="src/assets/Profile.png" alt="Profile" style={{ width: "2rem" }} />
      </header>
      <main id="main" className="container p-2">
        <div className="text-center">
        </div>
        <h1 className="fs-3"><strong>Hello, Jane</strong></h1>
        <p className="fs-5">Let's make your shopping easier today.</p>
        <img src="src/assets/Banner.png" alt="Banner" className="img-fluid my-2" style={{ width: "100%", maxWidth: "600px" }} />

        <h2 className="fs-4 mt-3 mb-2"><strong>Browse Categories</strong></h2>
        <div className="row row-cols-3 gx-4">
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Meal Plan.png" className="card-img-top" alt="Meal Plan"/>
              <div className="card-body">
                <p className="card-title">Meal Plan</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Fruits.png" className="card-img-top" alt="Fruits"/>
              <div className="card-body">
                <p className="card-title">Fruits</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Vegetables.png" className="card-img-top" alt="Vegetables"/>
              <div className="card-body">
                <p className="card-title">Vegetables</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Dairy.png" className="card-img-top" alt="Dairy"/>
              <div className="card-body">
                <p className="card-title">Dairy</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Meats.png" className="card-img-top" alt="Meats"/>
              <div className="card-body">
                <p className="card-title">Meats</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img src="src/assets/Snacks.png" className="card-img-top" alt="Snacks"/>
              <div className="card-body">
                <p className="card-title">Snacks</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="fs-4 my-3"><strong>Deals</strong></h2>
        <img src="src/assets/Beast-Deal.png" alt="Beast-Deal" className="img-fluid" style={{ width: "100%", maxWidth: "600px" }} />
      </main>
    </>
  )
}