import styles from './WorkExperience.module.scss';
import WorkExperienceAccordionComponent from './WorkExperienceAccordionComponent';



export default function WorkExperience () {
  return (
    <section className={styles.workExperience}>      
      <h3 className={styles.workExperience__firstTitleComponent}>Experiências de Trabalho</h3>
      <div className={styles.workExperience__fatherBoxWorkExperienceAccordionComponent}>
        <WorkExperienceAccordionComponent/>
      </div>     
    </section>
  );
}