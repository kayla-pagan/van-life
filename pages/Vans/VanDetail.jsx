import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { getVan } from "../../api"
import loadingGif from "/assets/images/loading.gif"

export default function VanDetail(){
    const { id } = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

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

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <main className="van-detail--main">
            <div className="back all-vans">
                <HiArrowNarrowLeft />
                <Link to={`..${search}`} relative="path">Back to {type} vans</Link>
            </div>
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