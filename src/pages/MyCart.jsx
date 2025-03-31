import {useEffect} from "react"

export default function MyCart() {
  useEffect(() => {
    document.title = "My Cart | SmartList"
  }, [])
  return(
    <main id="main">
      <h1>Welcome to my My Cart page!</h1>
      <p>This is the content of the My Cart page.</p>
    </main>
  )
}