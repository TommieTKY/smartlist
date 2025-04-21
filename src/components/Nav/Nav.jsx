import { NavLink } from "react-router";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-bottom py-1" style={{ fontSize: "0.8rem" }}>
      <div className="container-fluid p-0">
        <div className="navbar-nav ms-auto d-flex flex-row w-100 justify-content-around">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav-link text-center p-0 ${isActive ? "text-success" : "text-muted"}`
            }
          >
            <i className="bi bi-house-door fs-3"></i>
            <div>Home</div>
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `nav-link text-center p-0 ${isActive ? "text-success" : "text-muted"}`
            }
          >
            <i className="bi bi-search fs-3"></i>
            <div>Search</div>
          </NavLink>

          <NavLink
            to="/smartlist"
            className={({ isActive }) =>
              `nav-link text-center p-0 ${isActive ? "text-success" : "text-muted"}`
            }
          >
            <i className="bi bi-list-check fs-3"></i>
            <div>Smartlist</div>
          </NavLink>

          <NavLink
            to="/mycart"
            className={({ isActive }) =>
              `nav-link text-center p-0 ${isActive ? "text-success" : "text-muted"}`
            }
          >
            <i className="bi bi-cart fs-3"></i>
            <div>My Cart</div>
          </NavLink>

          <NavLink
            to="/qrcode"
            className={({ isActive }) =>
              `nav-link text-center p-0 ${isActive ? "text-success" : "text-muted"}`
            }
          >
            <i className="bi bi-qr-code-scan fs-3"></i>
            <div>QR Code</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
