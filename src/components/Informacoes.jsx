import lucifer from '../assets/lucifer.png'
import altar from '../assets/altar.jpg'
import styles from './Informacoes.module.css'

function Informacoes() {

    return (
        <div className={styles.infos}>
            <div className={styles.lucifer_container}>
                <img src={lucifer} alt="lucifer" className={styles.lucifer_img} />
            </div>
            <div className={styles.altar_container}>
                <img src={altar} alt="altar" className={styles.altar_img} />
            </div>
        </div>
    );
}

export default Informacoes;