import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const [vanInfo] = useOutletContext()

    return (
        <img className="host-van-detail--photos" src={vanInfo.imageUrl} />
    )
}