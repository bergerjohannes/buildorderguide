import { Link } from 'react-router-dom'
import AttributesView from './AttributesView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'

const BuildPreviewCard = (props) => {
    return (
        <Link to={{ pathname: `/build/${props.build.id}` }}>
            <div class='overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative w-10/12 md:w-9/12 mt-10 mx-auto sm:w-1/2 max-w-sm bg-white shadow-xl cursor-pointer rounded-2xl'>
                <h1 class='m-5 text-xl font-bold'>{props.build.title}</h1>
                <h3 class='ml-5 pb-5 -mt-5 text-md font-bold text-gray-400'>{props.build.author}</h3>

                <div class='grid overflow-hidden grid-cols-4 grid-rows-4 gap-2'>
                    <div class='box row-start-2 row-span-4'>
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