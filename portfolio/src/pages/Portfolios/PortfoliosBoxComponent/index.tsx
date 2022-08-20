import styles from './PortfoliosBoxComponent.module.scss';

interface IPortfoliosImg {
  url : string
}

export default function portfoliosBoxComponent ({url}: IPortfoliosImg) {
  return (
    <div className={styles.portfoliosBoxComponent}>
      <img className={styles.portfoliosBoxComponent__img} src={url} alt="portfoliosImgs" />
      <div className={styles.portfoliosBoxComponent__boxComponentHover}>
        <h3 className={styles.portfoliosBoxComponent__boxComponentHover___title}>Em Breve</h3>
      </div>
    </div>
  );
}