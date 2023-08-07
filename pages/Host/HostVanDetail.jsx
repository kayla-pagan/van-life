import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function HostVanDetail(){
    const params = useParams()
    const [vanInfo, setVanInfo] = React.useState(null)
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

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

                    <Outlet />
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}