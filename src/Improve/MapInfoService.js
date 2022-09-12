import MapData from './MapData'

class MapInfoService {

    static getMapNameForId = (id) => {
        const maps = MapData.maps
        let map

        try { map = maps[id].name }
        catch (err) { map = 'Unknown' }

        return map
    }

    static getMapImageForId = (id) => {
        const maps = MapData.maps
        let map

        try { map = maps[id].image }
        catch (err) { map = 'cm_generic.png' }

        return map
    }
}

export default MapInfoService