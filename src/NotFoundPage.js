import { Link } from 'react-router-dom'
import Button from './UI/Button'
import Centered from './UI/Centered'
import Heading1 from './UI/Heading1'
import Menu from './UI/Menu'
import Paragraph from './UI/Paragraph'

const NotFoundPage = (props) => {
    return (
        <div class=''>
            <Menu />
            <Heading1>Not Found</Heading1>
            <Centered><Paragraph>The page you are looking is not available. <strong>gl next!</strong></Paragraph></Centered>
            <Centered><Button><Link to="/">Go to Builds </Link></Button></Centered>
        </div>
    )
}

export default NotFoundPage