import styles from './Header.module.scss';
import { useState } from 'react';
import Hamburguer from './hamburguer';
import NavLinks from './NavLinks';
import HexagonContainer from './hexagonContainer';

export default function Header () {

  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <a className={styles.menu__logo} href="#">ロドリゴ</a>
        <Hamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
        <NavLinks menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
      </div>
      {/* aqui vai ter duas divs com display flex e fled d row */}
      <div>
        <HexagonContainer/>
        {/* <Hexagon/> */}
      </div>
      <div className={styles.header__paddingContainer}>
        <div className={styles.header__headerTitleBox}>
          <h1 className={styles.header__headerTitleBox___title}>
            Rodrigo Fernandes
          </h1>
          <h1 className={styles.header__headerTitleBox___title}>
            ロドリゴ・フェルナンデス
          </h1>
          <h2 className={styles.header__headerTitleBox___subtitle}>
            Desenvolvedor Front End
          </h2>
          <h2 className={styles.header__headerTitleBox___subtitle}>
            フロントエンドの開発者
          </h2>
        </div>

      </div>
    </header>
  );
}