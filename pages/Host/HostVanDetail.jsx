import React from "react"
import { useParams } from "react-router-dom"

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
            {vanInfo ? (
                <div className="host-van-detail--container">
                    <img src={vanInfo[0].imageUrl} />
                    <div className="">
                        <i className={`van-type ${vanInfo[0].type} selected`}>{vanInfo[0].type}</i>
                        <h3>{vanInfo[0].name}</h3>
                        <p>${vanInfo[0].price}/day</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}