import { DndContext, useDroppable, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { sortableKeyboardCoordinates, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import SortableItem from './SortableItem'
import React from 'react'

const Droppable = (props) => {
    const { setNodeRef } = useDroppable('DnD')
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }))

    return (
        <DndContext sensors={sensors} onDragEnd={props.handleDragEnd} >
            <SortableContext id={'DnD'} items={props.items} strategy={rectSortingStrategy}>
                <div ref={setNodeRef} class='flex flex-col'>
                    {props.items.map((item, index) => (
                        <SortableItem key={`${item}-${index}`} id={item} index={index} item={item} />
                    ))}
                </div>
            </SortableContext>
        </DndContext >
    )
}

export default Droppable
