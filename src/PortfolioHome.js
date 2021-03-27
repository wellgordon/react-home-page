import './styles/Portfolio.css'
import { useState } from 'react'
import { Motion, spring } from 'react-motion'
import placeholder from './_MG_7218.jpg'
import resume from './Resume.pdf'


export default function PorfolioHome() {

    const [animation, setAnimation] = useState('animation')
    const [hiddenResume, setHiddenResume] = useState(true)
    const [transluscent, setTransluscent] = useState('')

    function handleOpen() {
        setAnimation('')
        setHiddenResume(false)
        setTransluscent('transluscent')
    }

    function handleClose() {
        setHiddenResume(true)
        setAnimation('animation')
        setTransluscent('')
    }

    return (
        <>
        <Motion
            defaultStyle={{ x: -200, opacity: 0 }}
            style={{ x: spring(hiddenResume ? -200 : 0), opacity: spring(hiddenResume ? 0 : 1) }}
        >
            {style => (
                <div className='resume-container' style={{ transform: `translateX(${style.x})`, opacity: style.opacity }}>
                    <button onClick={handleClose}>X</button>
                    <embed src={resume} className='resume' />
                    
                </div>
                    
                
            )}
            
        </Motion>
            
        
        <div className={`main-portfolio-wrapper ${transluscent}`}>
            <div className='sub-portfolio-wrapper'>
                <section className='portfolio-project'>
                    <img src={placeholder} alt='placeholder' class='portfolio-img'></img>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholder} alt='placeholder' class='portfolio-img'></img>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholder} alt='placeholder' class='portfolio-img'></img>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholder} alt='placeholder' class='portfolio-img'></img>
                </section>
                
            </div>
            <div className={`resume-button ${animation}`}>
                <p onClick={handleOpen}>Resume</p>
            </div>
        </div>
        </>
    ) 
}