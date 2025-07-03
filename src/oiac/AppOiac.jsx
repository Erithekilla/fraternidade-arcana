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
                        <h1>Ordem Iniciática - Árvore do Conhecimento</h1>
                    </div>
                    <img src={oiac} alt="" />
                    <div className="oiac_text">
                        <p>A Ordem Iniciática - Árvore do Conhecimento (OIÁC) é uma ordem totalmente livre de religião e qualquer tipo de dogmas, somos uma ordem focada no aperfeiçoamento pessoal e conexão com o Divino.
                        </p>
                        <br />
                        <p>
                            Clique no botão abaixo para entrar no nosso grupo do WhatsApp!
                        </p>
                    </div>
                    <div className="link_oiac">
                        <a href="https://chat.whatsapp.com/HYtvoKDtswp6i5RCXKzO96" target="_blank"><button className="oiac_btn">Clique!</button></a>
                    </div>
                </div>
            </section>
                
            <Footer />
        </>
    )
}

export default App;