import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function QRcode() {
  const videoRef = useRef(null);
  const [qrResult, setQrResult] = useState("");
  const [points, setPoints] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const codeReaderRef = useRef(null); // to store the reader instance

  useEffect(() => {
    document.title = "QR Code | SmartList";

    const codeReader = new BrowserMultiFormatReader();

    const startScanner = async () => {
      try {
        const videoInputDevices = await BrowserMultiFormatReader.listVideoInputDevices();
        const selectedDeviceId = videoInputDevices[0]?.deviceId;

        if (!selectedDeviceId) {
          console.error("No camera found");
          return;
        }

        codeReader.decodeFromVideoDevice(
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
                codeReader.reset();
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
    };

    startScanner();

    return () => {
      codeReader.reset(); // Clean up when component unmounts
    };
  }, []);

  const handlePopupClose = () => {
  setPopupVisible(false);
    // Optionally, you could restart the scanner here if you want to resume scanning
    // For example, you might call startScanner() again (after refactoring it outside the useEffect).
  };

  return (
    <main className="text-center">
      <h1>QR Code Scanner</h1>
      <video ref={videoRef} width="300" height="200" autoPlay />
      <p>Scanned QR Code: <strong>{qrResult}</strong></p>
      <p>Available points: {points}</p>

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
              textAlign: "center"
            }}
          >
            <p>
              You've earned 10pts! <br />
              Scan more bags to earn more
            </p>
            <button onClick={handlePopupClose}>Done</button>
          </div>
        </div>
      )}

    </main>
  );
}
