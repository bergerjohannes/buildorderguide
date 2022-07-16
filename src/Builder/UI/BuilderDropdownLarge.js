import Dropdown from '../../UI/Dropdown'

const BuilderDropdownLarge = (props) => {
    return <div class='lg:min-w-lg'><Dropdown value={props.value} options={props.options} onChange={props.onChange} /></div>
}

export default BuilderDropdownLarge