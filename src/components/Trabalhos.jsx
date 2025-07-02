import styles from './Trabalhos.module.css'

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
                        <img src="../../public/img/tarot.jpeg" alt="Tarot" />
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
                        <img src="../../public/img/sonhos.jpeg" alt="Tarot" />
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
                        <img src="../../public/img/numerologia.jpeg" alt="Tarot" />
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
                        <img src="../../public/img/vidas_passadas.jpeg" alt="Tarot" />
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