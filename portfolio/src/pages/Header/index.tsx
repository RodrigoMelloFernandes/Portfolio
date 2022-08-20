import styles from './Header.module.scss';
import { useState } from 'react';
import Hamburguer from './Hamburguer';
import NavLinks from './NavLinks';
import StackBoxComponent from './StackBoxComponent';
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
        <div className={styles.header__stacksIconsBox}>
          {
            stackIcons.map((icon, index) => (
              <StackBoxComponent key={index} url={icon.url}/>
            ))
          }

        </div>
        <div className={styles.header__TitleBox}>
          <h1 className={styles.header__TitleBox___firstTitle}>
            Rodrigo Fernandes
          </h1>
          <h1 className={styles.header__TitleBox___firstTitle}>
            ロドリゴ・フェルナンデス
          </h1>
          <h2 className={styles.header__TitleBox___secondTitle}>
            Desenvolvedor Front End
          </h2>
          <h2 className={styles.header__TitleBox___secondTitle}>
            フロントエンドの開発者
          </h2>
        </div>
      </div>
    </header>
  );
}