import styles from './Header.module.scss';
import { useState } from 'react';
import Hamburguer from './hamburguer';
import NavLinks from './NavLinks';

export default function Header () {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <header>
      <div className={styles.menu}>
        <a className={styles.menu__logo} href="#">ロドリゴ</a>
        <Hamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
        <NavLinks menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
      </div>
    </header>
  );
}