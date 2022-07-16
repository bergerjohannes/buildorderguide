import Dropdown from '../../UI/Dropdown'

const BuilderDropdownSmall = (props) => {
    return <div class='lg:min-w-sm text-center'><Dropdown value={props.value} options={props.options} onChange={props.onChange} /></div>
}

export default BuilderDropdownSmall