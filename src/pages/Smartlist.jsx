import {useEffect} from "react"

export default function Smartlist() {
  useEffect(() => {
    document.title = "Smartlist | SmartList"
  }, [])
  return(
    <main id="main">
      <h1>Welcome to my Smartlist page!</h1>
      <p>This is the content of the Smartlist page.</p>
    </main>
  )
}