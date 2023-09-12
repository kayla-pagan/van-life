import React from "react"
import { FaStar } from "react-icons/fa6"

export default function Reviews(){
    return (
        <main className="reviews--main">
            <section className="reviews--title">
                <h1>Your Reviews</h1>
                <p>last <span>30 days</span></p>
            </section>

            <section className="reviews--overall-rating">
                <div className="reviews--overall-title">
                    <h2>5.0 <FaStar className="reviews--star" /></h2>
                    <p>overall rating</p>
                </div>
                
                <div>
                    <p>5 stars</p>
                    <div className="review--bar"></div>
                    <p>100%</p>
                </div>

                <div>
                    <p>4 stars</p>
                    <div className="review--bar"></div>
                    <p>0%</p>
                </div>

                <div>
                    <p>3 stars</p>
                    <div className="review--bar"></div>
                    <p>0%</p>
                </div>

                <div>
                    <p>2 stars</p>
                    <div className="review--bar"></div>
                    <p>0%</p>
                </div>

                <div>
                    <p>1 star</p>
                    <div className="review--bar"></div>
                    <p>0%</p>
                </div>
            </section>

            <section>
                <h2>Reviews (2)</h2>
                <div>
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div></div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div></div>
                    <p></p>
                </div>
            </section>
        </main>
    )
}