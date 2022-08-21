import { IMenuState } from '../../../types';
import styles from './NavLinks.module.scss';
import navListItemsLinks from '../../../data/navListItemsLinks.json';
import ListItems from './ListItem';
import { motion } from 'framer-motion';

export default function NavLinks({menuMobile, setMenuMobile}:IMenuState) {

  const navListItemVariant = {
    initial : {
      y : -50,
    },
    animate : {
      y : 0,
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
      <motion.ul className={styles.NavListOpen__Ul}
        initial="initial"
        animate="animate"
        variants={navListItemVariant}
      >
        {
          navListItemsLinks.map((item, index) => (
            <ListItems 
              ListItemLink={item.ListItemLink}
              key={index}
            /> 
          ))
        }
      </motion.ul>
    </nav>
  );
}
