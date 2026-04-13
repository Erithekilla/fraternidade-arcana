import styles from './Biblioteca.module.css';

function Biblioteca() {
    return(
        <section className={styles.section}>
            <div className={styles.title}>
                <h1>Biblioteca Pública</h1>
            </div>
            <div className={styles.biblioteca}>
                <p className={styles.descricao}>
                    A Biblioteca Pública da Fraternidade Arcana é um espaço dedicado ao compartilhamento de conhecimento esotérico e espiritual.
                    Aqui você encontra livros, grimórios e materiais sobre Daemonolatria, Cabala, Satanismo, Thelema, Hermetismo e diversos outros caminhos espirituais.
                </p>
                <div className={styles.link_drive}>
                    <a href="https://drive.google.com/drive/folders/1iifhOyznkiSCyY4t4Vz0Qx-H8U4dm0h-" target="_blank">
                        <button className={styles.btn}>Acessar Biblioteca</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Biblioteca;
