import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const AddOptionButton = (props) => {

    return (
        <button class='ml-4' onClick={props.onClick}><FontAwesomeIcon icon={faCirclePlus} /></button>
    )
}

export default AddOptionButton