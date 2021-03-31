import './styles/Portfolio.css'
import { useState } from 'react'
import { Motion, spring } from 'react-motion'
import placeholder from './_MG_7218.jpg'
import placeholderOverlay from './hadOne.jpg'
import resume from './Resume.pdf'


export default function PorfolioHome() {

    const [animation, setAnimation] = useState('animation')
    const [hiddenResume, setHiddenResume] = useState(true)
    const [transluscent, setTransluscent] = useState('')
    const [placeholderImg, setPlaceholderImg] = useState({
        '0': placeholder,
        '1': placeholder,
        '2': placeholder,
        '3': placeholder,
    })

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

    function handleImgChange(e) {
        const id = e.target.id
        //setPlaceholderImg(() => {
        //     placeholderImg[id] = placeholderOverlay
        // })
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
                    <img src={placeholderImg[0]} alt='placeholder' class='portfolio-img'></img>
                    <div className='portfolio-project-middle'>
                        <p className='portfolio-project-middle-text' onClick={handleImgChange} id='0'>View Project</p>
                    </div>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholderImg[1]} alt='placeholder' class='portfolio-img' ></img>
                    <div className='portfolio-project-middle'>
                        <p className='portfolio-project-middle-text'>View Project</p>
                    </div>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholderImg[2]} alt='placeholder' class='portfolio-img'></img>
                    <div className='portfolio-project-middle'>
                        <p className='portfolio-project-middle-text'>View Project</p>
                    </div>
                </section>
                <section className='portfolio-project'>
                    <img src={placeholderImg[3]} alt='placeholder' class='portfolio-img'></img>
                    <div className='portfolio-project-middle'>
                        <p className='portfolio-project-middle-text'>View Project</p>
                    </div>
                </section>
                
            </div>
            <div className={`resume-button ${animation}`}>
                <p onClick={handleOpen}>Resume</p>
            </div>
        </div>
        </>
    ) 
}