import Select from 'react-select'

const BuilderSelect = (props) => {
    return(
        <Select styles={props.selectionStyle} isSearchable={true} value={props.options.find(element => element.value === props.selected)} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
    )
}

export default BuilderSelect