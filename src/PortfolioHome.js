import './styles/Portfolio.css'
import { useState } from 'react'
import { Motion, spring } from 'react-motion'
import placeholder from './_MG_7218.jpg'
import placeholderOverlay from './hadOne.jpg'
import resumeImg from './resumeImg.jpg'
import resume from './Resume.pdf'


export default function PorfolioHome() {

    const [animation, setAnimation] = useState('animation')
    const [hiddenResume, setHiddenResume] = useState(true)
    const [transluscent, setTransluscent] = useState('')
    const [placeholderImg, setPlaceholderImg] = useState([
        placeholder,
        placeholder,
        placeholder,
        placeholder,
    ])

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
        const tempPlaceholderObj = placeholderImg
        if(tempPlaceholderObj[id] === placeholder) {
            tempPlaceholderObj[id] = placeholderOverlay
        } else {
            tempPlaceholderObj[id] = placeholder
        }
        //console.log(tempPlaceholderObj)
        setPlaceholderImg(tempPlaceholderObj)
        console.log(placeholderImg)
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
                    <button download={resume}>
                        <a href={resume} download={resume} className='resume-download'>Download pdf</a>
                    </button>
                    <img src={resumeImg} className='resume' alt='resume'/>
                    
                </div>
                    
                
            )}
            
        </Motion>
            
        
        <div className='main-portfolio-wrapper'>
            <div className={`sub-portfolio-wrapper ${transluscent}`}>
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