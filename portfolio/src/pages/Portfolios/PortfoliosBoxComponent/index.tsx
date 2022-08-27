import styles from './PortfoliosBoxComponent.module.scss';
import { motion} from 'framer-motion';
interface IPortfoliosImg {
  url : string
}

export default function portfoliosBoxComponent ({url}: IPortfoliosImg) {
  const fadeInUpVariant = {
    offscreen : {
      y : 150,
      opacity : 0
    },
    onscreen : {
      y : 0,
      opacity : 1,
      transition : {
        type : 'tween',
        duration : 1,
        delay: .2
      }
    }
  };

  return (
    <motion.div className={styles.portfoliosBoxComponent}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8, margin : '400px'}}
      variants={fadeInUpVariant}
    >
      <img className={styles.portfoliosBoxComponent__img} src={url} alt="portfoliosImgs" />
      <div className={styles.portfoliosBoxComponent__boxComponentHover}>
        <h3 className={styles.portfoliosBoxComponent__boxComponentHover___title}>Em Breve</h3>
      </div>
    </motion.div>
  );
}