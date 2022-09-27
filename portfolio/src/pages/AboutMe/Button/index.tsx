import styles from './Button.module.scss';

export default function Button () {
  return (
    <button className={styles.button}>
      <a className={styles.button__link} 
        href="../../../assets/aboutMe/RodrigoCurrículo.rar" 
        download="RodrigoCurrículo.rar" 
        type="application/rar">Download Cv
      </a>
    </button>
  );
}