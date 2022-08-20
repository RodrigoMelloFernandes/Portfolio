import styles from './WorkExperienceBoxComponent.module.scss';

interface IWorkExperienceBoxComponent {
  Timeline : string
  Company : string
  Activity : string
  ActivitySummary : string
}

export default function WorkExperienceBoxComponent ({Timeline, Company, Activity, ActivitySummary} :IWorkExperienceBoxComponent) {
  return (
    <div className={styles.workExperienceBoxComponent}>
      <p className={styles.workExperienceBoxComponent__timeline}>{Timeline}</p>
      <h3 className={styles.workExperienceBoxComponent__company}>{Company}</h3>
      <h4 className={styles.workExperienceBoxComponent__activity}>{Activity}</h4>
      <p className={styles.workExperienceBoxComponent__activitySummary}>{ActivitySummary}</p>
    </div>
  );
}