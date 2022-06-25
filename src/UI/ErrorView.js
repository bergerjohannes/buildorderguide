import { Link } from "react-router-dom"
import Button from "./Button"
import Centered from "./Centered"
import Heading2 from "./Heading2"
import Paragraph from "./Paragraph"

const ErrorView = (props) => {
    return (
        <div class='shadow-sm rounded-md w-fit h-fit m-auto bg-secondary-light p-8 mt-16 md:mt-32'>
            <Centered>
                <div class='flex flex-col'>
                    <Heading2>{props.title}</Heading2>
                    <Paragraph>{props.description}</Paragraph>
                    {props.callToAction && <div class='flex justify-center space-x-2'>
                        <Button>
                            <Link to={props.callToActionLink}>{props.callToAction}</Link>
                        </Button>
                    </div>}
                </div>
            </Centered>
        </div>
    )
}

export default ErrorView