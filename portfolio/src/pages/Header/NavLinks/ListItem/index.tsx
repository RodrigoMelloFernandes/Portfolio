import styles from './ListItem.module.scss';

interface IListItems {
  ListItemLink: string
}

export default function ListItem ({ListItemLink}:IListItems) {
  return (
    <li className={styles.listItem}>
      <a className={styles.listItem__link} href="#home">
        {ListItemLink}
      </a>
    </li>
  );
}