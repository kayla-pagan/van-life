import React from "react"
import { useParams, Link, Outlet } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function HostVanDetail(){
    const params = useParams()
    const [vanInfo, setVanInfo] = React.useState(null)

    React.useEffect(() => {
        async function getVanInfo(){
            const response = await fetch(`/api/host/vans/${params.id}`)
            const data = await response.json()
            setVanInfo(data.vans)
        }
        
        getVanInfo()

    }, [params.id])
    
    return (
        <main className="host-van-detail--main">
            <div className="host-van--back">
                <HiArrowNarrowLeft />
                <Link to=".." relative="path">Back to all vans</Link>
            </div>

            {vanInfo ? (
                <div className="host-van-detail--container">
                    <div className="host-van--detail">
                        <img src={vanInfo.imageUrl} />
                        <div className="host-van--title">
                            <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
                            <h3>{vanInfo.name}</h3>
                            <p><span>${vanInfo.price}</span>/day</p>
                        </div>
                    </div>
                        
                    <Outlet />
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}