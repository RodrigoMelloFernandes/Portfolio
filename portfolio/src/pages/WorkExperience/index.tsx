import styles from './WorkExperience.module.scss';
import WorkExperienceAccordionComponent from './WorkExperienceAccordionComponent';
import workExperienceAccordionInfos from '../../data/workExperienceAccordionInfos.json';
import {motion} from 'framer-motion';
import {bounceVariant} from 'animation/variants';

export default function WorkExperience () {

  return (
    <section className={styles.workExperience}>      
      <motion.h3 className={styles.workExperience__firstTitleComponent}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8, margin : '400px'}}
        variants={bounceVariant}
      >Experiências de Trabalho</motion.h3>
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