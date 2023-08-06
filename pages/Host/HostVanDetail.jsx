import React from "react"
import { useParams, Link } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function HostVanDetail(){
    const params = useParams()
    console.log(params)
    const [vanInfo, setVanInfo] = React.useState(null)
    console.log(vanInfo)

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
                    <img src={vanInfo[0].imageUrl} />
                    <div className="host-van--info">
                        <i className={`van-type ${vanInfo[0].type} selected`}>{vanInfo[0].type}</i>
                        <h3>{vanInfo[0].name}</h3>
                        <p><span>${vanInfo[0].price}</span>/day</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}