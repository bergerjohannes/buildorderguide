import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

const RemoveOptionButton = (props) => {

    return (
        <div class='relative'>
            <button onClick={props.onClick} class='absolute -right-5 -top-8 m-4 p-1 text-md text-red-500'>
                <FontAwesomeIcon icon={faCircleMinus} />
            </button>
        </div>
    )
}

export default RemoveOptionButton