import styles from './Sobre.module.css'
import marlyn from '../assets/marlyn.png'

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
              <p>Mago Cabalísta e Daemonolotra, líder da Fraternidade Arcana. Atuo com magia tem mais de 6 anos. Venho trazendo conhecimento para aqueles que buscam.</p>
            </div>
          </div>
          <div className={styles.admins_row}>
            <div className={styles.eris}>
              <div className={styles.desc_eris}>
                <h2>Eris - Administrador</h2>
                <p>Daemonolotra praticante, criando um sistema simplificado da Daemonolatria. Atuo com a Daemonolatria desde 2024, e desde então crio técnicas para facilitar a conexão do praticante com a entidade e ter grandes resultados.</p>
              </div>
            </div>
            <div className={styles.agatha}>
              <div className={styles.desc_agatha}>
                <h2>Agatha - Administradora</h2>
                <p>Luciferiana, dedicada à feitiçaria e demonolatria. No ocultismo desde os 11 anos, trilho um caminho de autoconhecimento, poder e conexão. ajuda guiando praticantes a harmonizarem suas forças internas e despertarem sua essência mais profunda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Sobre;