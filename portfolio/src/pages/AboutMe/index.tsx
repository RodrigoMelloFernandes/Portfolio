import styles from './AboutMe.module.scss';
import fotoAtual from '../../assets/aboutMe/FotoAtual.jpg';
import Button from '../../components/Button';

export default function AboutMe () {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__paddingBox}>
        <div className={styles.aboutMe__TitleBox}>
          <h3 className={styles.aboutMe__TitleBox___title}>
            Sobre Mim
          </h3>
          <h4 className={styles.aboutMe__TitleBox___subtitle}>
            Centrado e organizado.
          </h4>
          <p className={styles.aboutMe__TitleBox___content}>
            Atualmente estou cursando 3° semestre em Análise e Desenvolvimento de
            Sistemas e buscando uma oportunidade na área de tecnologia, venho
            estudando a mais ou menos 2 anos com foco para me tornar um bom
            programador Front end.
          </p>
          <p className={styles.aboutMe__TitleBox___content}>
            Gosto de ler livros, praticar esportes, gastronomia, aprender e fazer
            um bom trabalho.
          </p>
          {/* <button className={styles.aboutMe__TitleBox___button}>
            Download CV
          </button> */}
          <Button></Button>
        </div>
        <img src={fotoAtual} className={styles.aboutMe__img}/>
      </div>
    </section>
  );
}