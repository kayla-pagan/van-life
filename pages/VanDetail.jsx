import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        async function getVan(){
            const response = await fetch(`/api/vans/${params.id}`)
            const data = await response.json()
            setVan(data.vans)
        }

        getVan()
    }, [params.id])

    return (
        <h1>Van detail page goes here</h1>
    )
}