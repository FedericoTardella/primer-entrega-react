import './App.css';
import BodyPrincipal from './components/BodyPrincipal';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='DivApp'>
    <Navbar />
    <ItemListContainer greeting={"¡Hola, bienvenido a Lucero Mates!"} />
    <BodyPrincipal />
    <ItemCount />
    <Footer />
    </div>
  );
}

export default App;
