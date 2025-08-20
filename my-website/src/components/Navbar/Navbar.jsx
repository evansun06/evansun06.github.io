
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={`${styles.navLink} ${styles.navLeft}`}>Evan Sun</Link>
      <div className={styles.navRight}>
        <Link to="/art" className={styles.navLink}>Art</Link>
        <a href="#Tech" className={styles.navLink}>Tech</a>
        <Link to="/about" className={styles.navLink}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
