import { Link } from 'react-router-dom'
import PublishIndicator from './PublishIndicator'
import * as Constants from '../Constants'

const BuilderOverviewTable = (props) => {
    const getTitleForBuild = (build) => {
        return (build.title === undefined) ? 'x' : build.title
    }

    const getCivilizationForBuild = (build) => {
        const imageName = (build.civilization === undefined || build.civilization === '') ? Constants.Civ.Unknown : build.civilization
        return <div><img class='w-5 h-5' src={require('../Images/Civilizations/' + imageName + '.png')} alt={imageName} /></div>
    }

    const getPopForBuild = (build) => {
        if (build.pop === undefined || build.pop.feudalAge === undefined) return 'x'
        let pop = build.pop.feudalAge
        if (build.pop.castleAge !== undefined && build.pop.castleAge <= 4) pop += ' +' + build.pop.castleAge
        if (build.pop.imperialAge !== undefined && build.pop.imperialAge <= 4) pop += ' +' + build.pop.imperialAge
        return pop
    }

    const getAuthorForBuild = (build) => {
        return (build.author === undefined) ? 'x' : build.author
    }

    return (
        <div>
            {props.builds !== undefined && props.builds.length > 0 &&
                <div class='flex justify-center space-x-2'>
                    <p class='w-1/12'><strong>Civ</strong></p>
                    <p class='w-2/12'><strong>Pop</strong></p>
                    <p class='w-5/12'><strong>Name</strong></p>
                    <p class='w-3/12'><strong>Author</strong></p>
                    <p class='w-1/12'><strong>Status</strong></p>
                </div>
            }
            {props.builds !== undefined && props.builds.sort((a, b) => a.id - b.id).map(build => (
                <Link to={{ pathname: `/builder/build/${build.id}`, state: { title: build.title, id: build.id } }} >
                <div class='flex justify-center space-x-2'>
                    <p class='w-1/12'>{getCivilizationForBuild(build)}</p>
                    <p class='w-2/12'>{getPopForBuild(build)}</p>
                    <p class='w-5/12'>{getTitleForBuild(build)}</p>
                    <p class='w-3/12'>{getAuthorForBuild(build)}</p>
                    <p class='w-1/12'><PublishIndicator status={build.status} /></p>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default BuilderOverviewTable