import './styles/Nav.css'
import homeLogo from './icons/home-interface-symbol.png'


export default function Nav({ setPage }) {

    function handleClick(e) {
        setPage(e.target.innerText)
    }

    return (
        <>
            <ul className='nav-bar'>
                <div className='nav-bar-sub'>
                    <li onClick={handleClick}>
                        <img src={homeLogo} alt='home' className='home-logo'></img>
                        Home
                    </li>
                    <li onClick={handleClick}>
                        Portfolio
                    </li>
                    <li onClick={handleClick}>
                        About
                    </li>
                    <li onClick={handleClick}>
                        Contact
                    </li>
                </div>
                
            </ul>
        </>
    )
}