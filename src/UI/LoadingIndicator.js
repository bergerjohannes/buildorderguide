import BounceLoader from 'react-spinners/BounceLoader'
import ParagraphCentered from './ParagraphCentered'

const LoadingIndicator = (props) => {
    return (
        <div class='w-full h-full flex flex-col justify-center'>
            <div class='flex w-full justify-center mt-40'><BounceLoader class='w-1/2 mx-auto' color={'#2dd4bf'} loading={true} size={120} /></div>
            <ParagraphCentered>{props.text}</ParagraphCentered>
        </div>
    )
}
export default LoadingIndicator