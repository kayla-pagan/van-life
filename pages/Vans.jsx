import React from 'react'

export default function Vans(){
    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/vans')
            const data = await response.json()
            
            console.log(data)
        }
        
        fetchData()
    }, [])

    return (
        <main>
            <h1>Explore our van options</h1>
        </main>
    )
}