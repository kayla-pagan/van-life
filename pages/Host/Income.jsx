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

export const options = {
    responsive: true,
    scales: {
        y: {
            max: 5000,
            min: 0,
            ticks: { 
                callback: function(value, index) {
                    return index % 2 === 0 ? `$${value}` : '';
                }
        }
    }
}
}

const labels = ['Ju', 'Au', 'Se', 'Oc', 'No', 'De']

export const data = {
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
            ]
    }]
}

export default function Income(){
    return (
        <main className="income--main">
            <h1>Income</h1>
            <p>Last <span>30 days</span></p>
            <h2>$2,260</h2>
            <Bar data={data} options={options} />
        </main>
    )
}