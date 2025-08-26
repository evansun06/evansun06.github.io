import sm from '../../../assets/smw.gif'
import styles from './WelcomeMural.module.css'


function WelcomeMural() {
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>Evan's Art Portfolio</div>
            <img src={sm} alt="Parabolic motion of a bouncy ball"/>
        </div>
    );
}


export default WelcomeMural;