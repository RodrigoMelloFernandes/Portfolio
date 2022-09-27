import styles from './Menu.module.scss';

import Hamburguer from './Hamburguer';
import ListItems from './ListItems';

import { LanguageContext } from 'context/LanguageContext';
import { useContext, useState } from 'react';

export default function Menu () {

  const{language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);
  
  const [menuMobile, setMenuMobile] = useState(false);
  const [fixedMenu, setFixedMenu] = useState(false);
  
  function scrollPosition () {
    if(window.scrollY > 50) {
      setFixedMenu(true);
    } else {
      setFixedMenu(false);
    }
  }


  window.addEventListener('scroll', scrollPosition);

  return (
    <div className={
      fixedMenu
        ? `${styles.menu} ${styles.menu__stickyMenu}`
        : `${styles.menu}`
    }>

      <a className={styles.menu__logo} href="#Home">ロドリゴ</a>

      <button className={styles.menu__idiomButton}
        onClick={() => setLanguage(!language)}>
        {language ? 'English' : 'Português'}
      </button>

      <Hamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>

      <nav
        className={
          menuMobile
            ? `${styles.NavListOpen}`
            : `${styles.NavListClose}`
        }
      >
        <ul className={styles.NavListOpen__Ul}
        >
          {
            idiom.nav.map((navItem, index) => (
              <ListItems
                key={index} 
                label={navItem.label}
                href={navItem.href}
              />
            ))
          }
        </ul>
      </nav>
    </div>
  );
}