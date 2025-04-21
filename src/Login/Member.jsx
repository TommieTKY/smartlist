import { useEffect } from "react"

export default function Member() {
  useEffect(() => {
    document.title = "Member | SmartList"
  }, [])
  return(
    <main style={{ height: "100vh" }} className="fs-4 d-flex flex-column justify-content-center align-items-center gap-4 mb-5 pb-5">
      <img src="/logo.png" alt="Logo" className="img-fluid w-100 mb-5" style={{ padding: "2rem" }} />
      <a href="/login" className="btn background-green w-100">Login</a>
      <a href="/signup" className="btn w-100" style={{background: "#E6F8E7", color: "#4CAF50", border:"1px solid #4CAF50"}}>Sign Up</a>
    </main>
  )
}