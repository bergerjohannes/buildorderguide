import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Star = (props) => {
    return <div class={props.color === true ? 'text-highlight-light' : 'text-secondary-light'}><FontAwesomeIcon icon={props.full ? faStar : faStarHalf} /></div>
}

export default Star