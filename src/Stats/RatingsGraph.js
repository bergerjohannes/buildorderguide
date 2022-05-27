
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const RatingsGraph = (props) => {

    const graphOptions = {
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 14
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false
                },
                ticks: {
                    stepSize: 100
                },
                beginAtZero: false
            }
        }
    }

    let dataPoints = []
    let dataLabels = []

    props.data.forEach(element => {
        dataPoints.push(element.Elo)
        dataLabels.push(element.time)
    })

    const data = {
        labels: dataLabels,
        datasets: [
            {
                label: 'Elo',
                data: dataPoints,
                borderWidth: 2,
                pointRadius: 0,
                fill: 'start',
                tension: 1,
                borderColor: '#405469'
            }
        ]
    }

    if (props.data === undefined || props.data.length === 0) {
        return <></>
    } else {
        return <Line data={data} options={graphOptions}/>
    }
}

export default RatingsGraph