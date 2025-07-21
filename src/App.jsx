import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Trabalhos from './components/Trabalhos.jsx';
import Sobre from './components/Sobre.jsx';
import Fraternidade from './components/Fraternidade.jsx'
import './App.css';
function App() {

  return (
    <>
      <Header />
      <section className="wallpaper">
        <div className="img_wallpaper">
          <h1>Louvado sejam os Deuses!</h1>
        </div>
      </section>
      <Fraternidade />
      <Footer />
    </>
  )
}

export default App
