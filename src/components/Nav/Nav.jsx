export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-light fixed-bottom mb-5">
        <div className="container-fluid">
            <div className="navbar-nav ms-auto d-flex flex-row w-100 justify-content-around">
                <a className="nav-link" href="/home">Home</a>              
                <a className="nav-link" href="/search">Search</a>
                <a className="nav-link" href="/smartlist">Smartlist</a>
                <a className="nav-link" href="/mycart">My Cart</a>
                <a className="nav-link" href="/qrcode">QR Code</a>
            </div>
        </div>
    </nav>
  )
}