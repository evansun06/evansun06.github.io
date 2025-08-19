import styles from './Intro.module.css';

function Intro() {
  return (
    <>
      <div className={`${styles.intro} ${styles.first}`}>
        <h2>Hello, I'm Evan</h2>
      </div>
      <p className={`${styles.intro} ${styles.second}`}>
        I’m a second-year computer science student interested in big data, impact-driven software, and GenAI.
      </p>
    </>
  );
}

export default Intro;
