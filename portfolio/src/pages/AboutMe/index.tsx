import styles from './AboutMe.module.scss';
import Button from './Button';
import fotoAtual from '../../assets/aboutMe/FotoAtual.jpg';
import { motion } from 'framer-motion';
import { bounceVariant , fadeInUpVariant } from 'animation/variants';

export default function AboutMe () {

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
            Sobre Mim
          </motion.h3>
          <h4 className={styles.aboutMe__TitleBoxAndImg___titleBox___secondTitle}>
            Centrado e organizado.
          </h4>
          <p className={styles.aboutMe__TitleBoxAndImg___titleBox___content}>
            Atualmente estou cursando 4° semestre em Análise e Desenvolvimento de
            Sistemas e buscando uma oportunidade na área de tecnologia, venho
            estudando a mais ou menos 2 anos com foco para me tornar um bom
            programador Front end.
          </p>
          <p className={styles.aboutMe__TitleBoxAndImg___titleBox___content}>
            Gosto de ler livros, praticar esportes, gastronomia, aprender e fazer
            um bom trabalho.
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