import styles from './Footer.module.scss';
import Logo from 'assets/logo-branco.png';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { showContentVariants } from 'animation/showContentVariants';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Message from 'components/contact/Mensagem';

export default function Footer() {

  const [sendMessage, setSendMessage] = useState(false);

  function sendEmail(e:any) {
    e.preventDefault();  
  
    emailjs.sendForm('dianitaMessage', 'dianitaNewsletter', e.target, 'IPIHhrT_YpoRh8ivr')
      .then((result) => {
        setTimeout(() => {
          setSendMessage(true);
        }, 100);
        setTimeout(() => {
          setSendMessage(false);
        },4500);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  const rotas = [{
    label: 'Home', 
    to: 'home'
  },{
    label: 'Sobre', 
    to: 'sobre'
  },{
    label: 'Produtos', 
    to: 'produtos'
  },{
    label: 'Contato', 
    to: 'contato'
  }];
  
  return (
    <section className={styles.section}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainer__section}>
          <motion.div
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '30px' }} 
            className={styles.footerContainer__box}
          >
            <img src={Logo} alt="Logo" className={styles.footerContainer__box___logo}/>
            <p className={styles.footerContainer__box___content}>
              Peças com personalidade e <br />
              originalidade você encontra aqui.
            </p>
            <div className={styles.footerContainer__icontainer}>
              <a
                className={styles.footerContainer__icontainer___link}
                href="https://www.facebook.com/profile.php?id=100063636849048"
                target="_blank" rel="noreferrer"
              >
                <MdFacebook className={styles.footerContainer__icontainer___icon} />
              </a>
              <a
                className={styles.footerContainer__icontainer___link}
                href="https://www.instagram.com/dianitacosturacriativa/"
                target="_blank" rel="noreferrer"
              >
                <FaInstagram className={styles.footerContainer__icontainer___icon} />
              </a>
              <a 
                className={styles.footerContainer__icontainer___link}
                href="https://wa.me/5519983723718" 
                target="_blank" rel="noreferrer"
              >
                <FaWhatsapp className={styles.footerContainer__icontainer___icon} />
              </a>
            </div>
          </motion.div>
          
          <motion.article 
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '30px' }} 
            className={styles.footerContainer__address}
          >
            <h2 className={styles.footerContainer__address___title} title="location">
              Localização
            </h2>
            <address className={styles.footerContainer__address___box}>
              <FiMapPin
                className={styles.footerContainer__address___box____icon}
              />
              <p className={styles.footerContainer__address___box____content}>
                Piracicaba - São Paulo - Brasil
              </p>
            </address>
            <address className={styles.footerContainer__address___box}>
              <FiPhone
                className={styles.footerContainer__address___box____icon}
              />
              <p className={styles.footerContainer__address___box____content}>
                +55 19 983723718
              </p>
            </address>
            <address className={styles.footerContainer__address___box}>
              <FiMail
                className={styles.footerContainer__address___box____icon}
              />
              <p className={styles.footerContainer__address___box____content}>
                info@example.com
              </p>
            </address>
          </motion.article>
        </div>

        <div className={styles.footerContainer__section}>
          <motion.div 
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '30px' }} 
            className={styles.footerContainer__links}
          >
            <h2 className={styles.footerContainer__links___title}>Links</h2>
            {
              rotas.map((rota, index) => (
                <p 
                  key={index} 
                  className={styles.footerContainer__links___content} 
                >
                  <Link to={rota.to} smooth={true} duration={1000}>
                    {rota.label}
                  </Link>
                </p>
              ))
            }
          </motion.div>

          <motion.form
            onSubmit={sendEmail} 
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '30px' }} 
            className={styles.footerContainer__newsletter}
          >
            <h2 className={styles.footerContainer__newsletter___title}>
              Novidades
            </h2>
            {sendMessage ? <Message type='footer'/> : <span></span> }
            <p className={styles.footerContainer__newsletter___content}>
              Cadastre seu email para receber notificações de novos produtos
            </p>
            <input
              className={styles.footerContainer__newsletter___input}
              type="email"
              placeholder="info@example.com"
            />
            <button 
              type='submit'
              className={styles.footerContainer__newsletter___button}
            >
              Assinar
            </button>
          </motion.form>
        </div>

        <motion.div 
          variants={showContentVariants}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{ once: true, amount: 0.8, margin: '10px' }} 
          className={styles.footerContainer__copyright}
        >
          <p>
            &copy;{' '}
            <span>
              dianitacosturacriativa.com.br
              <br />
            </span>{' '}
            Todos os direitos Reservados.
          </p>
          <p>
            Designed by{' '}
            <a
              href="https://wa.me/5519984009105"
              target="_blank"
              rel="noreferrer"
            >
              Thiago Fernandes
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
