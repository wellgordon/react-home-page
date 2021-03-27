import './styles/Footer.css'
import instagramIcon from './icons/instagram.png'
import githubIcon from './icons/github.png'
import linkedinIcon from './icons/linkedin.png'
import contactIcon from './icons/contact.png'

export default function Footer({setPage}) {
    return (
        <footer>
            <div className='footer-container'>
                <ul className='footer-list-main'>
                    <li>
                        <a href='https://www.linkedin.com/in/gordon-daole-wellman-0b275566/' target='_blank' rel="noopener noreferrer">
                            <img src={linkedinIcon} alt='LinkedIn' className='footer-icon'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/almost_wound/' target='_blank' rel="noopener noreferrer">
                            <img src={instagramIcon} alt='Instagram' className='footer-icon'></img>
                        </a>
                    </li>
                    <li>
                        <a href='github.com/wellgordon' target='_blank' rel="noopener noreferrer">
                            <img src={githubIcon} alt='Github' className='footer-icon'></img>
                        </a>
                    </li>
                    <li onClick={() => setPage('Contact')}>
                        <img src={contactIcon} alt='Contact' className='footer-icon'></img>
                    </li>
                    
                </ul>
                <ul className='footer-list-sub'>
                    <li className='footer-sub-li'>
                        <a href='https://www.freepik.com/vectors/technology'>Technology vector created by freepik - www.freepik.com</a>
                    </li>
                    <li className='footer-sub-li'>
                        Icons by 
                        <a href="https://freeicons.io/profile/730" target="_blank noopener noreferrer">anumithun</a>
                        <a href="https://freeicons.io/profile/3335" target="_blank noopener noreferrer">MD Badsha Meah</a>
                        <a href="https://freeicons.io/profile/823" target="_blank noopener noreferrer">Muhammad Haq</a> 
                        <a href="https://freeicons.io/profile/714" target="_blank noopener noreferrer">mithun</a>   
    
                        on 
                        <a href="https://freeicons.io">freeicons.io</a>
                        
                                
                                
                    </li>
                </ul>
            </div>
            
        </footer>
    )
}