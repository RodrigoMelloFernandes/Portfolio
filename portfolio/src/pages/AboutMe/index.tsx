import styles from './AboutMe.module.scss';
import fotoAtual from '../../assets/aboutMe/FotoAtual2.jpg';
import Button from '../../components/Button';

export default function AboutMe () {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__TitleBoxAndImg}>
        <div className={styles.aboutMe__TitleBoxAndImg___titleBox}>
          <h3 className={styles.aboutMe__TitleBoxAndImg___titleBox___firstTitleComponent}>
            Sobre Mim
          </h3>
          <h4 className={styles.aboutMe__TitleBoxAndImg___titleBox___secondTitle}>
            Centrado e organizado.
          </h4>
          <p className={styles.aboutMe__TitleBoxAndImg___titleBox___content}>
            Atualmente estou cursando 3° semestre em Análise e Desenvolvimento de
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
        <img src={fotoAtual} className={styles.aboutMe__TitleBoxAndImg___img}/>
      </div>
    </section>
  );
}