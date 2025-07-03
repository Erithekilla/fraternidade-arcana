import styles from './Fraternidade.module.css';
import Sobre from './Sobre.jsx'

function Fraternidade() {
    return(
        <>
            <section className={styles.main}>
                <div className={styles.title}>
                    <h1>Fraternidade Arcana</h1>
                </div>
                <div className={styles.text}>
                    <p>Fraternidade arcana é uma fraternidade criada por Marlyn em 2024 com o intuito de trazer conhecimento de todos os meios espirituais existentes. Atualmente a fraternidade pode ser encontrada como uma comunidade dentro do WhatsApp, onde temos 4 grupos no total, cada um falando de uma certa área dentro da espiritualidade.
                    </p>
                </div>
                <div className={styles.text}>
                    <p>Atualmente a Fraternidade possui duas pessoas dentro da Administração, sendo eles o Marlyn (Dono) e Eris (SubDono).
                    </p>
                </div>
                <Sobre />
                <div className={styles.link}>
                    <a href="https://chat.whatsapp.com/Ed71oiJzR4B1MoKdI34wPe" target="_blank"><button className={styles.btn}>Entre na Fraternidade!</button></a>
                </div>
                
                
            </section>
        </>
    )
}

export default Fraternidade;