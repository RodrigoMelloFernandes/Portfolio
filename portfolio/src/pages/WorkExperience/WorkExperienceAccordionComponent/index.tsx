import { useState } from 'react';
import styles from './WorkExperienceAccordionComponent.module.scss';
import { IWorkExperienceAccordionComponent } from 'types/index';

export default function WorkExperienceAccordionComponent({ timeLine, company, activity, activityResume }: IWorkExperienceAccordionComponent) {

  const [click, setClick] = useState(false);

  return (
    <div className={styles.workExperienceAccordionComponent}
      onClick={() => setClick(!click)}
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
    </div>
  );
}