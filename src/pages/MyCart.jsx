import {useEffect} from "react"

export default function MyCart() {
  useEffect(() => {
    document.title = "My Cart | SmartList"
  }, [])
  return(
    <main id="main" className="container p-5">
      <h1>Welcome to my My Cart page!</h1>
      <h2>The content will be coming soon...</h2>
    </main>
  )
}