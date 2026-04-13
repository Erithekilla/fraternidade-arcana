import {Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Trabalhos from './pages/Trabalhos.jsx';
import Sobre from './pages/Sobre.jsx';
import Fraternidade from './pages/Fraternidade.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
import Informacoes from './components/Informacoes.jsx'
import './App.css';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>  
              <div className="louvado_deuses">
                <div className="title"><h1>Lúcifer</h1></div>
                <Informacoes />
              </div>
            <Fraternidade />
          </>
        }></Route>
        <Route path="/trabalhos" element={<Trabalhos />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/biblioteca" element={<Biblioteca />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
