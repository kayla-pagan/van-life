import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const [vanInfo] = useOutletContext()

    return (
        <p className="host-van--pricing"><span>${vanInfo.price}.00</span>/day</p>
    )
}