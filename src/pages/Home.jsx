import { useEffect } from "react";
import {Link, NavLink} from "react-router";

export default function Home() {
  useEffect(() => {
    document.title = "Home | SmartList"
  }, [])
  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
        <div className="d-flex align-items-center gap-2">
          <img src="src/assets/logo.png" alt="Logo" style={{ width: "2rem" }} />
          <p className="fs-3 mb-0">Smart List</p>
        </div>
        <img src="src/assets/Profile.png" alt="Profile" style={{ width: "2rem" }} />
      </header>
      <main id="main" className="container p-4">
        <div className="text-center">
        </div>
        <h1 className="fs-3"><strong>Hello, Jane</strong></h1>
        <p className="fs-5">Let's make your shopping easier today.</p>
        <img src="src/assets/Banner.png" alt="Banner" className="img-fluid" style={{ width: "100%", maxWidth: "600px" }} />

        <h2 className="fs-4 mt-4 mb-3"><strong>Browse Categories</strong></h2>
        <div class="row row-cols-3 g-4 p-3">
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Meal Plan.png" class="card-img-top" alt="Meal Plan"/>
              <div class="card-body">
                <p class="card-title">Meal Plan</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Fruits.png" class="card-img-top" alt="Fruits"/>
              <div class="card-body">
                <p class="card-title">Fruits</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Vegetables.png" class="card-img-top" alt="Vegetables"/>
              <div class="card-body">
                <p class="card-title">Vegetables</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Dairy.png" class="card-img-top" alt="Dairy"/>
              <div class="card-body">
                <p class="card-title">Dairy</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Meats.png" class="card-img-top" alt="Meats"/>
              <div class="card-body">
                <p class="card-title">Meats</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="src/assets/Snacks.png" class="card-img-top" alt="Snacks"/>
              <div class="card-body">
                <p class="card-title">Snacks</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="fs-4 mt-4 mb-3"><strong>Deals</strong></h2>
        <img src="src/assets/Beast-Deal.png" alt="Beast-Deal" className="img-fluid" style={{ width: "100%", maxWidth: "600px" }} />
      </main>
    </>
  )
}