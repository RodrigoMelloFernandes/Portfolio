import styles from './WorkExperience.module.scss';
import WorkExperienceAccordionComponent from './WorkExperienceAccordionComponent';
import workExperienceAccordionInfos from '../../data/workExperienceAccordionInfos.json';


export default function WorkExperience () {
  return (
    <section className={styles.workExperience}>      
      <h3 className={styles.workExperience__firstTitleComponent}>Experiências de Trabalho</h3>
      <div className={styles.workExperience__fatherBoxWorkExperienceAccordionComponent}>
        {
          workExperienceAccordionInfos.map((item, index) =>(
            <WorkExperienceAccordionComponent 
              timeLine={item.timeLine}
              company={item.company}
              activity={item.activity}
              activityResume={item.activityResume}
              key={index}
            />
          ))
        }
      </div>     
    </section>
  );
}