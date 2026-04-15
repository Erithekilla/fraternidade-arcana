import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {

    return (
        <header>
            <section className={styles.section}>
                <h1 className={styles.title}>Fraternidade Arcana</h1>
                <div className={styles.list}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/trabalhos/">Trabalhos</Link></li>
                        <li><Link to="/biblioteca/">Biblioteca</Link></li>
                        <li><Link to="/astrologia/">Astrologia</Link></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;