import styles from './Portfolios.module.scss';
import portfoliosImgs from 'data/portfoliosImgs.json';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';
import { motion } from 'framer-motion';

export default function Portfolios () {
  const bounceVariant = {
    offscreen: {
      scale : 0
    },
    onscreen : {
      scale : [ .5 , 1],
      transition : {
        type : 'tween',
        duration : 1,
        delay : .3
      }
    }
  };

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

