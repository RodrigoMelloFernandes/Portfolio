import styles from './hexagon.module.scss';

interface IHexagonImg {
  url: string
}

export default function Hexagon ({url}:IHexagonImg) {
  return (
    <>
      <div className={styles.hexagon}>
        <img className={styles.hexagon__img} src={url} alt="Icon" />
      </div>
    </>
  );
}