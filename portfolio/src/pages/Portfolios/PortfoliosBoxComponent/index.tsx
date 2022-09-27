import styles from './PortfoliosBoxComponent.module.scss';
import { motion } from 'framer-motion';
import { IPortfoliosImg } from 'types';
import { fadeInUpVariant } from 'animation/variants';

export default function portfoliosBoxComponent ({img, alt, content}: IPortfoliosImg) {

  return (
    <motion.div className={styles.portfoliosBoxComponent}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8, margin : '400px'}}
      variants={fadeInUpVariant}
    >
      <img 
        className={styles.portfoliosBoxComponent__img} 
        src={img} 
        alt={alt} 
      />
      <div className={styles.portfoliosBoxComponent__boxComponentHover}>
        <h3 className={styles.portfoliosBoxComponent__boxComponentHover___title}>{content}</h3>
      </div>
    </motion.div>
  );
}