import styles from './ListItems.module.scss';
import { IListItems } from 'types';


export default function ListItems ({ListItemLink}:IListItems) {
  return (
    <li className={styles.listItem}>
      <a className={styles.listItem___link}>
        {ListItemLink}
      </a>
    </li>
  );
}