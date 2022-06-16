const ParagraphCentered = (props) => {
    return(
        <p class='text-center text-main-dark mx-auto my-4 w-11/12 max-w-lg'>{props.children}</p>
    )
}

export default ParagraphCentered