import { useEffect } from "react"

export default function Member() {
  useEffect(() => {
    document.title = "Member | SmartList"
  }, [])
  return(
    <main className="container p-4 fs-4 d-flex flex-column justify-content-center align-items-center gap-4 pt-5">
      <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: "300px", margin: "10rem 0" }} />
      <a href="/login" className="btn btn-success w-100 fs-4">Login</a>
      <a href="/signup" className="btn btn-success w-100 fs-4">Sign Up</a>
    </main>
  )
}