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
                    <h2>5.0</h2>
                    <p><FaStar /> overall rating</p>
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

            <section className="reviews--individual-display">
                <h2>Reviews (2)</h2>
                <div className="reviews--individual-review">
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div>
                        <p><span>Elliot</span> December 1, 2023</p>
                    </div>
                    <p>
                        The beach bum is such as awesome van! Such as comfortable trip. 
                        We had it for 2 weeks and there was not a single issue. 
                        Super clean when we picked it up and the host is very comfortable and understanding. 
                        Highly recommend!
                    </p>
                </div>
                
                <div className="reviews--individual-review">
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div>
                        <p><span>Sandy</span> November 23, 2023</p>
                    </div>
                    <p>
                        This is our third time using the Modest Explorer for our travels and we love it! 
                        No complaints, absolutely perfect!
                    </p>
                </div>
            </section>
        </main>
    )
}