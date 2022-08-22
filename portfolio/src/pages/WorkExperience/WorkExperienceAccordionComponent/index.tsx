import styles from './WorkExperienceAccordionComponent.module.scss';


export default function WorkExperienceAccordionComponent () {
  return (
    <div className={styles.workExperienceAccordionComponent}>
      <h2 className={styles.workExperienceAccordionComponent__title}>Atualmente</h2>
      <button className={styles.workExperienceAccordionComponent__button}>X</button>
      <div className={styles.workExperienceAccordionComponent__collapse}>
        <p className={styles.workExperienceAccordionComponent__collapse___content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci optio assumenda labore quaerat, ad, temporibus a quibusdam, perferendis ex voluptatibus esse sequi iure. Ut facere optio provident repellat ex?
        </p>
      </div>
    </div>
  );
}