import { Link } from 'react-router-dom'
import AttributesView from './AttributesView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import BuildData from './BuildData'
import * as Constants from '../Constants'
import Heading2 from '../UI/Heading2'

const BuildPreviewCard = (props) => {

    const isOfficialBuild = (publisher) => publisher === Constants.OfficialPublisherId
    const buildTitle = BuildData.getTitleForBuild(props.build)

    return (
        <Link to={{ pathname: `/build/${props.build.id}` }}>
            <div class='overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative w-11/12 max-w-sm mt-10 mx-auto bg-white shadow-xl cursor-pointer rounded-2xl'>
                {isOfficialBuild(props.build.publisher) === false && <div class='absolute transform -rotate-45 bg-primary-light text-center text-main-dark font-semibold py-1 right-[-34px] bottom-[20px] w-[150px]'>
                    Community
                </div>}
                <div class='mt-2 mb-4 ml-5'><Heading2>{buildTitle}</Heading2></div>
                <h3 class='ml-5 pb-5 -mt-5 text-md text-main-light'>{props.build.author}</h3>

                <div class='grid grid-cols-4 grid-rows-4 gap-0'>
                    <div class='box row-start-2 row-span-4 w-24'>
                        {props.build.imageURL !== null && props.build.imageURL !== undefined && <img class='h-24 w-24' src={props.build.imageURL} alt={props.build.title} />}
                        {props.build.imageURL === null || props.build.imageURL === undefined && <img class='h-24 w-24' src={require('../Images/BuildImagePlaceholder.png')} alt={props.build.title} />}
                    </div>
                    <div class='col-start-2 col-span-3 ml-4'>
                        <PopIndicator pop={props.build.pop} />
                    </div>
                    <div class='col-start-2 col-span-3 ml-4'>
                        <AttributesView attributes={props.build.attributes} />
                    </div>
                    <div class='col-start-2 col-span-3 ml-4'>
                        <DifficultyIndicator difficulty={props.build.difficulty} />
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default BuildPreviewCard