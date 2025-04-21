import { useEffect, useRef, useState, useCallback } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function Scan() {
  const videoRef = useRef(null);
  const [qrResult, setQrResult] = useState("");
  const [points, setPoints] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const codeReaderRef = useRef(null); // to store the reader instance

  const startScanner = useCallback(async () => {
    try {
      // If there's no code reader instance yet, create one and store it in the ref.
      if (!codeReaderRef.current) {
        codeReaderRef.current = new BrowserMultiFormatReader();
      }
      
      // Use the codeReaderRef instance
      codeReaderRef.current.decodeFromVideoDevice(
        undefined,
        videoRef.current,
        (result, err) => {
          if (result) {
            const scannedurl = result.getText();
            setQrResult(scannedurl);
            console.log("QR Code Scanned:", scannedurl);
            
            if (scannedurl === "https://smartlist.com/redeem?pt=10") {
              setPoints(prevPoints => prevPoints + 10);
              setPopupVisible(true);
              codeReaderRef.current.reset();
            }
          }
          if (err) {
            console.error(err);
          }
        }
      );
    } catch (err) {
      console.error("Camera error:", err);
    }
  }, []);

  useEffect(() => {
    document.title = "Scan | SmartList";

    // Create the codeReader instance right away and store it in the ref.
    if (!codeReaderRef.current) {
      codeReaderRef.current = new BrowserMultiFormatReader();
    }
    startScanner();

    return () => {
      if (codeReaderRef.current) {
        codeReaderRef.current.reset(); // Clean up when component unmounts        
      }
    };
  }, [startScanner]);

  const handlePopupClose = () => {
    setPopupVisible(false);
    startScanner();
  };

  return (
    <main className="container page-bottom point-font pt-4">
      <div>
        <a href="/qrcode" className="text-dark text-decoration-none">
          <i className="bi bi-arrow-left"></i> Back
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-4 border rounded">
        <video ref={videoRef} width="250" height="300" autoPlay />
      </div>
      <div className="text-center mt-5">
        <p>Use the camera to scan the shopping bag QR code to claim points!</p>
      </div>

      {popupVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              position: "relative"
            }}
          >
            <i
              className="bi bi-x-circle"
              onClick={handlePopupClose}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                cursor: "pointer"
              }}
            ></i>
            <div className="fs-4 mt-5">
              You've earned <span style={{color:"#4CAF50"}}>10pts!</span>
            </div>
            <p className="m-1">Scan more bags to earn more</p>
            <button onClick={handlePopupClose} className="btn background-green w-75 mt-4">
              Done
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
