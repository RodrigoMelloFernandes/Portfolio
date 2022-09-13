import styles from './ListItems.module.scss';
import { IListItems } from 'types';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function ListItems ({label, href}:IListItems) {
  return (
    <li className={styles.listItem}>
      <AnchorLink 
        className={styles.listItem___link}
        href={href}  
      >
        {label} 
      </AnchorLink>
    </li>
  );
}

