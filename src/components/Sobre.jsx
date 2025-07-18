import styles from './Sobre.module.css'
import eris from '../../public/img/erick.jpeg'
import marlyn from '../../public/img/marlyn.png'

const base = import.meta.env.BASE_URL || '/fraternidade-arcana/';

function Sobre(){
    return(
        <section className={styles.sobre_nos}>
        <div className={styles.title}>
            <h1>Sobre nós!</h1>
        </div>   
        <div className={styles.sobre}>
          <div className={styles.marlyn}>
            <img src={marlyn} alt="" />
            <div className={styles.desc_marlyn}>
              <h2>Marlyn - Dono</h2>
              <p>Mago Cabalísta e Daemonolotra, líder da Fraternidade Arcana. Atuo com magia tem mais de 5 anos. Venho trazendo conhecimento para aqueles que buscam.</p>
            </div>
            <a href={`${base}marlyn/`}>Melvin</a>
          </div>
          <div className={styles.eris}>
            <img src={eris} alt="" />
            <div className={styles.desc_eris}>
              <h2>Eris - SubDono</h2>
              <p>Daemonolotra praticante, criando um sistema simplificado da Daemonolatria. Atuo com a Daemonolatria desde 2024, e desde então crio técnicas para facilitar a conexão do praticante com a entidade e ter grandes resultados.</p>
            </div>
            <a href={`${base}eris/`}>Eris</a>
          </div>
        </div>
      </section>
    )
}

export default Sobre;