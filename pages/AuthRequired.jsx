import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { verifyUser } from "../api"

export default function AuthRequired(){
    const [authUser, setAuthUser] = React.useState(null)
    const [authComplete, setAuthComplete] = React.useState(false)
    const location = useLocation()

    React.useEffect(() => {
        verifyUser(setAuthUser, setAuthComplete)
    }, [getAuth().currentUser])

    

    return (
        <>
           {
                authComplete ? authUser !== null ? 
                    <Outlet />
                : 
                    <Navigate 
                        to="/login" 
                        state={{
                            message: "You must log in first",
                            from: location.pathname 
                        }} 
                        replace
                    /> 
                : 
                    null
            }
        </>
    )
}
