import styles from './Footer.module.scss';
import Form from './Form';
import SocialMediaIconComponent from './SocialMediaIconComponent';
import socialMediaIcons from '../../data/socialMediaIcons.json';
import { motion } from 'framer-motion';
import { bounceVariant , fadeInUpVariant, fadeInLeftVariant} from 'animation/variants';

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
          {
            socialMediaIcons.map((item, index) => (
              <SocialMediaIconComponent url={item.url} key={index} />
            ))
          }
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
