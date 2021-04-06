import './styles/Home.css'
import placeholder from '../static/media/_MG_7218.jpg'


export default function Home() {



    return (
        <>
            <div className='home-wrapper-main'>
                <div className='home-wrapper-sub'>
                        <div className='title-line'>
                            <h1>Gordon Daole-Wellman</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <p>Hi! I'm Gordon, a Frontend Developer, Musician, Teacher, and Photographer. After several years as a professional musician, I decided to change gears, and I began teaching myself software development. Please feel free to browse around, and be sure to check out some of my favorite projects below!</p>
                    
                </div>
                <div className='home-wrapper-projects'>
                    <section className='home-project'>
                        <img src={placeholder} alt='project coming soon...' className='home-project-img'></img>
                        <div className='home-project-middle'>
                            <p className='home-project-middle-text'>View on YouTube</p>
                        </div>
                    </section>
                    <section className='home-project'>
                        <img src={placeholder} alt='project coming soon...' className='home-project-img'></img>
                        <div className='home-project-middle'>
                            <p className='home-project-middle-text'>View on YouTube</p>
                        </div>
                    </section>
                </div>                 
            </div>
            
        </>
    )
}
