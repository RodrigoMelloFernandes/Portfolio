import styles from './Portfolios.module.scss';
import portfoliosImgs from '../../../src/data/portfoliosImgs.json';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';

export default function Portfolios () {
  return (
    <section className={styles.portfolios}>
      <div className={styles.portfolios__paddingBox}>
        <h2 className={styles.portfolios__firstTitleComponent}>Portfólios</h2>
        <div className={styles.portfolios__portfoliosBox}>
          {
            portfoliosImgs.map((item, index) => (
              <PortfoliosBoxComponent url={item.url} key={index}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}

