import styles from './Produtos.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
import { useState } from 'react';
import Itens from './Itens';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';
import { showContentVariants } from 'animation/showContentVariants';


export default function Products() {
  //o estado da busca e do filtro ficam um nivel acima dele mesmos, isto é, acima do componente:
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<string | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <>
      {/* produtos header*/}
      <section className={styles.container} id="produtos">
        <div className={styles.produtosHeader}>
          <motion.h2 
            variants={titleOfSectionVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '10px' }}
            className={styles.produtosHeader__title}
          >
            Meus Produtos
          </motion.h2>
          <motion.p 
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '10px' }}
            className={styles.produtosHeader__content}
          >
            A marca Dianita costura criativa, é especialista em oferecer
            produtos para a organização e praticidade ao seu dia a dia no
            trabalho e/ou lazer, aliada a muito estilo e bom gosto. E aquele
            acabamento perfeito com detalhes que você só encontra em um produto
            artesanal.
          </motion.p>
        </div>

        {/* produtos buscador */}
        {/* buscador possui um atributo busca que eh o ESTADO de busca que esta no pai, e uma funcao de busca. Passar via props para ser renderizado no componente*/}
        <div className={styles.produtosContainerBuscarOrdenar}>
          <Buscador busca={busca} setBusca={setBusca} />
          {/*<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />*/}
        </div>

        {/* produtos filtros */}
        <div className={styles.produtosFilter}>
          <p className={styles.produtosHeader__content}>
            Selecione seu tipo preferido:
          </p>
          {/* passo para o componente receber o estado e a funcao */}
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>

        {/* itens recebem os estados por props */}

        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </>
  );
}
