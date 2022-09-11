import styles from './SocialMediaIconComponent.module.scss';
import { ISocialMediaComponent } from 'types';

export default function SocialMediaIconComponent ({img, alt}:ISocialMediaComponent) {
  return (
    <div className={styles.footerSocialMBoxInBox}>
      <img src={img} alt={alt}className={styles.footerSocialMBoxInBox__icon}/>
    </div>
  );
}