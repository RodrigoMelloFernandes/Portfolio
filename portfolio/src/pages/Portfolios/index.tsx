import styles from './Portfolios.module.scss';
import portfoliosImgs from 'data/portfoliosImgs.json';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';
import { motion } from 'framer-motion';
import { bounceVariant} from 'animation/variants';

export default function Portfolios () {

  return (
    <section className={styles.portfolios}>
      <motion.h3 className={styles.portfolios__firstTitleComponent}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >Portfólios</motion.h3>
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

