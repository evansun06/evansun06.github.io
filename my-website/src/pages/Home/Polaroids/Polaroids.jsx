import styles from './Polaroids.module.css';
import dog from '../../../assets/dog.png';
import me from '../../../assets/me.png';
import sailing2 from '../../../assets/Sailing2.png';
import f1 from '../../../assets/f1.png';
import sushi from '../../../assets/sushi.png';
import camera from '../../../assets/camera.png';

function PolaroidMural() {
  return (
    <div className={styles.polMuralContainer}>
      <div className={styles.polContainer}>
        <div className={`${styles.pol} ${styles.dog}`}>
          <img src={dog} alt="dog" />
        </div>

        <div className={`${styles.pol} ${styles.me}`}>
          <img src={me} alt="me" />
        </div>

        <div className={`${styles.pol} ${styles.sailing}`}>
          <img src={sailing2} alt="sailing" />
        </div>

        <div className={`${styles.pol} ${styles.f1}`}>
          <img src={f1} alt="f1" />
        </div>

        <div className={`${styles.pol} ${styles.sushi}`}>
          <img src={sushi} alt="sushi" />
        </div>
      </div>

      <div className={styles.camera}>
        <img src={camera} alt="camera" />
      </div>
    </div>
  );
}

export default PolaroidMural;
