import { useEffect } from "react"
import memberQRcode from "../assets/QRcode/qrcode_2234-4356.png"

export default function Point() {
  useEffect(() => {
    document.title = "Point | SmartList";
  }, []);

  return (
    <main className="container point-font page-bottom pt-4">
      <div>
        <a href="/home" className="text-dark text-decoration-none"><i className="bi bi-arrow-left "></i> Back</a>
      </div>
      <div className="d-flex justify-content-between align-items-center my-4 p-3 border rounded">
            <span>Available points</span>
            <span>10,000pts</span>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <span>Reward Number</span>
            <span className="fs-1" style={{color:"#458948"}}><strong>2234-4356</strong></span>
        </div>
      <div className="p-3 mt-3 mb-5 mx-5 border rounded">
          <img src={memberQRcode} alt="Member QR Code" className="img-fluid my-3" />
      </div>
      <div className="text-center mt-5">
            <p className="">Earn points when you return shopping bags</p>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
          <a href="/scan" className="btn background-green w-100 p-2"><i className="bi bi-upc-scan me-3"></i><span>Scan Code</span></a>
      </div>
    </main>
  );
}
