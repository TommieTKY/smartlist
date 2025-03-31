import {useEffect} from "react"

export default function Search() {
  useEffect(() => {
    document.title = "Search | SmartList"
  }, [])
  return(
    <main id="main">
      <h1>Welcome to my Search page!</h1>
      <p>This is the content of the search page.</p>
    </main>
  )
}