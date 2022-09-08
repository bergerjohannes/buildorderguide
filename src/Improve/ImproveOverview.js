import { useUserAuth } from '../Auth/Auth'
import { useEffect, useState } from 'react'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import * as Constants from '../Constants'
import Heading1 from '../UI/Heading1'
import LoadingIndicator from '../UI/LoadingIndicator'
import ErrorView from '../UI/ErrorView'
import ImproveService from './ImproveService'
import Graph from '../UI/Graph'
import ImproveFilterView from './ImproveFilterView'
import Heading2 from '../UI/Heading2'
import Centered from '../UI/Centered'


const ImproveOverview = (props) => {
    const { user, logOut } = useUserAuth()
    const [profileId, setProfileId] = useState(undefined)
    const [matchType, setMatchType] = useState(Constants.MatchType.OneVersusOne)
    const [error, setError] = useState(undefined)
    const [data, setData] = useState(undefined)
    const [filteredData, setFilteredData] = useState(undefined)
    const [geAPM, setGeAPM] = useState(undefined)
    const [feudalUptimes, setFeudalUptimes] = useState(undefined)
    const [castleUptimes, setCastleUptimes] = useState(undefined)
    const [imperialUptimes, setImperialUptimes] = useState(undefined)
    const [buildOrder, setBuildOrder] = useState(Constants.Build.Any)
    const [gameMode, setGameMode] = useState(Constants.GameMode.Any)
    const [map, setMap] = useState(Constants.Map.Any)
    const [civ, setCiv] = useState(Constants.Civ.Any)
    const [buildOrderOptions, setBuildOrderOptions] = useState(undefined)
    const [mapOptions, setMapOptions] = useState(undefined)
    const [civOptions, setCivOptions] = useState(undefined)
    const [gameModeOptions, setGameModeOptions] = useState(undefined) 
    const [winsCount, setWinsCount] = useState(undefined) 
    const [loaded, setLoaded] = useState(false) 

    useEffect(() => {
        DatabaseService.loadProfileInfo(user).then(userData => {
            if (userData.profile_id !== undefined && userData.profile_id !== '') setProfileId(userData.profile_id)
            else setError(Constants.Error.ProfileIdMissing)
        })
        DatabaseService.loadAllGamesForUser(user.uid).then(d => {
            setData(d)
        })
    }, [user])

    useEffect(() => {
        if (data !== undefined) prepareData()
    }, [data, civ, buildOrder, gameMode, map])

    const prepareData = () => {
        setFilteredData(ImproveService.getFilteredDataSet(data, gameMode, buildOrder, civ, map))
    }

    useEffect(() => {
        if (filteredData === undefined) return
        if (buildOrderOptions === undefined) setBuildOrderOptions(ImproveService.getBuildOrderOptionsFromDataSet(filteredData))
        if (mapOptions === undefined) setMapOptions(ImproveService.getMapOptionsFromDataSet(filteredData))
        if (civOptions === undefined) setCivOptions(ImproveService.getCivOptionsFromDataSet(filteredData))
        if (gameModeOptions === undefined) setGameModeOptions(ImproveService.getGameModeOptionsFromDataSet(filteredData))
        setGeAPM(ImproveService.getGEAPMFromData(filteredData))
        setFeudalUptimes(ImproveService.getFeudalAgeUptimeFromData(filteredData))
        setCastleUptimes(ImproveService.getCastleAgeUptimeFromData(filteredData))
        setImperialUptimes(ImproveService.getImperialAgeUptimeFromData(filteredData))
        setWinsCount(ImproveService.getWinsCountFromData(filteredData))
        setLoaded(true)
    }, [filteredData])

    if (error === Constants.Error.ProfileIdMissing) return (
        <div class='text-center'>
            <Menu />
            <Heading1>Improve your game</Heading1>
            <ErrorView title={'Profile Id missing'} description={'To load your stats, please enter your AoE II Profile Id.'} callToAction={'Add Id'} callToActionLink={'/profile'} />
        </div>
    )

    if (error === Constants.Error.LoadingDataUnsuccessful) return (
        <div class='text-center'>
            <Menu />
            <Heading1>Improve your game</Heading1>
            <ErrorView title={'Error loading data'} description={'Not able to load your data.'} />
        </div>
    )

    if (profileId === undefined) return (
        // Before id is loaded
        <div class='text-center'>
            <Menu />
            <Heading1>Improve your game</Heading1>
            <LoadingIndicator text={'Loading match data ..'} />
        </div>
    )

    return (
        <div>
            <Menu />
            <Heading1>Improve your game</Heading1>
            {loaded === false && <LoadingIndicator text={'Loading match data ..'} />}
            <ImproveFilterView buildOrder={buildOrder} setBuildOrder={setBuildOrder} buildOrderOptions={buildOrderOptions} civ={civ} setCiv={setCiv} civOptions={civOptions} map={map} setMap={setMap} mapOptions={mapOptions} gameMode={gameMode} setGameMode={setGameMode} gameModeOptions={gameModeOptions}/>
            {loaded && <Centered>Found <span class='whitespace-pre font-bold'> {filteredData.length} </span> games ({winsCount === undefined ? '?' : winsCount}/{filteredData.length} won) using the filter criteria.</Centered>}
            {geAPM !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><Heading2>Game-Effective APM</Heading2><Graph id={'geAPMGraph'} data={geAPM} label={'geAPM'} /></div>}
            {feudalUptimes !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><Heading2>Feudal Age Time</Heading2><Graph id={'feudalUptimesGraph'} data={feudalUptimes} label={'Feudal Age Uptime'} yAxisTicksCallback={(value) => `${Math.floor(value / 60)}:00`} /></div>}
            {castleUptimes !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><Heading2>Castle Age Time</Heading2><Graph id={'castleUptimesGraph'} data={castleUptimes} label={'Castle Age Uptime'} yAxisTicksCallback={(value) => `${Math.floor(value / 60)}:00`} /></div>}
            {imperialUptimes !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><Heading2>Imperial Age Time</Heading2><Graph id={'imperialUptimesGraph'} data={imperialUptimes} label={'Imperial Age Uptime'} yAxisTicksCallback={(value) => `${Math.floor(value / 60)}:00`} /></div>}
        </div>
    )
}

export default ImproveOverview