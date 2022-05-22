import BounceLoader from 'react-spinners/BounceLoader'

const LoadingIndicator = (props) => {
    return (
        <div class='w-full h-full flex flex-col justify-center'>
            <p>123</p>
            <div class='flex w-full justify-center mt-40'><BounceLoader class='w-1/2 mx-auto' color={'#000000'} loading={true} size={40} /></div>
            <div class='flex justify-center w-full'><p>{props.text}</p></div>
        </div>
    )
}
export default LoadingIndicator