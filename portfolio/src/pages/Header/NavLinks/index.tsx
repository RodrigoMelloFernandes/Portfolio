import { IMenuState } from '../../../types';
import styles from './NavLinks.module.scss';
import navListItemsLinks from '../../../data/navListItemsLinks.json';
import ListItems from './ListItems';

export default function NavLinks({menuMobile, setMenuMobile}:IMenuState) {

  const navListItemVariant = {
    initial : {
      y : -50,
      opacity : 0
    },
    animate : {
      y : 0,
      opacity : 1,
      transition: {
        duration : 1.2,
        delay: 3
      }
    },
  };


  return (
    <nav
      className={
        menuMobile
          ? `${styles.NavListOpen}`
          : `${styles.NavListClose}`
      }
    >
      <ul className={styles.NavListOpen__Ul}>
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
