import React from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Login(){
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: ""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
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
            <h1>Sign in to your account</h1>
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
                
                <button>Log in</button>
            </form>

            <p>Don’t have an account? <span><Link>Create one now</Link></span></p>
        </main>
    )
}