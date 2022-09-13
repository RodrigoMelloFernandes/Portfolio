import styles from './Hamburguer.module.scss';
import { IMenuState } from 'types';
import { useState } from 'react';


export default function Hamburguer({menuMobile, setMenuMobile}:IMenuState) {

  const [ HamburguerEffect , setHamburguerEffect] = useState(false);

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