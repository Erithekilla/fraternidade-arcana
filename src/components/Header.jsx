import { useState } from 'react'
import styles from './Header.module.css';

const base = import.meta.env.BASE_URL || '/';

function Header() {

    return (
        <header>
            <section className={styles.section}>
                <h1 className={styles.title}>Fraternidade Arcana</h1>
                <div className={styles.list}>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/grupos/">Grupos</a></li>
                        <li><a href="/oiac/">OIÁC</a></li>
                        <li><a href="/trabalhos/">Trabalhos</a></li>
                        <li><a href="/biblioteca/">Biblioteca</a></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;