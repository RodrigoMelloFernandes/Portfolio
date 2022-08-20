import styles from './WorkExperience.module.scss';
import workExperienceContent from '../../data/workExperienceContent.json';
import WorkExperienceBoxComponent from './WorkExperienceBoxComponent';

export default function WorkExperience () {
  return (
    <section className={styles.workExperience}>      
      <h3 className={styles.workExperience__firstTitleComponent}>Experiências de Trabalho</h3>
      <div className={styles.workExperience__fatherBox}>
        {
          workExperienceContent.map((item, index) => (
            <WorkExperienceBoxComponent
              Timeline={item.Timeline}
              Company={item.Company}
              Activity={item.Activity}
              ActivitySummary={item.ActivitySummary}
              key={index}
            /> 
          ))
        }
      </div>     
    </section>
  );
}