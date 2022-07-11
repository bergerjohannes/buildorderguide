import { useState } from 'react'
import Heading2 from './Heading2'
import ParagraphCentered from './ParagraphCentered'
import Star from './Star'

const RatingPrompt = (props) => {
    const [rating, setRating] = useState(props.currentRating)

    return (
        <div class='flex flex-col bg-primary-light justify-center py-2 px-8 shadow-sm rounded-md' onMouseLeave={() => setRating(undefined)}>
            <div class='flex justify-center'><Heading2>Rate build</Heading2></div>
            <div class='flex justify-center space-x-2'>
                <button onClick={() => props.rateBuild(1)} class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(1)}><Star color={rating === undefined && props.currentRating > 0 || rating > 0 ? true : false} full={true} /></button>
                <button onClick={() => props.rateBuild(2)} class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(2)}><Star color={rating === undefined && props.currentRating > 1 || rating > 1 ? true : false} full={true} /></button>
                <button onClick={() => props.rateBuild(3)} class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(3)}><Star color={rating === undefined && props.currentRating > 2 || rating > 2 ? true : false} full={true} /></button>
                <button onClick={() => props.rateBuild(4)} class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(4)}><Star color={rating === undefined && props.currentRating > 3 || rating > 3 ? true : false} full={true} /></button>
                <button onClick={() => props.rateBuild(5)} class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(5)}><Star color={rating === undefined && props.currentRating > 4 || rating > 4 ? true : false} full={true} /></button>
            </div>
            <div class='flex justify-center -mt-2 -mb-2'><ParagraphCentered>{props.currentRating > 0 ? `Your rating: ${props.currentRating}` : 'Not rated yet'}</ParagraphCentered></div>
        </div>
    )
}
export default RatingPrompt