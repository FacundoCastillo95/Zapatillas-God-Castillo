import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount';


function App() {
  return (
    <>
   <Navbar/>
   <ItemListContainer/>
   <ItemCount/>
   </>
  );
}

export default App;
