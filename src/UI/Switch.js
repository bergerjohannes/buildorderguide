const Switch = (props) => {
    return(
        <div class='flex m-auto bg-secondary-light text-main-dark rounded-sm w-11/12 md:w-1/2'>
            <button class={props.slectedOptionIndex === 0 ? 'bg-secondary-dark rounded-sm w-1/2 p-2 font-semibold' : 'rounded-sm w-1/2 p-2'} onClick={() => props.selectOption(0)}>{props.option1}</button>
            <button class={props.slectedOptionIndex === 1 ? 'bg-secondary-dark rounded-sm w-1/2 p-2 font-semibold' : 'rounded-sm w-1/2 p-2'} onClick={() => props.selectOption(1)}>{props.option2}</button>
        </div>
    )
}

export default Switch