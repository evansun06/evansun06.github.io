import Navbar from '../../components/NavBar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import headshot from '../../assets/headshot.jpeg'
import styles from './About.module.css'


function About() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.pol}>
                <div className={styles.imgContainer}>
                    <img alt="headshot" src={headshot}/>
                </div>
                <a href="https://github.com/evansun06" className={styles.Link}>Github</a>
                <a href="https://www.linkedin.com/in/evan-s-5a5bb8284/" className={styles.Link}>LinkedIn</a>                
            </div>
            <div className={styles.about}>
                <h3>Here's a little more about me!</h3>
                <p> I'm currently a second year student at the University of British Columbia studying computer science and enrolled in the COOP program. In my free time I love to draw, do all things sailing, and play badminton!.</p>
                <p> I'm always looking to connect with new people! Feel free to connect with me on LinkedIn or shoot me an email.</p>
            </div>
    
        </div>
            
        </>
    );

}

export default About