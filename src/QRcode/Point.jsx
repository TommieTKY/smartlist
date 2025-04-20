import { useEffect } from "react"
import memberQRcode from "../assets/QRcode/qrcode_2234-4356.png"

export default function Point() {
  useEffect(() => {
    document.title = "Point | SmartList";
  }, []);

  return (
    <main className="container p-4 fs-4">
      <div>
        <a href="/home" className="text-dark"><i className="bi bi-arrow-left"></i> Back</a>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 p-3 border rounded">
            <span>Available points</span>
            <span>10,000pts</span>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <span>Reward Number</span>
            <span className="fs-1 text-success"><strong>2234-4356</strong></span>
        </div>
      <div className="p-3 mt-3 mb-5 mx-5 border rounded">
          <img src={memberQRcode} alt="Member QR Code" className="img-fluid my-3" />
      </div>
      <div style={{ fontSize: "1.2rem" }} className="text-center mt-5">
            <p className="">Earn points when you return shopping bags</p>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
          <a href="/scan" className="btn btn-success fs-2 w-100"><i class="bi bi-upc-scan"></i>  Scan Code</a>
      </div>
    </main>
  );
}
