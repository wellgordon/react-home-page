import profile from './profile.JPG'
import './styles/About.css'

export default function About() {
    return (
        <div className='about-main-container'>
            <div className='about-sub-container'>
                <div className='img-container'>
                    <img src={profile} alt='gordon profile' className='profile-img' height='300px' width='200px'></img>
                </div>
                <article className='about-main-body'>
                    <h2>A little about me...</h2>
                    <p>I'm not a designer, I'm a developer. Despite my artistic background, as evidenced by this site my strengths as a programmer lie in logical reasoning, semantic design, and attention to detail. As a music student, I learned the art of approaching complex problems from multiple angles to find the best solution. I also learned that there's never one right answer, and sometimes the beauty is in finding different ways to answer the same question.</p>
                    <p>When I'm not working on web development, you can find me exploring my many (too many, some might say...) hobbies:</p>
                    <ul>
                        <li>Photography</li>
                        <li>Watchmaking and Collecting</li>
                        <li>Chess</li>
                        <li></li>
                    </ul>
                </article>
                <article className='about-sub-body'>
                    <h3>And About The Site</h3>
                    <p>
                        This site was built from the ground up in React. Animations are provided by react-motion, styles are built using individual component stylesheets (but are currently being migrated...slowly...into styled components), and icons are provided, with attribution, by the amazing creators at <a href='https://freeicons.io/' target="_blank noopener noreferrer">freeicons.io</a>. I plan to eventually migrate all the text into .md files and propegate from there. 
                    </p>
                </article>
            </div>
        </div>
        
    )
}