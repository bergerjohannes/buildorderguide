import Select from 'react-select'

const Dropdown = (props) => {
    const selectStyle = {
        option: (provided, state) => ({
            ...provided,
            height: 42,
            fontSize: '16px',
            backgroundColor: state.isFocused ? '#f1f5f9' : state.isSelected ? '#2dd4bf' : 'white',
            color: state.isFocused ? '#134e4a' : state.isSelected ? '#0f172a' : '#134e4a',
            cursor: 'pointer'
        }),
        menu: base => ({
            ...base,
            height: 42,
            fontSize: '16px',
            color: '#134e4a'
        }),
        control: () => ({
            height: 42,
            color: '#134e4a',
            fontSize: '16px',
            border: 'transparent',
            backgroundColor: '#f1f5f9',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 2,
            cursor: 'pointer'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1
            const transition = 'opacity 300ms'
            const color = '#134e4a'
            return { ...provided, opacity, transition, color };
        }
    }

    if (props.isMulti !== undefined && props.isMulti === true) return <Select styles={selectStyle} placeholder={props.placeholder} isMulti isSearchable={props.isSearchable} value={props.options.filter(element => props.value !== undefined && props.value.includes(element.value))} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
    else return <Select styles={selectStyle} placeholder={props.placeholder} isSearchable={props.isSearchable} value={props.options.find(element => element.value === props.value)} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
}

export default Dropdown