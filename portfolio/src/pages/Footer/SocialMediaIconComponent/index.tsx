import styles from './SocialMediaIconComponent.module.scss';
import { ISocialMediaComponent } from 'types';
import { FaInstagram ,  FaWhatsapp , FaLinkedinIn , FaGithub } from 'react-icons/fa';

export default function SocialMediaIconComponent ({iconType , href}:ISocialMediaComponent) {

  function handleIcon (iconType) {
    switch(iconType) {
    case 'Instagram' :
      return <FaInstagram/>;
      break;
    
    case 'Whatsapp' :
      return <FaWhatsapp/>;
      break;

    case 'Linkedin' :
      return <FaLinkedinIn/>;
      break;

    case 'Github' :
      return <FaGithub/>;
      break;
    }
  }

  return (
    <div className={styles.footerSocialMBoxInBox}>
      <a target="_blank" rel="noreferrer" className={styles.footerSocialMBoxInBox__icon} href={href}>{handleIcon(iconType)}</a>
    </div>
  );
}