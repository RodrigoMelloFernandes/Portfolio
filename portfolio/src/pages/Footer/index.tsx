import styles from './Footer.module.scss';
import {motion} from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub,} from 'react-icons/fa';

export default function Footer() {
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

  const fadeInRightVariant = {
    offscreen : {
      x : 150,
      opacity : 0
    },
    onscreen : {
      x : 0,
      opacity : 1,
      transition : {
        type : 'tween',
        duration : 1,
        delay: .2
      }
    }
  };

  const fadeInLeftVariant = {
    offscreen : {
      x : -150,
      opacity : 0
    },
    onscreen : {
      x : 0,
      opacity : 1,
      transition : {
        type : 'tween',
        duration : 1,
        delay: .2
      }
    }
  };

  

  return (
    <footer className={styles.footer}>
      <motion.h2 className={styles.footer__title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >Contato</motion.h2>
      <motion.form className={styles.footer__contactBox}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={fadeInRightVariant}
      >
        <input
          className={styles.footer__contactBox___input}
          type="text"
          placeholder="Seu Nome"
        />
        <input
          className={styles.footer__contactBox___input}
          type="email"
          placeholder="Seu Email"
        />
        <textarea
          className={styles.footer__contactBox___textArea}
          placeholder="Mensagem"
        ></textarea>
        <button className={styles.footer__contactBox___button} type="submit">
          Enviar Mensagem
        </button>
      </motion.form>

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
