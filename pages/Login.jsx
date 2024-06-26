import React from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { logIn } from "../api"


export default function Login(){
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: ""})
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || '/host'

    function handleSubmit(e){
        e.preventDefault()
        e.stopPropagation()

        async function authUser() {
            setStatus("submitting")
            try {
                const userCredential = await logIn(loginFormData.email, loginFormData.password)
                setError(null)
                navigate(from, { replace: true })
                return userCredential
                
            } catch (err) {
                console.log(err)
                switch(err.message) {
                    case 'Firebase: Error (auth/invalid-email).':
                        setError("invalid email")
                        break

                    case 'Firebase: Error (auth/invalid-credential).':
                        setError("invalid credential")
                        break
                }
            } finally {
                setStatus("idle")
            }
        }
        authUser()

        return false
    }

    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }


    return (
        <main className="login-container">
            {location.state?.message && <p className="login-message">{location.state.message}</p>}
            <h1>Sign in to your account</h1>
            {error && <p className="login-message">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    type="email"
                    autoComplete="username"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={loginFormData.email}
                />

                <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={loginFormData.password}
                />
                
                <button disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>

            <p>Don’t have an account? <span><Link>Create one now</Link></span></p>
        </main>
    )
}