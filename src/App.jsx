import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Trabalhos from './components/Trabalhos.jsx';
import Fraternidade from './components/Fraternidade.jsx';
import Sobre from './components/Sobre.jsx';
import Biblioteca from './components/Biblioteca.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <section className="wallpaper">
              <div className="img_wallpaper">
                <h1>Louvado sejam os Deuses!</h1>
              </div>
            </section>
            <Fraternidade />
          </>
        } />

        <Route path="/trabalhos/" element={<Trabalhos />} />
        <Route path="/oiac/" element={<Sobre />} />
        <Route path="/grupos/" element={<Fraternidade />} />
        <Route path="/biblioteca/" element={<Biblioteca />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
