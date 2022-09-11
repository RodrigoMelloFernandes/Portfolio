import styles from './AboutMe.module.scss';
import Button from './Button';
import fotoAtual from '../../assets/aboutMe/FotoAtual.jpg';
import { motion } from 'framer-motion';
import { bounceVariant , fadeInUpVariant } from 'animation/variants';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';


export default function AboutMe () {
  const{language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);

  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__TitleBoxAndImg}>
        <div className={styles.aboutMe__TitleBoxAndImg___titleBox}>
          <motion.h3 className={styles.aboutMe__TitleBoxAndImg___titleBox___firstTitleComponent}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8, margin : '400px'}}
            variants={bounceVariant}
          >
            {idiom.aboutMe.firstTitleComponent}
          </motion.h3>
          <h4 className={styles.aboutMe__TitleBoxAndImg___titleBox___secondTitle}>
            {idiom.aboutMe.secondTitle}
          </h4>
          <p className={styles.aboutMe__TitleBoxAndImg___titleBox___content}>
            {idiom.aboutMe.content}
          </p>
          <p className={styles.aboutMe__TitleBoxAndImg___titleBox___content}>
            {idiom.aboutMe.personalContent}
          </p>
          <Button></Button>
        </div>
        <motion.img src={fotoAtual} className={styles.aboutMe__TitleBoxAndImg___img}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8, margin : '400px'}}
          variants={fadeInUpVariant}
        />
      </div>
    </section>
  );
}