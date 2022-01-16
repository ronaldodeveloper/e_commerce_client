
import './styles/layout/_app.scss';
import { Button } from './components/Buttons/Button'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'


function App() {

  return (

    <>
      <Header />
       <main className="mainContent">
       <h2>Conteudo</h2>
       </main>
       
       <Footer />
    </>
  );
}

export default App;
