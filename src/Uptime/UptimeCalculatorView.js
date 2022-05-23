import React, { useState, useEffect } from 'react'
import CivInfoService from './CivInfoService.js'
import Select from 'react-select'
import Sidebar from '../UI/Sidebar.js'

const UptimeCalculatorView = (props) => {

    const selectStylesBig = {
        option: (provided, state) => ({
            ...provided,
            width: 320,
            backgroundColor: state.isFocused ? '#D1D5DB' : state.isSelected ? '#4B5563' : 'white',
            color: state.isFocused ? '#4B5563' : state.isSelected ? 'white' : '#4B5563',
            cursor: 'pointer'
        }),
        menu: base => ({
            ...base,
            width: 320,
            color: '#4B5563'
        }),
        control: () => ({
            width: 320,
            border: '2px solid #4B5563',
            borderRadius: 6,
            cursor: 'pointer'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const selectStylesSmall = {
        option: (provided, state) => ({
            ...provided,
            width: 50,
            backgroundColor: state.isFocused ? '#D1D5DB' : state.isSelected ? '#4B5563' : 'white',
            color: state.isFocused ? '#4B5563' : state.isSelected ? 'white' : '#4B5563',
            cursor: 'pointer'
        }),
        menu: base => ({
            ...base,
            width: 50,
            color: '#4B5563'
        }),
        control: () => ({
            width: 50,
            border: '2px solid #4B5563',
            borderRadius: 6,
            cursor: 'pointer'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const [civ, setCiv] = useState('Generic')
    const [pop, setPop] = useState(23)
    const [loom, setLoom] = useState('Yes')
    const [castle, setCastle] = useState('+2')
    const [uptimeFeudal, setUptimeFeudal] = useState('10:30')
    const [uptimeCastle, setUptimeCastle] = useState('14:00')

    useEffect(() => {
        calculateUptime()
    }, [civ, pop, loom, castle])

    const calculateUptime = () => {
        const popCastle = parseInt(castle.substring(1)) // Remove the plus sign in front of the pop
        const times = CivInfoService.getUptime(civ, pop, loom, popCastle)

        setUptimeFeudal(times['feudal'])
        setUptimeCastle(times['castle'])
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
            <Sidebar />
            <h1 class='text-4xl text-center bold text-gray-600 my-10'>Uptime Calculator</h1>
            <p class='w-11/12 max-w-lg mx-auto'>Select civilization, population when clicking up (including scout), and whether you researched loom to find out what time you should reach with flawless execution.</p>

            <form class='block mx-auto w-11/12 max-w-xs mt-12'>
                <label>
                    <h2>Civilization</h2>
                    <Select styles={selectStylesBig} isSearchable={true} defaultValue={civOptions[0]} onChange={civ => setCiv(civ.value)} options={civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                </label>

                <div class='flex justify-between'>
                    <label>
                        <h2>Pop</h2>
                        <Select styles={selectStylesSmall} isSearchable={false} defaultValue={popOptions[11]} onChange={pop => setPop(pop.value)} options={popOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                    </label>
                    <label>
                        <h2>Loom</h2>
                        <Select styles={selectStylesSmall} isSearchable={false} defaultValue={loomOptions[0]} onChange={loom => setLoom(loom.value)} options={loomOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                    </label>
                    <label>
                        <h2>FC</h2>
                        <Select styles={selectStylesSmall} isSearchable={false} defaultValue={castlePopAdditionOptions[2]} onChange={castle => setCastle(loom.value)} options={castlePopAdditionOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                    </label>
                </div>
            </form>

            <div class='flex flex-col w-11/12 mt-12 mx-auto'>
                <h3 class='text-center text-lg'>Feudal: <span class='italic'>{uptimeFeudal}</span></h3>
                <h3 class='text-center text-lg'>Castle: <span class='italic'>{uptimeCastle}</span></h3>
            </div>
        </div>
    )
}

export default UptimeCalculatorView