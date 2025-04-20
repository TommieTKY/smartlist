import { useEffect, useRef, useState, useCallback } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function QRcode() {
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
      
      const videoInputDevices = await BrowserMultiFormatReader.listVideoInputDevices();
      const selectedDeviceId = videoInputDevices[0]?.deviceId;

      if (!selectedDeviceId) {
        console.error("No camera found");
        return;
      }

      // Use the codeReaderRef instance
      codeReaderRef.current.decodeFromVideoDevice(
        selectedDeviceId,
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
    <main className="container p-4 fs-4">
      <div>
        <a href="/qrcode" className="text-dark">
          <i className="bi bi-arrow-left"></i> Back
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-4 border rounded">
        <video ref={videoRef} width="250" height="500" autoPlay />
      </div>
      <div style={{ fontSize: "1.2rem" }} className="text-center mt-5">
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
                top: "15px",
                right: "15px",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            ></i>
            <div className="fs-1 mt-4">
              You've earned <span className="text-success">10pts!</span>
            </div>
            <p className="fs-5">Scan more bags to earn more</p>
            <button onClick={handlePopupClose} className="btn btn-success w-75">
              Done
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
