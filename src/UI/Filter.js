import Select from 'react-select'

const Filter = (props) => {
    const selectStyle = {
        option: (provided, state) => ({
            ...provided,
            height: 42,
            fontSize: '16px',
            color: state.isFocused ? '#134e4a' : state.isSelected ? '#0f172a' : '#134e4a',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            "@media only screen and (max-width: 767px)": {
                ...provided["@media only screen and (max-width: 767px)"],
                fontSize: '12px',
            }
        }),
        menu: base => ({
            ...base,
            height: 42,
            fontSize: '16px',
            color: '#134e4a',
            backgroundColor: '#ffffff',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '12px',
            }
        }),
        control: base => ({
            height: 42,
            color: '#134e4a',
            backgroundColor: '#ffffff',
            fontSize: '16px',
            border: 'transparent',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 2,
            cursor: 'pointer',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '12px',
            }
        }),
        singleValue: base => ({
            ...base,
            transition: 'opacity 300ms',
            color: '#134e4a',
            margin: 'auto',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '12px',
            }
        })
    }

    if (props.isMulti !== undefined && props.isMulti === true) return <Select isDisabled={props.isDisabled} styles={selectStyle} placeholder={props.placeholder} isMulti isSearchable={props.isSearchable} value={props.options.filter(element => props.value !== undefined && props.value.includes(element.value))} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
    else return <Select isDisabled={props.isDisabled} styles={selectStyle} placeholder={props.placeholder} isSearchable={props.isSearchable} value={props.options.find(element => element.value === props.value)} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
}

export default Filter