import { Link } from 'react-router-dom'
import PublishIndicator from './PublishIndicator'
import * as Constants from '../Constants'

const BuilderOverviewTable = (props) => {
    const getTitleForBuild = (build) => {
        return (build.title === undefined) ? 'x' : build.title
    }

    const getCivilizationForBuild = (build) => {
        const imageName = (build.civilization === undefined || build.civilization === '') ? Constants.Civ.Unknown : build.civilization
        return <div><img class='w-6 h-6' src={require('../Images/Civilizations/' + imageName + '.png')} alt={imageName} /></div>
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
        <div class='text-main-dark mt-10 text-sm md:text-base w-11/12 m-auto'>
            {props.builds !== undefined && props.builds.length > 0 &&
                <div class='grid grid-cols-12 grid-rows-1 w-full mb-2'>
                    <p class='col-span-1'><strong>Civ</strong></p>
                    <p class='col-span-2'><strong>Pop</strong></p>
                    <p class='col-span-6 md:col-span-4'><strong>Name</strong></p>
                    <p class='hidden md:block md:col-span-3'><strong>Author</strong></p>
                    <p class='col-span-2'><strong>Status</strong></p>
                </div>
            }
            {props.builds !== undefined && props.builds.sort((a, b) => a.id - b.id).map(build => (
                <Link to={{ pathname: `/builder/build/${build.id}`, state: { title: build.title, id: build.id } }} >
                <div class='grid grid-cols-12 grid-rows-1 w-full'>
                    <p class='col-span-1'>{getCivilizationForBuild(build)}</p>
                    <p class='col-span-2'>{getPopForBuild(build)}</p>
                    <p class='col-span-6 md:col-span-4'>{getTitleForBuild(build)}</p>
                    <p class='hidden md:block md:col-span-3'>{getAuthorForBuild(build)}</p>
                    <p class='col-span-2'><PublishIndicator status={build.status} /></p>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default BuilderOverviewTable