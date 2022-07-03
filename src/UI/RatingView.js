import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const RatingView = (props) => {
    return (
        <div class='flex space-x-0.5 text-sm w-fit'>
            <button class='text-highlight-light' onClick={props.onClick}><FontAwesomeIcon icon={faStar} /></button>
            <button class='text-highlight-light' onClick={props.onClick}><FontAwesomeIcon icon={faStar} /></button>
            <button class='text-highlight-light' onClick={props.onClick}><FontAwesomeIcon icon={faStar} /></button>
            <button class='text-highlight-light' onClick={props.onClick}><FontAwesomeIcon icon={faStar} /></button>
            <button class='text-secondary-dark' onClick={props.onClick}><FontAwesomeIcon icon={faStar} /></button>
        </div>
    )
}
export default RatingView