import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Trabalhos from './components/Trabalhos.jsx';
import Sobre from './components/Sobre.jsx';
import './App.css';
function App() {

  return (
    <>
      <Header />
      <section className="wallpaper">
        <div className="img_wallpaper">
          <h1>Erick é muito zika vsfd muahahahusdahdahs</h1>
        </div>
      </section>
      
      <Trabalhos/>
      <Sobre/>
      <Footer />
    </>
  )
}

export default App
