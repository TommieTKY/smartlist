import { useEffect } from "react"

export default function Signup() {
    useEffect(() => {
        document.title = "Sign Up | SmartList"
    }, [])
  return(
    <div>
        <h1>Welcome!</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name"/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email"/>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="phone"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="passwordHelp"/>
                <div id="passwordHelp" className="form-text">
                    <p>Use at least 8 characters long.</p>
                    <p>Include a number or special character.</p>
                    <p>Avoid common words like ‘password’ or ‘123456’</p>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
    </div>
  )
}