import styles from './Form.module.scss';
import { motion } from 'framer-motion';
import { fadeInRightVariant } from 'animation/variants';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Form () {
  const [sendMessage, setSendMessage] = useState(false);
  
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
        type="text"
        placeholder="Seu Nome"
        name="name"
      />
      <input
        className={styles.contactBox__input}
        type="email"
        placeholder="Seu Email"
        name="email"
      />

      <input
        className={styles.contactBox__input}
        type="text"
        placeholder="Informe seu assunto"
        name="subject"
      />
      <textarea
        className={styles.contactBox__textArea}
        placeholder="Mensagem"
        name="message"
      ></textarea>

      <button className={styles.contactBox__button} type="submit">
      Enviar Mensagem
      </button>
    </motion.form>
  );
}