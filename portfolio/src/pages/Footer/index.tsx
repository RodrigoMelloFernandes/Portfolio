import styles from './Footer.module.scss';

import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub,} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__title}>Contato</h2>
      <form className={styles.footer__contactBox}>
        <input
          className={styles.footer__contactBox___input}
          type="text"
          placeholder="Seu Nome"
        />
        <input
          className={styles.footer__contactBox___input}
          type="email"
          placeholder="Seu Email"
        />
        <textarea
          className={styles.footer__contactBox___textArea}
          placeholder="Mensagem"
        ></textarea>
        <button className={styles.footer__contactBox___button} type="submit">
          Enviar Mensagem
        </button>
      </form>

      <hr className={styles.footer__line} />
      <div className={styles.footerSocialMBoxAndCopyRightBoxDesktopBox}>
        <div className={styles.footer__footerSocialMBox}>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaInstagram
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaWhatsapp
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaLinkedinIn
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
          <div
            className={styles.footer__footerSocialMBox___footerSocialMBoxInBox}
          >
            <FaGithub
              className={
                styles.footer__footerSocialMBox___footerSocialMBoxInBox____icon
              }
            />
          </div>
        </div>
        <div className={styles.footer__footerCopyRightBox}>
          <p className={styles.footer__footerCopyRightBox__title}>
            © Desenvolvido por<span className={styles.footer__footerCopyRightBox__title___span}>              Rodrigo Fernandes
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
