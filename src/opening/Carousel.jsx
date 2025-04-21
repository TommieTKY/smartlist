import { useEffect } from "react";
import screen1 from "../assets/Opening/OnboardingScreen1.png";
import screen2 from "../assets/Opening/OnboardingScreen2.png";
import screen3 from "../assets/Opening/OnboardingScreen3.png";
import dot1 from "../assets/Opening/dot1.png";
import dot2 from "../assets/Opening/dot2.png";
import dot3 from "../assets/Opening/dot3.png";

export default function Carousel() {
  useEffect(() => {
    document.title = "SmartList"
    document.getElementById("webpage").style.backgroundColor = "#FAF3E0";
  }, [])
    
  return(
    <main style={{ height: "100vh" }}>
      <div id="carousel" className="carousel slide">
        <div className="carousel-inner pt-4">
          <div className="carousel-item active">
            <img src={screen1} className="d-block w-100" alt="Plan your meals"/>
            <p className="text-center py-4 px-5 mx-2 fs-5" style={{}}>SmartList will help you plan your meals.</p>
            <img src={dot1} className="d-block mx-auto" style={{ width: "4.5rem" }} />
          </div>
          <div className="carousel-item">
            <img src={screen2} className="d-block w-100" alt="Manage the inventory"/>
            <p className="text-center py-4 px-5 mx-2 fs-5">SmartList will help you manage your inventory better.</p>
            <img src={dot2} className="d-block mx-auto" style={{ width: "4.5rem" }} />
          </div>
          <div className="carousel-item">
            <img src={screen3} className="d-block w-100" alt="Shop meals smarter and healthier"/>
            <p className="text-center py-4 px-5 mx-2 fs-5">SmartList will help you shop meals smarter and healthier.</p>
            <img src={dot3} className="d-block mx-auto" style={{ width: "4.5rem" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex justify-content-between w-100 mb-5 pb-3 px-4 fixed-bottom start-50 translate-middle-x" style={{ maxWidth:"430px"}}>
        <a href="/member" style={{ color: "#606360" }} className="text-decoration-none">Skip</a>
        <a data-bs-target="#carousel" data-bs-slide="next" style={{ color: "#4CAF50" }} className="text-decoration-none">Next</a>
      </div>
    </main>
  )
}