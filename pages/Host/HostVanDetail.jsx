import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { getVan } from "../../api"
import loadingGif from "/assets/images/loading.gif"

export default function HostVanDetail(){
    const [vanInfo, setVanInfo] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVanInfo(data)
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
    
    return (
        <main className="host-van-detail--main">
            <div className="back">
                <HiArrowNarrowLeft />
                <Link to=".." relative="path">Back to all vans</Link>
            </div>

            {vanInfo ? (
                <div className="host-van-detail--container">
                    <div className="host-van-detail">
                        <img src={vanInfo.imageUrl} />
                        <div className="host-van--title">
                            <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
                            <h3>{vanInfo.name}</h3>
                            <p><span>${vanInfo.price}</span>/day</p>
                        </div>
                    </div>

                    <nav className="host-van-detail--nav">
                        <NavLink 
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyle : null}
                        >
                            Details
                        </NavLink>
                        
                        <NavLink 
                        to="pricing"
                        style={({isActive}) => isActive ? activeStyle : null}
                        >
                            Pricing
                        </NavLink>
                        
                        <NavLink 
                        to="photos"
                        style={({isActive}) => isActive ? activeStyle : null}
                        >
                            Photos
                        </NavLink>  
                    </nav>   

                    <Outlet  context={[vanInfo]} />
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}