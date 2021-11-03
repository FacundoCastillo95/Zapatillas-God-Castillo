import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount';


function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer/>
    <div className = "itemCount">
    <ItemCount stock= {5} initial= {1}/>
    </div>
   </div>
  );
}

export default App;
