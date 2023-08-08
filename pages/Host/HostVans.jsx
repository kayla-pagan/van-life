import React from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        async function getHostVans(){
            const response = await fetch('/api/host/vans')
            const data = await response.json()
            setHostVans(data.vans)
        }

        getHostVans()

    }, [])

    const hostVanElements = hostVans?.map(van => {
            return(
                <Link key={van.id} to={van.id} className="host-van--tile">
                    <img src={van.imageUrl} />
                    <div className="host-van--info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </Link>
            )
    })
    
    return (
        <main className="host-van--main">
            <h1>Your listed vans</h1>
            { hostVans.length > 0 ? (
                <div className="host-vans-list">
                    {hostVanElements}
                </div>
            ) : (
                <h2>Loading...</h2> 
            )}
        </main>
    )
}