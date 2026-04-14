import styles from './Trabalhos.module.css'
import tarot from '../assets/tarot.jpeg'
import sonhos from '../assets/sonhos.jpeg'
import numerologia from '../assets/numerologia.jpeg'
import vidas_passadas from '../assets/vidas_passadas.jpeg'

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
                            <a href="https://wa.me/556192656585?text=Olá!%20Gostaria%20de%20agendar%20uma%20tiragem%20de%20tarot%20e%20conhecer%20as%20previsões%20das%20cartas." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Interpretação de sonhos</h2>
                        </div>
                        <img src={sonhos} alt="Sonhos" />
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Gostaria%20de%20entender%20melhor%20um%20sonho%20que%20tive%20e%20solicitar%20uma%20interpretação." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Numerologia</h2>
                        </div>
                        <img src={numerologia} alt="Numerologia" />
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Tenho%20interesse%20em%20conhecer%20meu%20mapa%20numerológico%20e%20o%20que%20os%20números%20dizem%20sobre%20mim." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Vidas passadas</h2>
                        </div>
                        <img src={vidas_passadas} alt="Vidas passadas" />
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20de%20regressão%20e%20conhecer%20minhas%20vidas%20passadas." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trabalhos;