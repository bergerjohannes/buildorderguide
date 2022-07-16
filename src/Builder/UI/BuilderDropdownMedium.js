import Dropdown from '../../UI/Dropdown'

const BuilderDropdownMedium = (props) => {
    return <div class='lg:min-w-md'><Dropdown value={props.value} options={props.options} onChange={props.onChange} /></div>
}

export default BuilderDropdownMedium