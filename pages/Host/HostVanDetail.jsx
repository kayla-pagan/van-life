import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail(){
    const params = useParams()
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
        <div className="host--van-detail-container">
            
        </div>
    )
}