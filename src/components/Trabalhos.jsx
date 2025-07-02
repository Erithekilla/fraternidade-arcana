import styles from './Trabalhos.module.css'
import tarot from '../../public/img/tarot.jpeg'
import sonhos from '../../public/img/sonhos.jpeg'
import numerologia from '../../public/img/numerologia.jpeg'
import vidas_passadas from '../../public/img/vidas_passadas.jpeg'

function Trabalhos(){
    return(
        <>
        <div className={styles.title}>
            <h1>Trabalhos</h1>
        </div>
            <section className={styles.trabalho_sessao}>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Tiragem de Tarot</h2>
                        </div>
                        <img src={tarot} alt="Tarot" />
                        <div className={styles.link_card}>
                            <a href="#">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Interpretação de sonhos</h2>
                        </div>
                        <img src={sonhos} alt="Tarot" />
                        <div className={styles.link_card}>
                            <a href="#">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Numerologia</h2>
                        </div>
                        <img src={numerologia} alt="Tarot" />
                        <div className={styles.link_card}>
                            <a href="#">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Vidas passadas</h2>
                        </div>
                        <img src={vidas_passadas} alt="Tarot" />
                        <div className={styles.link_card}>
                            <a href="#">Clique para contato!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trabalhos;