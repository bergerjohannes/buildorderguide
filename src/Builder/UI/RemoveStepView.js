import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RemoveStepView = (props) => {

    return (
        <div class='flex flex-col justify-center ml-4 border h-10 w-10 p-2 rounded-full bg-red-500 text-white'>
            <button onClick={() => props.remove(props.index)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>

    )
}

export default RemoveStepView