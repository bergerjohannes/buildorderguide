
import { useRef } from 'react'
import { Line } from 'react-chartjs-2'

const RatingsGraph = (props) => {

    const chartRef = useRef(null)

    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 14,
                    color: "#134e4a"
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false
                },
                ticks: {
                    stepSize: 100,
                    color: "#134e4a"
                },
                beginAtZero: false
            }
        }
    }

    const createGradient = (ctx, area) => {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

        gradient.addColorStop(0, '#ffffff')
        gradient.addColorStop(1, '#2dd4bf')

        return gradient
    }

    const prepareData = () => {
        let dataPoints = []
        let dataLabels = []

        props.data.forEach(element => {
            dataPoints.push(element.Elo)
            dataLabels.push(element.time)
        })

        const data = {
            labels: dataLabels,
            datasets: [{ data: dataPoints }]
        }

        if (chartRef === undefined) return
        const chart = chartRef.current
        if (!chart) return { labels: [], datasets: [{ data: [] }] }

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                label: 'Elo',
                borderWidth: 2,
                pointRadius: 0,
                fill: 'start',
                tension: 1,
                borderColor: '#2dd4bf',
                backgroundColor: createGradient(chart.ctx, chart.chartArea),
            })),
        }

        return chartData
    }

    if (props.data === undefined || props.data.length === 0) {
        return <></>
    } else {
        return <Line ref={chartRef} data={prepareData()} options={chartOptions} />
    }
}

export default RatingsGraph