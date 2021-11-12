import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import {products} from './components/products';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer products={products} />
    <ItemDetailContainer products={products} />
    </div>
  );
}

export default App;
