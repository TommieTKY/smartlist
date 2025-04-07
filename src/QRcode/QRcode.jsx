// QRcode.jsx
import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function QRcode() {
  const videoRef = useRef(null);
  const [qrResult, setQrResult] = useState("");

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
              setQrResult(result.getText());
              console.log("QR Code Scanned:", result.getText());
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

  return (
    <main className="text-center">
      <h1>QR Code Scanner</h1>
      <video ref={videoRef} width="300" height="200" />
      <p>Scanned QR Code: <strong>{qrResult}</strong></p>
    </main>
  );
}
