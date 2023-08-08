import React from "react"
import { Link, useSearchParams } from 'react-router-dom'


export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    console.log(typeFilter)
    
    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/vans')
            const data = await response.json()
            
            setVans(data.vans)
        }
        
        fetchData()
    }, [])

    const displayedVans = typeFilter ? 
    vans.filter(van => van.type.toLowerCase() === typeFilter) 
    : vans
    
    const vanElements = displayedVans.map(van => (
            <div key={van.id} className="van-tile">
                <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
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