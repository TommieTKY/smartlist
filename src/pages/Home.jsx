import {useEffect} from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Home | SmartList"
  }, [])
  return(
    <main id="main">
      <h1>Welcome to my home page!</h1>
      <p>This is the content of the home page.</p>
    </main>
  )
}