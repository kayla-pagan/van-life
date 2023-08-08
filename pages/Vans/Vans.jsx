import React from "react"
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from "../../api"


export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }
        
        loadVans()
    }, [])

    const displayedVans = typeFilter ? 
    vans.filter(van => van.type.toLowerCase() === typeFilter) 
    : vans
    
    const vanElements = displayedVans.map(van => (
            <div key={van.id} className="van-tile">
                <Link 
                    to={van.id} 
                    state={{ 
                        search: `?${searchParams.toString()}`,
                        type: typeFilter 
                        }}
                >
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p><span>${van.price}</span><br />/day</p>
                    </div>

                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if(loading){
        return (
            <main className="loading-container">
                <img src="./assets/images/loading.gif" />
            </main>
        )
    }
    
    return (
        <main className="van--main">
            <h1>Explore our van options</h1>
            <div className="van--filters">
                <button 
                    onClick={() => handleFilterChange("type", "simple")} 
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >
                    Simple
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >
                    Luxury
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >
                    Rugged
                </button>
                {typeFilter ? (
                <button 
                    onClick={() => handleFilterChange("type", null)}
                    className="clear"
                >
                    Clear filters
                </button>) : null}
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </main>
    )
}