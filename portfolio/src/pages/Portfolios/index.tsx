import styles from './Portfolios.module.scss';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';
import portfoliosImgs from 'data/portfoliosImgs.json';
import { motion } from 'framer-motion';
import { bounceVariant} from 'animation/variants';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Portfolios () {
  const{language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);

  return (
    <section className={styles.portfolios}>
      <motion.h3 className={styles.portfolios__firstTitleComponent}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >{idiom.portfolios}</motion.h3>
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

