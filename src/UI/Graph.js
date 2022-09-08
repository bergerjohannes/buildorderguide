
import { useRef } from 'react'
import { Line } from 'react-chartjs-2'

const Graph = (props) => {

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
                    stepSize: 60,
                    color: "#134e4a",
                    callback: props.yAxisTicksCallback
                },
                beginAtZero: true
            }
        }
    }

    const createGradient = (ctx, area) => {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

        gradient.addColorStop(0, '#40546900')
        gradient.addColorStop(1, '#40546980')

        return gradient
    }

    const prepareData = () => {
        let dataPoints = []
        let dataLabels = []

        props.data.forEach(element => {
            dataPoints.push(element.valueYAxis)
            dataLabels.push(element.valueXAxis)
        })

        const data = {
            labels: dataLabels,
            datasets: [{ data: dataPoints }]
        }

        const chart = chartRef.current
        const backgroundColor = (!chart) ? '#405469' : createGradient(chart.ctx, chart.chartArea)

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                label: props.label,
                borderWidth: 2,
                pointRadius: 0,
                fill: 'start',
                tension: 1,
                borderColor: '#405469',
                backgroundColor: backgroundColor
            })),
        }

        return chartData
    }

    if (props.data === undefined || props.data.length === 0) {
        return <></>
    } else {
        return <Line datasetIdKey={props.id} ref={chartRef} data={prepareData()} options={chartOptions} />
    }
}

export default Graph