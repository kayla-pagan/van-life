import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()

    React.useEffect(() => {
        async function getVan(){
            const response = await fetch(`/api/vans/${params.id}`)
            const data = await response.json()
            console.log(data)
        }

        getVan()
    }, [])

    return (
        <h1>Van detail page goes here</h1>
    )
}