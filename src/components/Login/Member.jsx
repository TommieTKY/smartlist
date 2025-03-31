import { useEffect } from "react"

export default function Member() {
  useEffect(() => {
    document.title = "Member | SmartList"
  }, [])
  return(
    <div>
      <h1>SmartList</h1>
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    </div>
  )
}