import styles from './Header.module.scss';
import { useState } from 'react';
import Hamburguer from './Hamburguer';
import NavLinks from './NavLinks';
import StackBoxComponent from './StackBoxComponent';
import stackIcons from '../../data/stackIcons.json';
import { motion } from 'framer-motion';
import { firstTitleVariant, secondTitleVariant, stackIconsVariant } from 'animation/variants';

export default function Header () {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <a className={styles.menu__logo} href="#">ロドリゴ</a>
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
            Rodrigo Fernandes
          </motion.h1>
          <motion.h1 className={styles.header__TitleBox___firstTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={secondTitleVariant}
          >
            ロドリゴ・フェルナンデス
          </motion.h1>
          <motion.h2 className={styles.header__TitleBox___secondTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={firstTitleVariant}
          >
            Desenvolvedor Front End
          </motion.h2>
          <motion.h2 className={styles.header__TitleBox___secondTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={secondTitleVariant}
          >
            フロントエンドの開発者
          </motion.h2>
        </div>
      </div>
    </header>
  );
}