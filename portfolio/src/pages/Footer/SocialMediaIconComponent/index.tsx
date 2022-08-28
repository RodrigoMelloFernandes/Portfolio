import styles from './SocialMediaIconComponent.module.scss';
import { ISocialMediaComponent } from 'types';

export default function SocialMediaIconComponent ({url}:ISocialMediaComponent) {
  return (
    <div className={styles.footerSocialMBoxInBox}>
      <img src={url} className={styles.footerSocialMBoxInBox__icon}/>
    </div>
  );
}