import styles from './StackBoxComponent.module.scss';
import { IStackBoxComponentImg } from 'types';

export default function StackBoxComponent ({img , alt}:IStackBoxComponentImg) {
  return (
    <div className={styles.stackBoxComponent}>
      <img 
        className={styles.stackBoxComponent__img} 
        src={img} 
        alt={alt} 
      />
    </div>
  );
}