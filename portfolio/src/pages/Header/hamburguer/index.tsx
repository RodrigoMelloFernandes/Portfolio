import styles from './Hamburguer.module.scss';
import { IMenuState } from '../../../types';


export default function Hamburguer({menuMobile, setMenuMobile}:IMenuState) {
  return (
    <>
      <div
        className={styles.menuHamburguer}
        onClick={() => setMenuMobile(!menuMobile)}
      >
        <span className={styles.menuHamburguer__span}></span>
        <span className={styles.menuHamburguer__span}></span>
        <span className={styles.menuHamburguer__span}></span>
      </div>
    </>
  );
}