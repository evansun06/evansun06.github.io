import sm from '../../../assets/smw.mp4'
import styles from './WelcomeMural.module.css'


function WelcomeMural() {
    return(
        <div className={styles.container}>
            <video autoPlay loop muted>
                <source src={sm} type="video/mp4"/>
            </video>
            <div className={styles.welcome}>Evan's Art Portfolio</div>
        </div>
    );
}

export default WelcomeMural();