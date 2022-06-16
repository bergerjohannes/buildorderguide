import { Link } from 'react-router-dom'
import * as Constants from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

const LinkView = (props) => {

    const copyBuildLink = (url) => {
        const el = document.createElement('textarea')
        el.value = `https://buildorderguide.com/#/build/${props.buildId}`
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }

    return (
        <div class='flex w-full justify-center text-main-dark'>
            {(props.status === Constants.PublishStatus.Published || props.status == Constants.PublishStatus.Changed) &&
                <div class='flex justify-center flex-col'>
                    <div class='text-xs'>Public link</div>
                    <div class='mb-4'>
                        <Link to={{ pathname: `/build/${props.buildId}` }}>{`https://buildorderguide.com/#/build/${props.buildId}`}</Link>
                        <button class='ml-2' onClick={() => copyBuildLink()}>
                            <FontAwesomeIcon icon={faClipboard} />
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default LinkView


