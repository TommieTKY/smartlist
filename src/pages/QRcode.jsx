import {useEffect} from "react"

export default function QRcode() {
  useEffect(() => {
    document.title = "QR Code | SmartList"
  }, [])
  return(
    <main id="main">
      <h1>Welcome to my QR Code page!</h1>
      <p>This is the content of the QR Code page.</p>
    </main>
  )
}