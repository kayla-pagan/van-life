import React from "react"
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
)

const options = {
    responsive: true,
    maintainAspectRatio: true,
    barPercentage: 0.3,
    scales: {
        x: {
            ticks: {
                font: {
                    size: 23
                }
            }
        },
        y: {
            max: 5000,
            min: 0,
            ticks: { 
                callback: function(value, index) {
                    return index % 2 === 0 ? "$" + value : ''
                },
                font: {
                    size: 18
                }
        }
    }
}
}

const labels = ['Ju', 'Au', 'Se', 'Oc', 'No', 'De']

const data = {
    labels,
    datasets: [
        {
            data: [4000, 1500, 3000, 2800, 1800, 500],
            backgroundColor: [
                'rgba(255, 234, 208, 1)',
                'rgba(255, 234, 208, 1)',
                'rgba(255, 234, 208, 1)',
                'rgba(255, 234, 208, 1)',
                'rgba(255, 140, 56, 1)',
                'rgba(255, 140, 56, 1)'            
            ],
            borderRadius: 5
    }]
}

export default function Income(){
    return (
        <main className="income--main">
            <section className="income--title">
                <h1>Income</h1>
                <p>Last <span>30 days</span></p>
                <h2>$2,260</h2>
            </section>

            
            <Bar data={data} options={options} />


            <section className="income--transactions">
                <div className="income--transactions-title">
                    <h2>Your transactions (3)</h2>
                    <p>Last <span>30 days</span></p>
                </div>

                <div className="income--transaction-div">
                    <h2>$720</h2>
                    <p>12/1/2023</p>
                </div>

                <div className="income--transaction-div">
                    <h2>$560</h2>
                    <p>11/23/2023</p>
                </div>

                <div className="income--transaction-div">
                    <h2>$980</h2>
                    <p>11/10/2023</p>
                </div>
            </section>
        </main>
    )
}