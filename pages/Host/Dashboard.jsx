import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"
import loadingGif from '../../assets/images/loading.gif'
import { FaStar } from "react-icons/fa6"

export default function Dashboard(){
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

    const hostVanElements = hostVans?.map(van => {
        return(
            <div key={van.id} to={van.id} className="host-van--tile">
                <img src={van.imageUrl} />
                <div className="host-van--info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        )
})

    return (
        <main className="dashboard--main">
            <section className="dashboard--income-container">
                <div className="dashboard--income-content">
                    <h1>Welcome!</h1>
                    <div>
                        <p>Income in the last <span>30 days</span></p>
                        <Link to="/host/income">Details</Link>
                    </div>
                    <h2>$2,260</h2>
                </div>
            </section>

            <section className="dashboard--reviews-container">
                <div className="dashboard--reviews-content">
                    <div>
                        <h2>Review score</h2>
                        <FaStar />
                        <p><span>5.0</span>/5</p>
                    </div>

                    <Link to="/host/reviews">Details</Link>
                </div>
            </section>

            <section className="dashboard--vans">
                <div className="dashboard--vans-container">
                    <div className="dashboard--vans-title">
                        <h2>Your listed vans</h2>
                        <Link to="/host/vans">View all</Link>
                    </div>
                    <div className="host-vans-list">
                        {error && <h1>There was an error: {error.message}</h1>}
                        {loading && (
                            <div className="loading-container">
                                <img src={loadingGif} />
                            </div>
                        )}
                        {hostVans.length > 0 && hostVanElements}
                    </div>
                </div>
            </section>
        </main>
    )
}