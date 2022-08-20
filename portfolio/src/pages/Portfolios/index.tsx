import styles from './Porfolios.module.scss';
import portfoliosImgs from '../../../src/data/portfoliosImgs.json';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';

export default function Portfolios () {
  return (
    <section className={styles.portfolios}>
      <div className={styles.portfolios__portfoliosBox}>
        {
          portfoliosImgs.map((item, index) => (
            <PortfoliosBoxComponent url={item.url} key={index}/>
          ))
        }
      </div>
    </section>
  );
}

