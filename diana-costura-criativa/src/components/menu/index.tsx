import { useState } from 'react';
import { FaInstagram, FaMapPin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdFacebook } from 'react-icons/md';
import { Link } from 'react-scroll';
import LogoPreto from 'assets/logo-preto.png';
import LogoBranco from 'assets/logo-branco.png';
import styles from './Menu.module.scss';
import style from './Nav.module.scss';


export default function Menu() {
  
  // --mobileMenu é referente a tag nav que contem a lista de links
  const [mobileMenu, setMobileMenuState] = useState(false);
  // --desktopMenu é referente a o estado fixo do menu ao scrolar
  const [stickyMenu, setStickyMenu] = useState(false);
  // --width guarda o valor da tela para usar na cor do hamburguer
  const width = window.innerWidth;
   


  function scrollPosition(){
    if(scrollY > 50) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  }

  window.addEventListener('scroll', scrollPosition);
  
  const rotas = [{
    label: 'Home', 
    to: 'home',
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
    <>
      {/* pré cabecalho */}
      <div className={styles.menu__container}>
        <div className={styles.menu__box}>
          <FaMapPin className={styles.icone} />
          <p className={styles.menu__box___content}>
              Piracicaba - São Paulo, Brazil
          </p>
          <MdEmail className={styles.icone} />
          <p className={styles.menu__box___content}>diana@costuracriativa.com</p>
        </div>

        <div className={styles.menu__box}>
          <p className={styles.menu__content}>Redes Sociais:</p>
          <a
            href="https://www.facebook.com/profile.php?id=100063636849048"
            target="_blank" rel="noreferrer"
          >
            <MdFacebook className={styles.icone} />
          </a>
          <a
            href="https://www.instagram.com/dianitacosturacriativa/"
            target="_blank" rel="noreferrer"
          >
            <FaInstagram className={styles.icone} />
          </a>
          <a 
            href="https://wa.me/5519983723718" 
            target="_blank" rel="noreferrer"
          >
            <FaWhatsapp className={styles.icone} />
          </a>
        </div>
      </div>

      {/* cabecalho */}
      <div className={
        stickyMenu 
          ? `${style.desktopActive}` 
          : `${style.navContainer}`}
      >
        {stickyMenu 
          ? <Link to={rotas[0].to} smooth={true} duration={1000}>
            <img src={LogoBranco} alt="Logotipo" className={style.logo}/>
          </Link> 
          : <Link to={rotas[0].to} smooth={true} duration={1000}>
            <img src={LogoPreto} alt="Logotipo" className={style.logo}/>
          </Link>
        }

        <button
          className={style.navContainer__hamburguer}
          onClick={() => setMobileMenuState(!mobileMenu)}
        >
          <div className={
            //se o stickyMenu for false (position: none): icone marrom
            //se o stickyMenu for true (position : sticky): icone branco
            stickyMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div>
          <div className={
            stickyMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div><div className={
            stickyMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div>
        </button>

        <nav
          className={
            // se a medida da tela for MENOR que mil px e o mobileMenu true: a animacao da caixa lateral para mobile acontece
            // se a medida da tela for MAIOR que mil px, nao tem animacao e o menu fica fixo
            width < 1000 && mobileMenu 
              ? `${style.navContainer__navOpen}` 
              : `${style.navContainer__navClose}`
          }
        >
          <ul
            className={
              // se a medida da tela for MENOR que mil px e o mobileMenu true: a animacao da caixa lateral para mobile acontece
              // se a medida da tela for MAIOR que mil px, nao tem animacao e o menu fica fixo
              width < 1000 && mobileMenu
                ? `${style.navContainer__ulOpen}`
                : `${style.navContainer__ulClose}`
            }
          >
            {
              rotas.map((rota, index) => (
                <li 
                  key={index} 
                  className={style.item} 
                  onClick={() => setMobileMenuState(!mobileMenu)}
                >
                  <Link 
                    to={rota.to} 
                    smooth={true} 
                    duration={1000}
                    onClick={() => setMobileMenuState(false)}
                  >
                    {rota.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  );
}
