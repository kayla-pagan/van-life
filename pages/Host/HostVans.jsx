import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"
import loadingGif from "/assets/images/loading.gif"

export default function HostVans(){
    const [hostVans, setHostVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadHostVans(){
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadHostVans()

    }, [])

    // Put these next 2 ifs in a utility file since this is the second time I use this??

    if(loading){
        return (
            <main className="loading-container">
                <img src={loadingGif} />
            </main>
        )
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

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
            { hostVans.length > 0 && (
                <div className="host-vans-list">
                    {hostVanElements}
                </div>
            )}
        </main>
    )
}