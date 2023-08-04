import React from "react"

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
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<br />/day</p>
                </div>
            </div>
        ))
    
    return (
        <main className="vans-container">
        {vanElements}
        </main>
    )
}