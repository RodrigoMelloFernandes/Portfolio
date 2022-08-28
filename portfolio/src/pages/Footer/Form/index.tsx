import styles from './Form.module.scss';
import { motion } from 'framer-motion';
import { fadeInRightVariant } from 'animation/variants';

export default function Form () {
  return (
    <motion.form className={styles.contactBox}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8, margin : '400px'}}
      variants={fadeInRightVariant}
    >
      <input
        className={styles.contactBox__input}
        type="text"
        placeholder="Seu Nome"
      />
      <input
        className={styles.contactBox__input}
        type="email"
        placeholder="Seu Email"
      />
      <textarea
        className={styles.contactBox__textArea}
        placeholder="Mensagem"
      ></textarea>
      <button className={styles.contactBox__button} type="submit">
      Enviar Mensagem
      </button>
    </motion.form>
  );
}