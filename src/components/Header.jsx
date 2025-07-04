import { useState } from 'react'
import styles from './Header.module.css';

const base = import.meta.env.BASE_URL || '/fraternidade-arcana/';

function Header() {

    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleSubmenu = () => {
        setShowSubmenu(prev => !prev);
    } 

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
                        <li><button onClick={toggleSubmenu} className={styles.btnSubmenu}>
                            Sobre 
                        </button>
                        {showSubmenu &&(
                            <ul className={styles.subMenu}>
                                <li><a href={`${base}eris/`}>Eris</a></li>
                                <li><a href={`${base}marlyn`}>Melvin</a></li>
                            </ul>
                        )}
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;