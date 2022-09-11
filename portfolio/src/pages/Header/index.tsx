import styles from './Header.module.scss';
import Hamburguer from './Hamburguer';
import NavLinks from './NavLinks';
import StackBoxComponent from './StackBoxComponent';
import stackIcons from '../../data/stackIcons.json';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { firstTitleVariant, secondTitleVariant, stackIconsVariant } from 'animation/variants';

export default function Header () {
  const [menuMobile, setMenuMobile] = useState(false);
  const{language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);


  return (
    
    <header className={styles.header} id="Home">
      <div className={styles.menu}>
        <a className={styles.menu__logo} href="#">ロドリゴ</a>
        <button className={styles.menu__idiomButton}
          onClick={() => setLanguage(!language)}>
          {language ? 'English' : 'Português'}
        </button>
        <Hamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
        <NavLinks menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>
      </div>
      <div className={styles.header__stacksIconsfatherBox}>
        <motion.div className={styles.header__stacksIconsBox}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={stackIconsVariant}
        >
          {
            stackIcons.map((icon, index) => (
              <StackBoxComponent key={index} url={icon.url}/>
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