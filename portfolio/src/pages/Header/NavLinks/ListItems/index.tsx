import styles from './ListItems.module.scss';
import { IListItems } from 'types';


export default function ListItems ({label, href, offset}:IListItems) {
  return (
    <li className={styles.listItem}>
      <a 
        className={styles.listItem___link}
        href={href}  
      >
        {label} 
      </a>
    </li>
  );
}