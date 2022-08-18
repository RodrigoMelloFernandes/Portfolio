import styles from './hexagonContainer.module.scss';

interface IHexagonImg {
  url: string
}

export default function HexagonContainer ({url}:IHexagonImg) {
  return (
    <>
      <div className={styles.hexagonContainer}>
        <img className={styles.hexagonContainer__img} src={url} alt="Icon" />
      </div>
    </>
  );
}