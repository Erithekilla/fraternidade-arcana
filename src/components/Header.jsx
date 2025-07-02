import styles from './Header.module.css';
function Header() {
    return (
        <header>
            <section className={styles.section}>
                <h1 className={styles.title}>Fraternidade Arcana</h1>
                <div className={styles.list}>
                    <ul>
                        <li><a href="">Grupos</a></li>
                        <li><a href="">OIÁC</a></li>
                        <li><a href="">Trabalhos</a></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;