import './styles/Contact.css'
import emailIcon from './icons/email.png'
import linkedInIcon from './icons/linkedin.png'

export default function Contact() {
    return (
        <>
            <div className='contact-container'>
                <div className='contact-header'>
                    <h1>Contact Me</h1>
                    <h2>Reach out by email or connect on LinkedIn</h2>
                </div>
                <form className='contact-form'>
                    <address className='email'>
                        <a href='mailto:cgordondw@gmail.com'>
                            <img src={emailIcon} alt='email'></img>
                        </a>
                    </address>
                    <a href='https://www.linkedin.com/in/gordon-daole-wellman-0b275566/' target='_blank' rel="noopener noreferrer">
                        <img src={linkedInIcon} alt='LinkedIn'></img>
                    </a> 
                </form>
            </div>
        </>
    )
}