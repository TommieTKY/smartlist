import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-bottom mb-4 pb-3">
        <div className="container-fluid">
            <div className="navbar-nav ms-auto d-flex flex-row w-100 justify-content-around">
              <a href="/home" className="nav-link text-center">
                <i className="bi bi-house-door fs-3"></i>
                <div>Home</div>
              </a>              
              <a className="nav-link text-center" href="/search">
                <i className="bi bi-search fs-3"></i>
                <div>Search</div>
              </a>
              <a className="nav-link text-center" href="/smartlist">
                <i className="bi bi-list-check fs-3"></i>
                <div>Smartlist</div>
              </a>
              <a className="nav-link text-center " href="/mycart">
                <i className="bi bi-cart fs-3"></i>
                <div>My Cart</div>  
              </a>
              <a className="nav-link text-center" href="/qrcode">
                <i className="bi bi-qr-code-scan fs-3"></i>
                <div>QR Code</div>
              </a>
            </div>
        </div>
    </nav>
  )
}