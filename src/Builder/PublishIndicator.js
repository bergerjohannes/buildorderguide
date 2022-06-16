import * as Constants from '../Constants'

const PublishIndicator = (props) => {

    const getIndicator = () => {
        switch (props.status) {
            case Constants.PublishStatus.Published:
                return <div class='w-5 h-5 bg-green-400 rounded-full'></div>
            case Constants.PublishStatus.Changed:
                return <div class='w-5 h-5 bg-orange-400 rounded-full'></div>
            case Constants.PublishStatus.Draft:
                return <div class='w-5 h-5 bg-yellow-400 rounded-full'></div>
            default:
                return <div class='w-5 h-5 bg-gray-400 rounded-full'></div>
        }
    }

    if (props.status === undefined) return <></>

    return (
        <div class='h-10 flex justify-center w-full text-main-dark'>
            <div class='flex space-x-2'>
                {getIndicator()}
                <span>{props.status[0].toUpperCase() + props.status.slice(1)}</span>
            </div>
        </div>
    )
}

export default PublishIndicator