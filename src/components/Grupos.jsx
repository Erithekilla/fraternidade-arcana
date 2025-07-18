import styles from './Grupos.module.css';
import odc from '../../public/img/ordemdocorvo.jpg'
import tdb from '../../public/img/tocadabruxa.jpg'
function Grupos() {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.grupos}>
                    <div className={styles.title}>
                        <h1>Ordem do Corvo Negro</h1>
                    </div>
                    <img src={odc} alt="" />
                    <div className={styles.text}>
                        <p>Ordem consagrada aos Mistérios do Satanismo Anti-Cósmico, trilhando com firmeza os caminhos do Via Sinistra, o Caminho da Mão Esquerda. Esta Ordem se fundamenta no estudo e aplicação operativa das escrituras arcanas que revelam os véus do Abismo e conduzem à Senda da Desintegração Cósmica:

- Liber Azerate — o códice da Corrente 218

- Sitra Achra — o Reino do Outro Lado

- Liber Falxifer I, II & III — as palavras do Senhor da Foice Negra

Além de obras complementares oriundas das tradições da Corrente 218 e da Dragon Rouge.
                        </p>
                        <br />
                        <p>
                            Clique no botão abaixo para entrar no nosso grupo do WhatsApp!
                        </p>
                    </div>
                    <div className={styles.link}>
                        <a href="https://chat.whatsapp.com/HYtvoKDtswp6i5RCXKzO96" target="_blank"><button className={styles.btn}>Clique!</button></a>
                    </div>
                </div>


                <div className={styles.grupos}>
                    <div className={styles.title}>
                        <h1>Toca das bruxas</h1>
                    </div>
                    <img src={tdb} alt="" />
                    <div className={styles.text}>
                        <p>A Toca da Bruxa é um espaço sagrado.
Aqui, acolhemos mulheres em busca de sabedoria, fortalecimento espiritual e apoio real para os desafios do cotidiano.
A partir de agora, algumas condutas serão estritamente proibidas para preservar a energia do templo e garantir o respeito mútuo.
                        </p>
                        <br />
                        <p>
                            Clique no botão abaixo para entrar no nosso grupo do WhatsApp!
                        </p>
                    </div>
                    <div className={styles.link}>
                        <a href="https://chat.whatsapp.com/HYtvoKDtswp6i5RCXKzO96" target="_blank"><button className={styles.btn}>Clique!</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Grupos;