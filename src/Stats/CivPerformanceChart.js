import { Scatter } from 'react-chartjs-2'
import CivInfoService from '../Uptime/CivInfoService.js'

const CivPerformanceChart = (props) => {


    let dataPoints = []
    let dataLabels = []
    let dataImages = []

    props.data.forEach((element, index) => {
        dataPoints.push({ x: element.games, y: parseInt(element.winPercentage) })
        dataLabels.push(CivInfoService.getCivilizationNameForIndex(index))
        let img = new Image(22, 22)
        img.src = require('../Images/Civilizations/' + CivInfoService.getCivilizationNameForIndex(index) + '.png')
        dataImages.push(img)
    })

    const data = {
        datasets: [
            {
                label: 'Civ Performance',
                labels: dataLabels,
                data: dataPoints,
                pointStyle: dataImages
            }
        ]
    }

    const options = {
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    drawBorder: false
                },
                ticks: {
                    stepSize: 10
                },
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (ctx) {
                        let label = ctx.dataset.labels[ctx.dataIndex]
                        label += ' (Games: ' + ctx.parsed.x + ', Won: ' + ctx.parsed.y + '%)'
                        return label
                    }
                }
            }
        }
    }

    if (props.data === undefined || props.data.length === 0) {
        return <></>
    } else {
        return <Scatter data={data} options={options} />
    }
}

export default CivPerformanceChart