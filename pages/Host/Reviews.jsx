import React from "react"
import { FaStar } from "react-icons/fa6"

export default function Reviews(){
    return (
        <main className="reviews--main">
            <section>
                <h1>Your Reviews</h1>
                <p>last <span>30 days</span></p>
            </section>

            <section>
                <div>
                    <h2>5.0 <FaStar /></h2>
                    <p>overall rating</p>
                </div>
                

            </section>
        </main>
    )
}