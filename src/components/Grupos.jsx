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
                        <p>Lorem blablabum
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
                        <p>Lorem blablabum
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