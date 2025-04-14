import {useEffect} from "react"

export default function Search() {
  useEffect(() => {
    document.title = "Search | SmartList"
  }, [])
  return(
    <main id="main" className="container p-5">
      <h1>Welcome to my Search page!</h1>
      <h2>The content will be coming soon...</h2>
    </main>
  )
}