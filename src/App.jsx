
import './styles/layout/_app.scss';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { MainCarousel } from './components/Carousel/Carousel'
import { CardOfertas } from './components/Card/Card'


function App() {

  return (
    <>
      <Header />
       <main className="home">
        <section className="home_banner">
          <MainCarousel />
        </section>
        <section className="home_ofertas container">
          <h2 className='text-center mt-5 mb-5'>Super Ofertas</h2>
           <div className="Home_ofertas_box">
               <CardOfertas />       
           </div>
          </section>
        <section className="home_maisvendido"><h2>seção - maisvendido</h2></section>
        <section className="home_atendimento"><h2>seção - atendimento</h2></section>
       </main>
       <Footer />
    </>
  );
}

export default App;
