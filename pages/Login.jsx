import React from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { loginUser } from "../api"

export default function Login(){
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: ""})
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        async function authUser() {
            setStatus("submitting")
            try {
                const data = await loginUser(loginFormData)
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate("/host", { replace: true })
                
            } catch (err) {
                setError(err)
            } finally {
                setStatus("idle")
            }
        }
        authUser()
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
            {error && <p className="login-message">{error.message}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={loginFormData.email}
                />

                <input
                    name="password"
                    type="password"
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