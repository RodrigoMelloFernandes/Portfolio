import styles from './Header.module.scss';

import StackBoxComponent from './StackBoxComponent';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { firstTitleVariant, secondTitleVariant, stackIconsVariant } from 'animation/variants';

export default function Header () {
  const{language, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);

  return (
    <header className={styles.header} id="Home">
      <div className={styles.header__stacksIconsfatherBox}>
        <motion.div className={styles.header__stacksIconsBox}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={stackIconsVariant}
        >
          {
            idiom.header.stackIconsImgs.map((item, index) => (
              <StackBoxComponent 
                key={index} 
                img={item.img}
                alt={item.alt}
              />
            ))
          }
        </motion.div>
        <div className={styles.header__TitleBox}>
          <motion.h1 className={styles.header__TitleBox___firstTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={firstTitleVariant}
          >
            {idiom.header.firstTitle}
          </motion.h1>
          <motion.h1 className={styles.header__TitleBox___firstTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={secondTitleVariant}
          >
            {idiom.header.japaneseFirstTitle}
          </motion.h1>
          <motion.h2 className={styles.header__TitleBox___secondTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={firstTitleVariant}
          >
            {idiom.header.secondTitle}
          </motion.h2>
          <motion.h2 className={styles.header__TitleBox___secondTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={secondTitleVariant}
          >
            {idiom.header.japaneseSecondTitle}
          </motion.h2>
        </div>
      </div>
    </header>
  );
}