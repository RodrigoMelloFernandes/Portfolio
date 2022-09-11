import styles from './Form.module.scss';
import { motion } from 'framer-motion';
import { fadeInRightVariant } from 'animation/variants';
import emailjs from 'emailjs-com';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Form () {
  const [sendMessage, setSendMessage] = useState(false);

  const{language, HandleLanguage} = useContext(LanguageContext);
  const idiom = HandleLanguage(language);
  
  function sendEmail(e:any) {
    e.preventDefault();  
  
    emailjs.sendForm('gmailMessage', 'template_6lnqbf5', e.target, 'WstIovvLlZRrtTkeW')
      .then((result) => {
        setTimeout(() => {
          setSendMessage(true);
          console.log('Mensagem enviada');
        }, 100);
        setTimeout(() => {
          setSendMessage(false);
        },4500);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <motion.form className={styles.contactBox} onSubmit={sendEmail}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8, margin : '400px'}}
      variants={fadeInRightVariant}
    >
      <input
        className={styles.contactBox__input}
        type={idiom.footer.form.inputName.type}
        placeholder={idiom.footer.form.inputName.placeholder}
        name={idiom.footer.form.inputName.name}
      />
      <input
        className={styles.contactBox__input}
        type={idiom.footer.form.inputEmail.type}
        placeholder={idiom.footer.form.inputEmail.placeholder}
        name={idiom.footer.form.inputEmail.name}
      />

      <input
        className={styles.contactBox__input}
        type={idiom.footer.form.inputSubject.type}
        placeholder={idiom.footer.form.inputSubject.placeholder}
        name={idiom.footer.form.inputSubject.name}
      />
      <textarea
        className={styles.contactBox__textArea}
        placeholder={idiom.footer.form.textArea.placeholder}
        name={idiom.footer.form.textArea.name}
      ></textarea>

      <button className={styles.contactBox__button} type={idiom.footer.form.button.type}>
        {idiom.footer.form.button.content}
      </button>
    </motion.form>
  );
}