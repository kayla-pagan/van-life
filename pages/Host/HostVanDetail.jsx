import React from "react"
import { useParams, Link } from "react-router-dom"
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
                <Link to={"/host/vans"}>Back to all vans</Link>
            </div>

            {vanInfo ? (
                <div className="host-van-detail--container">
                    <img src={vanInfo.imageUrl} />
                    <div className="host-van--info">
                        <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
                        <h3>{vanInfo.name}</h3>
                        <p><span>${vanInfo.price}</span>/day</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}