
import styles from './ArtModal.module.css'

function ArtModal({art, onClose}) {
    if (!art) return null;


    return(
        <>
            <div className={styles.backdrop} onClick={onClose} />
            <div className={styles.modal}>
                <button onClick={onClose}>x</button>
                <img src={art.image} alt={art.title}/>
                <h2>{art.title}</h2>
                <p className={styles.subInfo}> {art.width}" x {art.height}" </p>
                <p className={styles.subInfo}> {art.medium} </p>
                <p className={styles.subInfo}> {art.month} {art.year} </p>
                <p className={styles.desc}> {art.desc}</p>
            </div>
        </>
    );
}


export default ArtModal