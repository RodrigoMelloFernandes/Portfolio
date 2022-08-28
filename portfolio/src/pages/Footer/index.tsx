import styles from './Footer.module.scss';
import {motion} from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub,} from 'react-icons/fa';
import { bounceVariant , fadeInUpVariant, fadeInLeftVariant} from 'animation/variants';
import Form from './Form';

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <motion.h2 className={styles.footer__title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >Contato</motion.h2>

      <Form/>
      
      <motion.hr className={styles.footer__line} 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={fadeInLeftVariant}
      />
      <div className={styles.footerSocialMBoxAndCopyRightBoxDesktopBox}>
        <motion.div className={styles.footer__footerSocialMBox}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8, margin : '400px'}}
          variants={fadeInUpVariant}
        >
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaInstagram
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaWhatsapp
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaLinkedinIn
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaGithub
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
        </motion.div>
        <motion.div className={styles.footer__footerCopyRightBox}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8, margin : '400px'}}
          variants={fadeInUpVariant}
        >
          <p className={styles.footer__footerCopyRightBox__title}>
            © Desenvolvido por<span className={styles.footer__footerCopyRightBox__title___span}>              Rodrigo Fernandes
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
