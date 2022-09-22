import styles from './Portfolios.module.scss';
import PortfoliosBoxComponent from './PortfoliosBoxComponent';
import { motion } from 'framer-motion';
import { bounceVariant} from 'animation/variants';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Portfolios () {
  const{language, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);

  return (
    <section className={styles.portfolios} id="Portfolios">
      <motion.h3 className={styles.portfolios__firstTitleComponent}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >{idiom.portfolios.firstTitleComponent}</motion.h3>
      <div className={styles.portfolios__fatherBoxPortfoliosBoxComponent}>
        {
          idiom.portfolios.portfoliosImgs.map((item, index) => (
            <PortfoliosBoxComponent 
              key={index}
              img={item.img}
              alt={item.alt}
              content={item.content}
            />
          ))
        }
      </div>
    </section>
  );
}

