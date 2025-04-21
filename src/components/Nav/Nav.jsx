import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-bottom py-1" style={{fontSize: "0.8rem"}}>
        <div className="container-fluid p-0">
            <div className="navbar-nav ms-auto d-flex flex-row w-100 justify-content-around">
              <a href="/home" className="nav-link text-center p-0">
                <i className="bi bi-house-door fs-3"></i>
                <div>Home</div>
              </a>              
              <a className="nav-link text-center p-0" href="/search">
                <i className="bi bi-search fs-3"></i>
                <div>Search</div>
              </a>
              <a className="nav-link text-center p-0" href="/smartlist">
                <i className="bi bi-list-check fs-3"></i>
                <div>Smartlist</div>
              </a>
              <a className="nav-link text-center p-0" href="/mycart">
                <i className="bi bi-cart fs-3"></i>
                <div>My Cart</div>  
              </a>
              <a className="nav-link text-center p-0" href="/qrcode">
                <i className="bi bi-qr-code-scan fs-3"></i>
                <div>QR Code</div>
              </a>
            </div>
        </div>
    </nav>
  )
}