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
            <Centered><Heading2>Support</Heading2></Centered>
            <Paragraph>If you enjoy using the site, you can contribute by visiting <A href='https://buymeacoffee.com/buildorderguide'>Build Order Guide's Buy Me A Coffe page</A>. Thanks ❤️</Paragraph>
            <br />
            <br />
            <br />
            <Centered><Heading2>Get in touch</Heading2></Centered>
            <Paragraph>A build is missing, there's a mistake, or something can be improved? Feel free to reach out and submit your suggestion via <A href='https://forms.gle/AKkgrp5r68zrGs6cA'>Google Forms</A>.</Paragraph>
            <br />
            <br />
            <br />
            <Centered><Heading2>Legal Information</Heading2></Centered>
            <Paragraph>Build Order Guide was created under <A href='https://www.xbox.com/en-us/developers/rules'>Microsoft's Game Content Usage Rules</A> using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft in any way. Age of Empires II: HD and Age of Empires II: Definitive Edition are trademarks or registered trademarks of Microsoft Corporation in the U.S. and other countries.</Paragraph>
        </div>
    )
}

export default AboutPage