import { useState } from 'react';
import styles from './WorkExperienceAccordionComponent.module.scss';
import { IWorkExperienceAccordionComponent } from 'types/index';
import {motion} from 'framer-motion';

export default function WorkExperienceAccordionComponent({ timeLine, company, activity, activityResume }: IWorkExperienceAccordionComponent) {

  const [click, setClick] = useState(false);

  const fadeInUpVariant = {
    offscreen : {
      y : 150,
      opacity : 0
    },
    onscreen : {
      y : 0,
      opacity : 1,
      transition : {
        type : 'tween',
        duration : 1,
        delay: .2
      }
    }
  };
  return (
    <motion.div className={styles.workExperienceAccordionComponent}
      onClick={() => setClick(!click)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8, margin : '400px'}}
      variants={fadeInUpVariant}
    >
      <h3 className={styles.workExperienceAccordionComponent__title}>{timeLine}</h3>
      <div
        className={
          click
            ? `${styles.workExperienceAccordionComponent__collapseOpen}`
            : `${styles.workExperienceAccordionComponent__collapseClose}`
        }
      >
        <h4 className={styles.workExperienceAccordionComponent__collapseOpen___company}>{company} - {activity}</h4>
        <p className={styles.workExperienceAccordionComponent__collapseOpen___activityResume}>
          {activityResume}
        </p>
      </div>
    </motion.div>
  );
}