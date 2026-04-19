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
                            <h2>a partir de R$8,00</h2>
                        </div>
                        <div className={styles.descricao_text}>
                            <p>O Tarot é um espelho da alma. Através das cartas, revelamos as energias que influenciam seu presente e abrimos caminhos para compreender seu passado e vislumbrar seu futuro. Uma ferramenta ancestral de autoconhecimento e orientação.</p>
                            <ul className={styles.preco_lista}>
                                <li><strong>Tiragem de 7 cartas</strong> — R$25,00</li>
                                <li><strong>Sim ou não</strong> — R$8,00</li>
                                <li><strong>Previsão da semana</strong> — R$20,00</li>
                                <li><strong>Previsão do mês</strong> — R$35,00</li>
                            </ul>
                            <p className={styles.obs}>Pagamento via PIX. Agende sua sessão!</p>
                        </div>
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Gostaria%20de%20agendar%20uma%20tiragem%20de%20tarot%20e%20conhecer%20as%20previsões%20das%20cartas." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Interpretação de Sonhos</h2>
                            <h2>R$30,00</h2>
                        </div>
                        <div className={styles.descricao_text}>
                            <p>Os sonhos são mensagens diretas do seu inconsciente. Cada símbolo carrega um significado profundo que, quando compreendido, revela emoções, desejos e alertas importantes. Faço uma análise detalhada para ajudar você a decifrar o que sua alma está comunicando.</p>
                            <p className={styles.obs}>Pagamento via PIX. Agende sua sessão!</p>
                        </div>
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Gostaria%20de%20entender%20melhor%20um%20sonho%20que%20tive%20e%20solicitar%20uma%20interpretação." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Numerologia</h2>
                            <h2>R$30,00</h2>
                        </div>
                        <div className={styles.descricao_text}>
                            <p>Os números que regem sua vida carregam vibrações específicas que influenciam sua personalidade, talentos e desafios. Através do mapa numerológico, revelamos esses padrões e oferecemos direcionamento para alinhar sua jornada com seu propósito.</p>
                            <p className={styles.obs}>Pagamento via PIX. Agende sua sessão!</p>
                        </div>
                        <div className={styles.link_card}>
                            <a href="https://wa.me/556192656585?text=Olá!%20Tenho%20interesse%20em%20conhecer%20meu%20mapa%20numerológico%20e%20o%20que%20os%20números%20dizem%20sobre%20mim." target="_blank">Clique para contato!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.trabalho_card}>
                        <div className={styles.trabalho_text}>
                            <h2>Vidas Passadas</h2>
                            <h2>R$40,00</h2>
                        </div>
                        <div className={styles.descricao_text}>
                            <p>Muitos dos padrões que repetimos têm origem em experiências de outras encarnações. A regressão a vidas passadas permite identificar e liberar essas memórias, trazendo cura, compreensão e transformação para sua vida atual.</p>
                            <p className={styles.obs}>Pagamento via PIX. Agende sua sessão!</p>
                        </div>
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