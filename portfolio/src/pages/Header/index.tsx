import styles from './Header.module.scss';
import { useState } from 'react';
import Hamburguer from './hamburguer';
import NavLinks from './NavLinks';
import Hexagon from './hexagon';
import stackIcons from '../../data/stackIcons.json';

export default function Header () {

  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <a className={styles.menu__logo} href="#">ロドリゴ</a>
        <Hamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
        <NavLinks menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
      </div>
      <div className={styles.header__paddingBox}>
        {/* aqui vai ter duas divs com display flex e fled d row */}
        <div className={styles.header__hexagonBox}>
          {
            stackIcons.map((icon, index) => (
              <Hexagon key={index} url={icon.url}/>
            ))
          }

        </div>
        <div className={styles.header__TitleBox}>
          <h1 className={styles.header__TitleBox___title}>
            Rodrigo Fernandes
          </h1>
          <h1 className={styles.header__TitleBox___title}>
            ロドリゴ・フェルナンデス
          </h1>
          <h2 className={styles.header__TitleBox___subtitle}>
            Desenvolvedor Front End
          </h2>
          <h2 className={styles.header__TitleBox___subtitle}>
            フロントエンドの開発者
          </h2>
        </div>
      </div>
    </header>
  );
}