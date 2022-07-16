import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id: props.id })

    const style = {
        transform: CSS.Translate.toString(transform),
        zIndex: isDragging ? 10 : '',
        boxShadow: isDragging ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : ''
    }

    return (
        <div class='grid grid-cols-12 bg-white' style={style} ref={setNodeRef}>
            <div class='col-span-11'>
                {props.item}
            </div>
            <button class='cursor-grab' {...listeners} {...attributes}>
                <div class='text-xs'><FontAwesomeIcon icon={faBars} /></div>
            </button>
        </div>
    )
}

export default SortableItem