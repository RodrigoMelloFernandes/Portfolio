import { IMenuState } from '../../../types';
import styles from './NavLinks.module.scss';

export default function NavLinks({menuMobile, setMenuMobile}:IMenuState) {
  return (
    <nav
      className={
        menuMobile
          ? `${styles.NavListOpen}`
          : `${styles.NavListClose}`
      }
    >
      <ul className={styles.NavListOpen__Ul}>
        <li className={styles.NavListOpen__Ul___listItem}>
          <a className={styles.NavListOpen__Ul___listItem____link}
            href="#home"
          >
            Home
          </a>
        </li>

        <li className={styles.NavListOpen__Ul___listItem}>
          <a className={styles.NavListOpen__Ul___listItem____link}
            href="#portfolios"
          >
            Portfólios
          </a>
        </li>
        <li className={styles.NavListOpen__Ul___listItem}>
          <a className={styles.NavListOpen__Ul___listItem____link}
            href="#aboutme"
          >
            Sobre Mim
          </a>
        </li>
        <li className={styles.NavListOpen__Ul___listItem}>
          <a className={styles.NavListOpen__Ul___listItem____link}
            href="#workingExperience"
          >
            Experiêncas
          </a>
        </li>
        <li className={styles.NavListOpen__Ul___listItem}>
          <a className={styles.NavListOpen__Ul___listItem____link}
            href="#contact"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
