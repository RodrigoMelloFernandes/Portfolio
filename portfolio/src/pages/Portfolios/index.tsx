import styles from './Portfolios.module.scss';
import portfoliosImgs from 'data/portfoliosImgs.json';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';

export default function Portfolios () {
  return (
    <section className={styles.portfolios}>
      <h3 className={styles.portfolios__firstTitleComponent}>Portfólios</h3>
      <div className={styles.portfolios__fatherBoxPortfoliosBoxComponent}>
        {
          portfoliosImgs.map((item, index) => (
            <PortfoliosBoxComponent url={item.url} key={index}/>
          ))
        }
      </div>
    </section>
  );
}

