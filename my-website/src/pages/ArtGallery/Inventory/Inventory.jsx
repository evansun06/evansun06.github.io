import { useEffect, useState } from 'react';
import styles from './Inventory.module.css';

function Inventory() {
  const [artPieces, setArtPieces] = useState([]);
  const scaleFactor = 25; // Adjust this to control visual sizing

  useEffect(() => {
    fetch('/art.json')
      .then(res => res.json())
      .then(data => setArtPieces(data));
  }, []);

  return (
    <div className={styles.inventoryContainer}>
      {artPieces.map((piece, index) => (
        <div
          key={index}
          className={styles.artCard}
          style={{
            width:'100%',
          }}
        >
          <img src={piece.image} alt={piece.title} className={styles.artImage} />
          <p className={styles.title}>{piece.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Inventory;
