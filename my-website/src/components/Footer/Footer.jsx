import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.leftFooter}>
                <h3>&copy; {new Date().getFullYear()} Evan Sun</h3>
            </div>
        
            <div className={styles.rightFooter}>
                <div className={styles.ftLinks}>
                    <p>Other Links</p>
                    <a href="https://github.com/evansun06" className={styles.ftLink}>Github</a>
                    <a href="https://www.linkedin.com/in/evan-s-5a5bb8284/" className={styles.ftLink}>LinkedIn</a>
                    <a href="https://letterboxd.com/evansun06/" className={styles.ftLink}>LetterBox</a>
                </div>
            
            </div>
        </footer>
    );
}

export default Footer