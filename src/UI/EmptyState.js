import ParagraphCentered from './ParagraphCentered'

const EmptyState = (props) => {
    return(
        <div class='mt-20 flex justify-center flex-col'><img src={require('../Images/BuildImagePlaceholder.png')} /><ParagraphCentered>{props.children}</ParagraphCentered></div>
    )
}

export default EmptyState