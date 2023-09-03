import React from "react"
import { Link } from "react-router-dom"

export default function Dashboard(){
    return (
        <main className="dashboard--main">
            <div className="dashboard--income-container">
                <div className="dashboard--income-content">
                    <h1>Welcome!</h1>
                    <div>
                        <p>Income in the last <span>30 days</span></p>
                        <Link to="/host/income">Details</Link>
                    </div>
                    <h2>$2,260</h2>
                </div>
            </div>
            <div className="dashboard--reviews-container">
                <div className="dashboard--reviews-content">
                    <div>
                        <h2>Review score</h2>
                        <p>⭐<span>5.0</span>/5</p>
                    </div>

                    <Link to="/host/reviews">Details</Link>
                </div>
            </div>
            <div className="dashboard--vans">
                <div className="dashboard--vans-container">
                    <div>
                        <h2>Your listed vans</h2>
                        <Link>View all</Link>
                    </div>
                    <div>
                        {/* list of vans will go here */}
                    </div>
                </div>
            </div>
        </main>
    )
}