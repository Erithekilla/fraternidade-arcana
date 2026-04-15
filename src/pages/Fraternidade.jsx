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
                    <p>Fraternidade arcana foi criada por Marlyn em 2024 com o intuito de trazer conhecimento de todos os meios espirituais existentes. Atualmente a fraternidade pode ser encontrada como uma comunidade dentro do WhatsApp, onde temos um grupo aberto para conversa totalmente gratuito, e a parte de assinatura para adeptos da Fraternidade.
                    </p>
                </div>
                <div className={styles.text}>
                    <p>Atualmente a Fraternidade Arcana possuí três pessoas dentro da administracão, sendo o Marlyn (Sacerdote), Erick e Agatha (Administradores).
                    </p>
                </div>
                <Sobre />
                <div className={styles.link}>
                    <a href="https://chat.whatsapp.com/JD7ctvK1u06AO5lgNc6c49" target="_blank"><button className={styles.btn}>Entre na Fraternidade!</button></a>
                </div>
                
                
            </section>
        </>
    )
}

export default Fraternidade;