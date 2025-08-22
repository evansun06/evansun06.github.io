import sm from '../../../assets/smw.mp4'
import styles from './WelcomeMural.module.css'


function WelcomeMural() {
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>Evan's Art Portfolio</div>
            <video autoPlay loop muted playsinline>
                <source src={sm} type="video/mp4"/>
            </video> 
        </div>
    );
}


export default WelcomeMural;