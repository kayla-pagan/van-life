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
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p><span>${van.price}</span><br />/day</p>
                    </div>

                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))
    
    return (
        <main className="van--main">
            <h1>Explore our van options</h1>
            <div className="van--filters">
                <Link to="?type=simple">Simple</Link>
                <Link to="?type=luxury">Luxury</Link>
                <Link to="?type=rugged">Rugged</Link>
                <Link to=".">Clear filters</Link>
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </main>
    )
}