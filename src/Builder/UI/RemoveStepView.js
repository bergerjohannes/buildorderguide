import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RemoveStepView = (props) => {

    return (
        <div class='flex flex-col justify-center ml-1 border h-5 w-5 p-1 text-xs rounded-full bg-danger-light hover:bg-danger-dark text-white'>
            <button onClick={() => props.remove(props.index)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>

    )
}

export default RemoveStepView