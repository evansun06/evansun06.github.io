
import styles from './FeatureMenu.module.css'
import blue from '../../../assets/BLUE.png'
import gopher from '../../../assets/Gopher.png'
import ubc from '../../../assets/UBC.png'
import { Link } from 'react-router-dom';

function FeatureMenu() {
    return(
        <>
            <div className={styles.featurePrompt}>
                <h2>What can you find here?</h2>
            </div>

            <div className={styles.cards}>
                <Link to="/art" className={`${styles.card} ${styles.cardLink}`}>
                    <img src={blue} alt="Art Portfolio" />
                    <h3>Art Portfolio</h3>
                    <p className={styles.cardDesc}>Art’s a hobby of mine; I might as well share!</p>
                </Link>
                <Link to="/resume" className={`${styles.card} ${styles.cardLink}`}>
                    <img src={ubc} alt="Resume" />
                    <h3>Resume</h3>
                    <p className={styles.cardDesc}>What you're here for.</p>
                </Link>
                <div className={styles.card}>
                  <img src={gopher} alt="Project Showcase" />
                  <h3>Project Showcase</h3>
                  <p className={styles.cardDesc}>My software development journey in a nutshell</p>
                </div>
                
            </div>
        </>
    );
}

export default FeatureMenu