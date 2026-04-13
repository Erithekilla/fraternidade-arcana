import styles from './Footer.module.css';
function Footer() {
    return(
        <footer>
            <section className={styles.section}>
                <p className={styles.title}>Fraternidade Arcana</p>
                <p>© 2026 Fraternidade Arcana. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}

export default Footer;