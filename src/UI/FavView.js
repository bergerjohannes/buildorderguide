import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const FavView = (props) => {
    if (props.fav === true) {
        return <button class='text-xl text-danger-light transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:text-danger-dark' onClick={props.onClick}><FontAwesomeIcon icon={faHeart} /></button>
    } else {
        return <button class='text-xl text-secondary-dark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:text-danger-dark' onClick={props.onClick}><FontAwesomeIcon icon={faHeart} /></button>
    }
}
export default FavView