import styles from './Footer.module.scss';
import Form from './Form';
import SocialMediaIconComponent from './SocialMediaIconComponent';
import { motion } from 'framer-motion';
import { bounceVariant , fadeInUpVariant, fadeInLeftVariant} from 'animation/variants';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Footer() {
  const{language, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);

  return (
    <footer className={styles.footer} id="Contact">
      <motion.h2 className={styles.footer__firstTitleComponent}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >{idiom.footer.firstTitleComponent}</motion.h2>

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
            idiom.footer.socialMediaIcons.map((item, index) => (
              <SocialMediaIconComponent
                iconType={item.iconType}
                href={item.href}
                key={index} />
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
            {idiom.footer.copyRight}<span className={styles.footer__footerCopyRightBox__title___span}>
              {idiom.footer.developer}              
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
