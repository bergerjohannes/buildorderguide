import React, { useState, useEffect } from 'react'
import CivInfoService from './CivInfoService.js'
import Menu from '../UI/Menu.js'
import Heading1 from '../UI/Heading1.js'
import Paragraph from '../UI/Paragraph.js'
import UptimeIndicator from '../Builds/UptimeIndicator.js'
import Heading2 from '../UI/Heading2.js'
import Dropdown from '../UI/Dropdown.js'

const UptimeCalculatorView = (props) => {

    const [civ, setCiv] = useState('Generic')
    const [pop, setPop] = useState(23)
    const [loom, setLoom] = useState('Yes')
    const [castle, setCastle] = useState('+2')
    const [uptimes, setUptimes] = useState({ 'feudalAge': '10:30', 'castleAge': '14:00' })

    useEffect(() => {
        calculateUptime()
    }, [civ, pop, loom, castle])

    const calculateUptime = () => {
        const popCastle = parseInt(castle.substring(1)) // Remove the plus sign in front of the pop
        const times = CivInfoService.getUptime(civ, pop, loom, popCastle)
        setUptimes(times)
    }


    const popOptions = Array(24).fill().map((_, i) => { return { value: i + 12, label: i + 12 } })
    const loomOptions = [{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]

    let civOptions = [{ value: 'Generic', label: <div class='flex'><img class='w-6 h-6 mr-2' src={require('../Images/Civilizations/Generic.png')} alt={'Generic'} />Generic</div> }]
    CivInfoService.getCivilizations().forEach((item, i) => {
        civOptions.push({ value: item, label: <div class='flex'><img class='w-6 h-6 mr-2' src={require('../Images/Civilizations/' + item + '.png')} alt={item} />{item}</div> })
    })

    let castlePopAdditionOptions = []
    for (var i = 0; i <= 5; i++) castlePopAdditionOptions.push({ value: '+' + i, label: '+' + i })

    return (
        <div>
            <Menu />
            <Heading1 class='text-4xl text-center bold text-gray-600 my-10'>Uptime Calculator</Heading1>
            <Paragraph>Select civilization, population when clicking up (including scout), and whether you researched loom to find out what time you should reach with flawless execution.</Paragraph>

            <form class='flex flex-col mx-auto w-11/12 max-w-md mt-12'>
                <div>
                    <Heading2>Civilization</Heading2>
                    <Dropdown isSearchable={true} value={civ} onChange={civ => setCiv(civ.value)} options={civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                </div>
                <div class='mt-6'>
                    <Heading2>Pop</Heading2>
                    <Dropdown isSearchable={false} value={pop} onChange={pop => setPop(pop.value)} options={popOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                </div>
                <div class='mt-6'>
                    <Heading2>Loom</Heading2>
                    <Dropdown isSearchable={false} value={loom} onChange={loom => setLoom(loom.value)} options={loomOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                </div>
                <div class='mt-6'>
                    <Heading2>FC</Heading2>
                    <Dropdown isSearchable={false} value={castle} onChange={castle => setCastle(loom.value)} options={castlePopAdditionOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                </div>
            </form>

            <div class='flex justify-center w-11/12 mt-12 mx-auto'>
                <UptimeIndicator uptime={uptimes} />
            </div>
        </div>
    )
}

export default UptimeCalculatorView