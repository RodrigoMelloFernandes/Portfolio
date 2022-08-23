import styles from './ListItems.module.scss';

interface IListItems {
  ListItemLink: string
}

export default function ListItems ({ListItemLink}:IListItems) {
  return (
    <li className={styles.listItem}>
      <a className={styles.listItem___link} href="#home">
        {ListItemLink}
      </a>
    </li>
  );
}