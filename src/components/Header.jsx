import styles from './Header.module.css';

const base = import.meta.env.BASE_URL || '/fraternidade-arcana/';

function Header() {
    return (
        <header>
            <section className={styles.section}>
                <h1 className={styles.title}>Fraternidade Arcana</h1>
                <div className={styles.list}>
                    <ul>
                        <li><a href={`${base}`}>Inicio</a></li>
                        <li><a href="">Grupos</a></li>
                        <li><a href={`${base}oiac/`}>OIÁC</a></li>
                        <li><a href={`${base}trabalhos/`}>Trabalhos</a></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;