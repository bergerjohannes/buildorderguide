import { useState } from 'react'
import Heading2 from './Heading2'
import Star from './Star'

const RatingPrompt = ({currentRating,rateBuild}) => {
    const [rating, setRating] = useState(currentRating)

    return (
        <div className='flex flex-col bg-secondary-light justify-center shadow-sm rounded-sm w-10/12 max-w-lg mt-10 mb-14' onMouseLeave={() => setRating(undefined)}>
            <div className='flex justify-center bg-primary-light w-full rounded-t-sm pt-1'><Heading2>Rate build</Heading2></div>
            <div className='flex justify-center space-x-2 text-3xl my-4'>
                {/* This one makes this state simpler. --- (rating ?? currentRating) > 0 --- It actually checks if rating is null or undefined then it
                will use currentRating, otherwise if it's not null or undefined it will use rating.
                Same as before, just more clear in my opinion.   */}
                <button onClick={() => rateBuild(1)} className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(1)}><Star color={(rating ?? currentRating) > 0} full={true} /></button>
                <button onClick={() => rateBuild(2)} className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(2)}><Star color={(rating ?? currentRating) > 1} full={true} /></button>
                <button onClick={() => rateBuild(3)} className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(3)}><Star color={(rating ?? currentRating) > 2} full={true} /></button>
                <button onClick={() => rateBuild(4)} className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(4)}><Star color={(rating ?? currentRating) > 3} full={true} /></button>
                <button onClick={() => rateBuild(5)} className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onMouseOver={() => setRating(5)}><Star color={(rating ?? currentRating) > 4} full={true} /></button>
            </div>
        </div>
    )
}
export default RatingPrompt
