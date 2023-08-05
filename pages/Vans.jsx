import React from "react"
import { Link } from 'react-router-dom'

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */


export default function Vans() {
    const [vans, setVans] = React.useState([])
    
    console.log(vans)
    
    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/vans')
            const data = await response.json()
            
            setVans(data.vans)
        }
        
        fetchData()
    }, [])
    
    const vanElements = vans.map(van => (
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
            <div className="vans-container">
                {vanElements}
            </div>
        </main>
    )
}