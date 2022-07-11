import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Star = (props) => {
    if (props.full === true) {
        return <div class={props.color === true ? 'text-highlight-light' : 'text-secondary-light'}><FontAwesomeIcon icon={faStar} /></div>
    } else {
        return <div class={props.color === true ? 'text-highlight-light' : 'text-secondary-light'}><FontAwesomeIcon icon={faStarHalf} /></div>
    }
}

const RatingView = (props) => {

    return (
        <div>
            <div class='absolute right-4 bottom-3 z-10 flex flex-row space-x-0.5 text-sm w-100'>
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
            </div>
            {props.rating !== undefined && props.rating > 0 && <div class='absolute right-4 bottom-3 z-20 flex flex-row space-x-0.5 text-sm w-100'>
                <Star color={true} full={true} />
                <Star color={props.rating > 1.25 ? true : false} full={props.rating > 1.75} />
                <Star color={props.rating > 2.25 ? true : false} full={props.rating > 2.75} />
                <Star color={props.rating > 3.25 ? true : false} full={props.rating > 3.75} />
                <Star color={props.rating > 4.25 ? true : false} full={props.rating > 4.75} />
            </div>}
        </div>
    )
}
export default RatingView