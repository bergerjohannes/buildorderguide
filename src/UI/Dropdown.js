import Select from 'react-select'

const Dropdown = (props) => {
    const selectStyleWithSizeChange = {
        option: (base, state) => ({
            ...base,
            height: 42,
            fontSize: '16px',
            backgroundColor: state.isFocused ? '#f1f5f9' : state.isSelected ? '#2dd4bf' : 'white',
            color: state.isFocused ? '#134e4a' : state.isSelected ? '#0f172a' : '#134e4a',
            cursor: 'pointer',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        menu: base => ({
            ...base,
            height: 42,
            fontSize: '16px',
            color: '#134e4a',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        control: base => ({
            height: 42,
            color: '#134e4a',
            fontSize: '16px',
            border: 'transparent',
            backgroundColor: '#f1f5f9',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 2,
            cursor: 'pointer',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        singleValue: base => ({
            ...base,
            transition: 'opacity 300ms',
            color: '#134e4a',
            "@media only screen and (max-width: 1220px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        multiValue: base => ({
            ...base,
            borderRadius: 2,
            backgroundColor: '#cbd5e1',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        multiValueLabel: base => ({
            ...base,
            color: '#134e4a',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        }),
        multiValueRemove: base => ({
            ...base,
            color: '#cbd5e1',
            backgroundColor: '#134e4a',
            "@media only screen and (max-width: 767px)": {
                ...base["@media only screen and (max-width: 767px)"],
                fontSize: '10px',
                height: 22,
                marginTop: 4
            }
        })
    }

    //TODO: Refactor: same code as above but without the media query
    const selectStyleWithoutSizeChange = {
        option: (base, state) => ({
            ...base,
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
        control: base => ({
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
        singleValue: base => ({
            ...base,
            transition: 'opacity 300ms',
            color: '#134e4a'
        }),
        multiValue: base => ({
            ...base,
            borderRadius: 2,
            backgroundColor: '#cbd5e1'
        }),
        multiValueLabel: base => ({
            ...base,
            color: '#134e4a'
        }),
        multiValueRemove: base => ({
            ...base,
            color: '#cbd5e1',
            backgroundColor: '#134e4a'
        })
    }

    if (props.isMulti !== undefined && props.isMulti === true) return <span class={props.isDisabled ? 'cursor-not-allowed' : 'cursor-default'}><Select styles={props.noSizeChange === true ? selectStyleWithoutSizeChange : selectStyleWithSizeChange} placeholder={props.placeholder} isMulti isSearchable={props.isSearchable} value={props.options.filter(element => props.value !== undefined && props.value.includes(element.value))} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} /></span>
    else return <span class={props.isDisabled ? 'cursor-not-allowed' : 'cursor-default'}><Select isDisabled={props.isDisabled} styles={props.noSizeChange === true ? selectStyleWithoutSizeChange : selectStyleWithSizeChange} placeholder={props.placeholder} isSearchable={props.isSearchable} value={props.options.find(element => element.value === props.value)} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} /></span>
}

export default Dropdown