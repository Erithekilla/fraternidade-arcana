import Header from "../components/Header"
import Footer from "../components/Footer"
import './App.css'
import oiac from '../../public/img/oiac.jpg'

function App() {
    return(
        <>
            <Header />
            <section className="oiac">
                <div className="oiac_main">
                    
                    <div className="oiac_title">
                        <h2>Ordem Iniciática - Árvore do Conhecimento</h2>
                    </div>
                    <img src={oiac} alt="" />
                    <div className="oiac_text">
                        <p>A Ordem Iniciática - Árvore do Conhecimento (OIÁC) é uma ordem totalmente livre de religião e qualquer tipo de dogmas, somos uma ordem focada no aperfeiçoamento pessoal e conexão com o Divino.</p>
                    </div>
                </div>
            </section>
                
            <Footer />
        </>
    )
}

export default App;