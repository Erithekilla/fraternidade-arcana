import styles from './Biblioteca.module.css';
import grimorio from '../../public/img/grimorio.jpg';
import hermetismo_daemonolatria from '../../public/img/hermetismo_daemonolatria.jpg';

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
                        <img src={grimorio} alt="" />
                    </div>
                    <div className={styles.desc}>
                        <h2>Grimório Veritatum Aeternarum (Vol 1) - Marlyn</h2>
                        <p>Escrito por Marlyn e publicado gratuitamente em 2024, o Grimório Veritatum Aeternarum traz temas como Satanismo, culto a Qayn, Thelema e muito mais.</p>
                        <a href="https://drive.google.com/file/d/1iZA4T1dkLnUR-W70ncPtNQd7GeVUWZZr/view?usp=drive_link" target="_blank"><button className={styles.btn}>Download</button></a>
                    </div>
                </div>
                <div className={styles.livro}>
                    <div className={styles.img}>
                        <img src={hermetismo_daemonolatria} alt="" />
                    </div>
                    <div className={styles.desc}>
                        <h2>Hermetismo e Daemonolatria - Eris</h2>
                        <p>Escrito por Eris, o livro traz uma reflexão sobre os conceitos Herméticos dentro da Daemonolatria, trazendo questionamentos e explicando como alguns conceitos herméticos podem ser aplicados e vistos dentro da Daemonolatria.</p>
                        <a href="https://drive.google.com/file/d/1qrKaIQu0aBEDapZfybgxvf-Nw31fFaQl/view?usp=drive_link" target="_blank"><button className={styles.btn}>Download</button></a>
                    </div>
                </div>
            </div>

            <div className={styles.drive}>
                <div className={styles.text_drive}>
                    <p>Para encontrar todos esses livros acima, mais alguns extras, apenas clique no link abaixo!</p>
                </div>
                <div className={styles.link_drive}>
                    <a href="https://drive.google.com/drive/folders/1iifhOyznkiSCyY4t4Vz0Qx-H8U4dm0h-" target="_blank">
                        <button className={styles.btn}>Clique aqui!</button>
                    </a>
                </div>
            </div>
        </section>
        </>
    
    )
}

export default Biblioteca;