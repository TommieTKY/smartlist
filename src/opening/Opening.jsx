import { useEffect } from "react";
import { useNavigate } from "react-router";
import logo_opening from "../assets/Opening/logo_opening.png";


export default function Opening() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "SmartList"
    document.getElementById("webpage").style.backgroundColor = "#4CAF50";

    const timer = setTimeout(() => {
      navigate("/carousel");
    }, 2000);
    
    return () => clearTimeout(timer); // Clean up
  }, [navigate]);
  
  return (
    <main style={{ height: "100vh" }}>
      <a href="/carousel">
        <img src={logo_opening} alt="Logo" className="img-fluid w-100" style={{ margin: "6rem 0 0 0" }} />
      </a>
    </main>
  );
}