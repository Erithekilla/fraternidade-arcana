import styles from './Biblioteca.module.css';

function Biblioteca() {
    return(
        <>
        <section className={styles.section}>
            <div className={styles.title}>
                <h1>Biblioteca</h1>
            </div>
            <div className={styles.biblioteca}>
                <div className={styles.livro}>
                    <div className={styles.img}>

                    </div>
                    <div className={styles.desc}>
                        <h2>Grimório Veritatum Aeternarum (Vol 1)</h2>
                        <p>Escrito por Marlyn e publicado gratuitamente em 2024, o Grimório Veritatum Aeternarum traz temas como Satanismo, culto a Qayn, Thelema e muito mais.</p>
                    </div>
                </div>
                <div className={styles.livro}>
                    <div className={styles.img}>

                    </div>
                    <div className={styles.desc}>
                        <h2>Hermetismo e Daemonolatria</h2>
                        <p>Escrito por Eris, o livro traz uma reflexão sobre os conceitos Herméticos dentro da Daemonolatria, trazendo questionamentos e explicando como alguns conceitos herméticos podem ser aplicados e vistos dentro da Daemonolatria.</p>
                    </div>
                </div>
            </div>

            <div className={styles.drive}>

            </div>
        </section>
        </>
    
    )
}

export default Biblioteca;