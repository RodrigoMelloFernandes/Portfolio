import styles from './StackBoxComponent.module.scss';

interface IStackBoxComponentImg {
  url: string
}

export default function StackBoxComponent ({url}:IStackBoxComponentImg) {
  return (
    <div className={styles.stackBoxComponent}>
      <img className={styles.stackBoxComponent__img} src={url} alt="Icon" />
    </div>
  );
}