import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
const [vanInfo] = useOutletContext()

console.log(vanInfo) 

    return (
        <div>
            <p><span>Name:</span> {vanInfo.name}</p>
            <br />
            <p><span>Category:</span> {vanInfo.type}</p>
            <br />
            <p><span>Description:</span> {vanInfo.description}</p>
            <br />
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}