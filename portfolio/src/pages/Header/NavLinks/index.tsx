import styles from './NavLinks.module.scss';
import ListItems from './ListItems';
import navListItemsLinks from '../../../data/navListItemsLinks.json';
import { IMenuState } from 'types';

 
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
