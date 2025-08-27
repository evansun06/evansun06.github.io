import styles from './Resume.module.css'
import res from '../../assets/resume.pdf'

function Resume() {
    return (
        <div className={styles.wrapper}>
             <embed src={res} type="application/pdf" className={styles.resume} />
       </div>
    );
}

export default Resume;