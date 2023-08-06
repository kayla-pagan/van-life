import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState(null)
    console.log(van)

    React.useEffect(() => {
        async function getVan(){
            const response = await fetch(`/api/vans/${params.id}`)
            const data = await response.json()
            setVan(data.vans)
        }

        getVan()
    }, [params.id])

    return (
        <main className="van-detail--main">
            {van ? (
                <div className="detail-container">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p className="detail--van-price"><span>${van.price}</span>/day</p>
                    <p className="detail--van-description">{van.description}</p>
                    <button>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </main>) 
}