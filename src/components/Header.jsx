import { useState } from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL || '/';

function Header() {

    return (
        <header>
            <section className={styles.section}>
                <h1 className={styles.title}>Fraternidade Arcana</h1>
                <div className={styles.list}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/grupos/">Grupos</Link></li>
                        <li><Link to="/oiac/">OIÁC</Link></li>
                        <li><Link to="/trabalhos/">Trabalhos</Link></li>
                        <li><Link to="/biblioteca/">Biblioteca</Link></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;