
import styles from './FeatureMenu.module.css'
import blue from '../../../assets/BLUE.png'
import gopher from '../../../assets/Gopher.png'
import ubc from '../../../assets/UBC.png'

function FeatureMenu() {
    return(
        <>
            <div className={styles.featurePrompt}>
                <h2>What can you find here?</h2>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={blue} alt="Art Portfolio" />
                <h3>Art Portfolio</h3>
                <p className={styles.cardDesc}>Art’s a hobby of mine; I might as well share!</p>
              </div>
              <div className={styles.card}>
                <img src={gopher} alt="Project Showcase" />
                <h3>Project Showcase</h3>
                <p className={styles.cardDesc}>My software development journey in a nutshell</p>
              </div>
              <div className={styles.card}>
                <img src={ubc} alt="Resume/CV" />
                <h3>Resume/CV</h3>
                <p className={styles.cardDesc}>What you're really here for.</p>
              </div>
            </div>
        </>
    );
}

export default FeatureMenu