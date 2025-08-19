import riz from '../../../assets/RizAhmedMural.png'
import styles from './WhatsNew.module.css'

function WhatsNew() {
    return(
        <>
            <h3 className={styles.medHeader}>Whats New:</h3>
                <div className={styles.imageContainer}>
                    <img className={styles.imgWide} src={riz} alt="Riz Ahmed Portrait"/>
                </div>
        </>
    )
}

export default WhatsNew 