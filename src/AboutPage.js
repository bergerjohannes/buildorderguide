import A from './UI/A'
import Centered from './UI/Centered'
import Heading1 from './UI/Heading1'
import Heading2 from './UI/Heading2'
import Menu from './UI/Menu'
import Paragraph from './UI/Paragraph'

const AboutPage = (props) => {
    return (
        <div class=''>
            <Menu/>
            <Heading1>About Build Order Guide</Heading1>
            <Centered><Heading2>Get in touch</Heading2></Centered>
            <Paragraph>A build is missing, there's a mistake, something can be improved, or you need help creating your own build order? Feel free to join our <A href='https://discord.gg/JmfGYQcM3Z'>Discord server</A>.</Paragraph>
            <br />
            <br />
            <br />
            <Centered><Heading2>Contribute</Heading2></Centered>
            <Paragraph>Looking to contribute to the project? Check out Build Order Guide's <A href='https://github.com/triplejberger/buildorderguide'>GitHub page</A>.</Paragraph>
            <br />
            <br />
            <br />
            <Centered><Heading2>Legal Information</Heading2></Centered>
            <Paragraph>Build Order Guide was created under <A href='https://www.xbox.com/en-us/developers/rules'>Microsoft's Game Content Usage Rules</A> using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft in any way. Age of Empires II: HD and Age of Empires II: Definitive Edition are trademarks or registered trademarks of Microsoft Corporation in the U.S. and other countries.</Paragraph>
        </div>
    )
}

export default AboutPage