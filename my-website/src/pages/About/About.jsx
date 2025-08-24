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
                <p> I'm currently a second year student at the University of British Columbia studying computer science. In my free time I love to draw, sail, play badminton.</p>

            </div>
    
        </div>
            
        </>
    );

}

export default About