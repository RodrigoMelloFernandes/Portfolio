import styles from './NavLinks.module.scss';
import ListItems from './ListItems';
import { IMenuState } from 'types';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
 
export default function NavLinks({menuMobile, setMenuMobile}:IMenuState) {
  const{language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);
  return (
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
  );
}
