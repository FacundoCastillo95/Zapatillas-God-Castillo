import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import {products} from './components/products';
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer products={products} />
    </div>
  );
}

export default App;
