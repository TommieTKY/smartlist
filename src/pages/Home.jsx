import { useEffect } from "react";
import {Link, NavLink} from "react-router";

export default function Home() {
  useEffect(() => {
    document.title = "Home | SmartList"
  }, [])
  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
        <Link to="/">Smart List</Link>
        <i className="bi bi-person-circle"></i>
      </header>
      <main id="main">
        <div className="text-center">
          <i className="bi bi-basket" style={{ fontSize: "10rem" }}></i>
        </div>
        <h1>Browse</h1>
      </main>
    </>
  )
}