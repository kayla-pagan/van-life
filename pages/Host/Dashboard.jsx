import React from "react"
import { Link } from "react-router-dom"

export default function Dashboard(){
    return (
        <main className="dashboard--main">
            <div className="dashboard--income">
                <div>
                    <h1>Welcome!</h1>
                    <div className="income-info">
                        <p>Income in the last <span>30 days</span></p>
                        <Link to="/host/income">Details</Link>
                    </div>
                    <h2>$2,260</h2>
                </div>
            </div>
            <div className="dashboard--reviews"></div>
            <div className="dashboard--vans"></div>
        </main>
    )
}