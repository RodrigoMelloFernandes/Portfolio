import { IMenuState } from '../../../types';
import styles from './NavLinks.module.scss';
import navListItemsLinks from '../../../data/navListItemsLinks.json';
import ListItems from './ListItems';
 
export default function NavLinks({menuMobile, setMenuMobile}:IMenuState) {

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
          navListItemsLinks.map((item, index) => (
            <ListItems 
              ListItemLink={item.ListItemLink}
              key={index}
            /> 
          ))
        }
      </ul>
    </nav>
  );
}
